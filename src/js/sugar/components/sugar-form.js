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
import SugarElement from '../core/sugar-element'
import sDom from '../core/sugar-dom'
import Pikaday from 'pikaday-time'
var _get = require('lodash/get');

// Actual activate element class
class SugarRadioboxElement extends SugarElement {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SugarElement.setup('sRadiobox', type, settings);
	}

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}) {
		super('sRadiobox', elm, {
		}, settings);

		// init
		this.init();
	}

	/**
	 * Init
	 */
	init() {
		
		// try to get the id or name of the input
		let input_for = this.elm.id || this.elm.name;

		// stop if already the s-radiobox div
		if (this.elm.nextSibling && this.elm.nextSibling.nodeName != '#text' && sDom.hasClass(this.elm.nextSibling, 's-radiobox')) return;

		// append an empty element after the input to style it
		let nodeType = 'div';
		if ( this.elm.parentNode.nodeName.toLowerCase() != 'label') {
			nodeType = 'label';
		}
		let styleNode = document.createElement(nodeType);
		styleNode.className = 's-radiobox';
		if (nodeType == 'label' && input_for) {
			styleNode.setAttribute('for', input_for);
		}
		this.elm.parentNode.insertBefore(styleNode, this.elm.nextSibling);

	}
}

// init the radiobox
sDom.querySelectorLive('[data-s-radiobox][type="checkbox"],[data-s-radiobox][type="radio"]', (elm) => {
	new SugarRadioboxElement(elm);
});

// Date picker
class SugarDatepickerElement extends SugarElement {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SugarElement.setup('sDatepicker', type, settings);
	}

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}) {
		super('sDatepicker', elm, {
		}, settings);

		// init
		this._init();
	}

	/**
	 * Init
	 */
	_init() {
		this.picker = new Pikaday({...{
			field : this.elm,
			showTime : false
		}, ...this.settings()});
	}
}

// Datetime picker
class SugarDatetimepickerElement extends SugarElement {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SugarElement.setup('sDatetimepicker', type, settings);
	}

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}) {
		super('sDatetimepicker', elm, {
		}, settings);

		// init
		this._init();
	}

	/**
	 * Init
	 */
	_init() {
		this.picker = new Pikaday({...{
			field : this.elm,
			showTime : true,
			autoClose : false
		}, ...this.settings()});
	}
}

// init the datepicker
sDom.querySelectorLive('[data-s-datepicker]', (elm) => {
	new SugarDatepickerElement(elm);
});
// init the datetimepicker
sDom.querySelectorLive('[data-s-datetimepicker]', (elm) => {
	new SugarDatetimepickerElement(elm);
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.RadioboxElement = SugarRadioboxElement;
window.sugar.DatepickerElement = SugarDatepickerElement;
window.sugar.DatetimepickerElement = SugarDatetimepickerElement;

// export modules
module.exports = {
	RadioboxElement : SugarRadioboxElement,
	DatepickerElement : SugarDatepickerElement,
	DatetimepickerElement : SugarDatetimepickerElement
};