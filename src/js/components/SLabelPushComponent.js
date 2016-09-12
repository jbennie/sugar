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
import __style from '../dom/style'

import __textWidth from '../dom/textWidth'
import __getStyleProperty from '../dom/getStyleProperty'

import sElementsManager from '../core/sElementsManager'

import SParticlesSystemComponent from './SParticlesSystemComponent';

import STemplate from '../core/STemplate'

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
		this._label.setAttribute('s-template-keep', 'style');

		// get the paddings
		this._labelPaddingLeft = parseInt(__getStyleProperty(this._label, 'paddingLeft'));
		this._labelPaddingRight = parseInt(__getStyleProperty(this._label, 'paddingRight'));

		const labelBackgroundColor = this._label.style.backgroundColor;
		const labelBackgroundImage = this._label.style.backgroundImage;
		this._labelBackground = labelBackgroundColor || labelBackgroundImage;

		// listen for focus in field
		this._input.addEventListener('focus', this.render.bind(this));
		this._input.addEventListener('blur', this.render.bind(this));
		this._input.addEventListener('keyup', this.render.bind(this));
	}

	/**
	 * enable
	 * Enable the component
	 * @return 	{SLabelPushComponent}
	 */
	enable() {
		super.enable();
		// maintain chainability
		return this;
	}

	/**
	 * disable
	 * Disable the component
	 * @return 	{SLabelPushComponent}
	 */
	disable() {
		super.disable();
		// maintain chainability
		return this;
	}

	/**
	 * render
	 * Render the component
	 * @return 	{void}
	 */
	render(e = null) {
		if (e) {
			if (e.type === 'focus') {
				this._isFocus = true;
			} else if (e.type === 'blur') {
				this._isFocus = false;
			}
		}
		super.render();
		this._setInputPadding();
		this._setLabelSize();
	}

	/**
	 * _setInputPadding
	 * Set the input correct padding depending on the label size
	 * @return 	{void}
	 */
	_setInputPadding() {

		if (this._input.hasAttribute('placeholder')) {
			__style(this._input, {
				paddingLeft : this._inputPaddingLeft
			});
			return;
		}

		if (this._isFocus) {
			// set the padding
			__style(this._input, {
				paddingLeft : this._inputPaddingLeft
			});
		} else {
			if ( ! this._input.value) {
				// set the padding
				let paddingLeft = this._labelWidth;
				if (this._labelBackground) {
					paddingLeft += this._inputPaddingLeft;
				}
				__style(this._input, {
					paddingLeft : paddingLeft + 'px'
				});
			}
		}
	}

	/**
	 * _setLabelSize
	 * Set the label width depending on the input text width
	 * @return 	{void}
	 */
	_setLabelSize() {

		// if no value in input
		if ( ! this._input.value) {
			// reset the label size
			__style(this._label, {
				opacity : 1,
				width : ''
			});
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
			__style(this._label, {
				opacity : 0
			});
			// this._label.style.opacity = 0;
		} else if (diff <= this._labelWidth) {
			__style(this._label, {
				opacity : 1,
				width : diff + 'px'
			});

		}
	}
}

STemplate.registerComponentIntegration('SLabelPushComponent', (component) => {
	STemplate.keepAttribute(component._input, 'style')
			 .keepAttribute(component._label, 'style');
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SLabelPushComponent = SLabelPushComponent;

// export modules
export default SLabelPushComponent;
