/*
 * Sugar-activate.js
#
 * This little js file allow you to detect when an element has been inserted in the page in conjunction with the scss mixin
#
 * @author   Olivier Bossel <olivier.bossel@gmail.com>
 * @created  20.01.16
 * @updated  20.01.16
 * @version  1.0.0
 */
import SComponent from '../core/SComponent'
import querySelectorLive from '../dom/querySelectorLive'
import __getAnimationProperties from '../dom/getAnimationProperties';
import __next from '../dom/next'
import __previous from '../dom/previous'
import __offset from '../dom/offset'
import __scrollTop from '../dom/scrollTop'
import __uniqid from '../tools/uniqid'
import SEvent from '../core/SEvent'

import __textWidth from '../dom/textWidth'
import __getStyleProperty from '../dom/getStyleProperty'

import SParticlesSystemComponent from './SParticlesSystemComponent';

// class
class SLabelPushComponent extends SComponent {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SComponent.setup('sLabelPush', type, settings);
	}

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sLabelPush') {
		super(name, elm, {
		}, settings);
	}

	/**
	 * On added to dom
	 */
	_init() {
		// init component
		super._init();

		// grab the input
		this._input = this.elm.querySelector(':scope > input');
		this._inputPaddingRight = parseInt(__getStyleProperty(this._input, 'paddingRight'));
		this._inputPaddingLeft = parseInt(__getStyleProperty(this._input, 'paddingLeft'));

		// calculate the label width
		this._label = this.elm.querySelector(':scope > span');
		this._labelWidth = this._label.offsetWidth;

		// get the paddings
		this._labelPaddingLeft = parseInt(__getStyleProperty(this._label, 'paddingLeft'));
		this._labelPaddingRight = parseInt(__getStyleProperty(this._label, 'paddingRight'));

		const labelBackgroundColor = this._label.style.backgroundColor;
		const labelBackgroundImage = this._label.style.backgroundImage;
		this._labelBackground = labelBackgroundColor || labelBackgroundImage;

		// set the padding to the input
		this._setInputPadding({
			type : 'blur'
		});

		// listen for focus in field
		this._input.addEventListener('focus', this._setInputPadding.bind(this));
		this._input.addEventListener('blur', this._setInputPadding.bind(this));
		this._input.addEventListener('keyup', this._setLabelSize.bind(this));
	}

	/**
	 * enable
	 * Enable the component
	 * @return 	{SLabelPushComponent}
	 */
	enable() {
		// maintain chainability
		return this;
	}

	/**
	 * disable
	 * Disable the component
	 * @return 	{SLabelPushComponent}
	 */
	disable() {
		// maintain chainability
		return this;
	}

	/**
	 * _setInputPadding
	 * Set the input correct padding depending on the label size
	 * @return 	{void}
	 */
	_setInputPadding(e) {
		if (this._input.hasAttribute('placeholder')) {
			this._input.style.paddingLeft = '';
			return;
		}
		if (e.type === 'focus') {
			// set the padding
			this._input.style.paddingLeft = '';
		} else if (e.type === 'blur') {
			if ( ! this._input.value) {
				// set the padding
				let paddingLeft = this._labelWidth;
				if (this._labelBackground) {
					paddingLeft += this._inputPaddingLeft;
				}
				this._input.style.paddingLeft = paddingLeft + 'px';
			}
		}
	}

	/**
	 * _setLabelSize
	 * Set the label width depending on the input text width
	 * @return 	{void}
	 */
	_setLabelSize(e) {

		if (this._input.value) {
			this._input.setAttribute('value', this._input.value);
		} else {
			this._input.removeAttribute('value');
		}

		// if no value in input
		if ( ! this._input.value) {
			// reset the label size
			this._label.style.opacity = 1;
			this._label.style.width = '';
			return;
		}
		// get the content width
		const width = __textWidth(this._input);
		// calculate the difference
		let diff = this._input.offsetWidth - width - this._labelPaddingLeft;
		// add the padding right if is a background
		if (this._labelBackground) {
			diff -= this._inputPaddingRight;
		}

		// set the label size
		if (diff <= this._labelPaddingLeft + this._labelPaddingRight + 10) {
			// hide the label
			this._label.style.opacity = 0;
		} else if (diff <= this._labelWidth) {
			this._label.style.opacity = 1;
			this._label.style.width = diff + 'px';
		}
	}
}

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SLabelPushComponent = SLabelPushComponent;

// export modules
export default SLabelPushComponent;
