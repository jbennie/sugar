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
import SElement from '../core/s-element'
import sDom from '../core/s-dom'
import sTools from '../core/s-tools'
import Pikaday from 'pikaday-time'
import sSettings from '../core/s-settings'

// Actual activate element class
class SugarRadioboxElement extends SElement {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SElement.setup('sRadiobox', type, settings);
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
class SugarDatepickerElement extends SElement {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SElement.setup('sDatepicker', type, settings);
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
		// try to get the theme automatically
		let theme = null;
		if (sSettings.colors) {
			for (let prop in sSettings.colors) {
				if (this.elm.classList.contains(prop)
					|| this.elm.classList.contains('input--'+prop)) {
					theme = prop;
					break;
				}
			}
		}

		// check if a "from" is specified
		let from = this.setting('from');
		if (from) {
			// listen for change on the input
			document.querySelector(from).addEventListener('change', (e) => {
				// check if we have the pikaday instance
				if (e.target.sDatepicker && e.target.sDatepicker.picker) {
					// get the picker date
					let date = e.target.sDatepicker.picker.getDate();
					this.picker.setStartRange(date);
					this.picker.setMinDate(date);
					e.target.sDatepicker.picker.setStartRange(date);
					e.target.sDatepicker.picker.hide();
					e.target.sDatepicker.picker.show();
				}
			});
		}

		// check if a "to" is specified
		let to = this.setting('to');
		if (to) {
			// listen for change on the input
			document.querySelector(to).addEventListener('change', (e) => {
				// check if we have the pikaday instance
				if (e.target.sDatepicker && e.target.sDatepicker.picker) {
					// get the picker date
					let date = e.target.sDatepicker.picker.getDate();
					this.picker.setEndRange(date);
					this.picker.setMaxDate(date);
					e.target.sDatepicker.picker.setEndRange(date);
					e.target.sDatepicker.picker.hide();
					e.target.sDatepicker.picker.show();
				}
			});
		}

		// init the picker
		this.picker = new Pikaday({...{
			field : this.elm,
			showTime : false,
			theme : theme
		}, ...this.settings()});
	}
}

sDom.querySelectorLive('.label--inside, .label-inside', (elm) => {

	let span = elm.querySelector(':scope > span');
	if (span) {
		span.parentNode.removeChild(span);
	}

	// get all childs
	let childs = elm.querySelectorAll(':scope > *');
	// remove all childs to add them after
	[].forEach.call(childs, (child) => {
		child.parentNode.removeChild(child);
	});

	// build correct html structure
	let innerText = elm.innerText || elm.textContent;
	if (innerText.trim()) {
		let text = elm.innerText || elm.textContent;

		// empty the label
		elm.innerHTML = '';

		// add the children again
		[].forEach.call(childs, (child) => {
			elm.appendChild(child);
		});

		// create and add the span
		if ( ! span) {
			span = document.createElement('span');
		}
		span.innerHTML = text;
	} else {
		// add the children again
		[].forEach.call(childs, (child) => {
			elm.appendChild(child);
		});
	}

	// add span at end
	elm.appendChild(span);

	// find the input inside to set the value on it
	let input = elm.querySelector('input, textarea');
	if (input) {
		input.addEventListener('keyup', (e) => {
			input.setAttribute('value',input.value);
		});
		input.addEventListener('change', (e) => {
			input.setAttribute('value',input.value);
		});
		input.setAttribute('value',input.value);
	}

	// set the input width - the span one
	setTimeout(() => {
		let pl = window.getComputedStyle(input).getPropertyValue('padding-left');
		input.style.paddingLeft = (parseInt(pl) + span.offsetWidth) +'px';
	});
	
});

// init the datepicker
sDom.querySelectorLive('[data-s-datepicker]', (elm) => {
	new SugarDatepickerElement(elm);
});
sDom.querySelectorLive('[data-s-datetimepicker]', (elm) => {
	new SugarDatepickerElement(elm, {
		autoClose : false,
		showTime : true
	});
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.RadioboxElement = SugarRadioboxElement;
window.sugar.DatepickerElement = SugarDatepickerElement;

// export modules
module.exports = {
	RadioboxElement : SugarRadioboxElement,
	DatepickerElement : SugarDatepickerElement
};