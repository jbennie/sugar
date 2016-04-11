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
import sTools from '../core/sugar-tools'
import Pikaday from 'pikaday-time'
import sSettings from '../core/sugar-settings'
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

// Select
class SugarSelectElement extends SugarElement {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SugarElement.setup('sSelect', type, settings);
	}

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}) {
		super('sSelect', elm, {
		}, settings);

		// init
		this._init();
	}

	/**
	 * Init
	 */
	_init() {

		// generate a custom id
		this.id = sTools.uniqid();

		// set the id to the element to
		// be able to reach it and listen for
		// new items in it
		this.elm.setAttribute('data-s-select', this.id);

		// build html structure
		this._buildHTML();

		// listen for click outside of the dropdown
		document.addEventListener('click', (e) => {
			if ( ! this.container.contains(e.target)) {
				this.open_checkbox.checked = false;
			}
		});

		// listen when opened to focus in searchfield
		this.open_checkbox.addEventListener('change', (e) => {
			if (e.target.checked) {
				// focus on search if exist
				this.search_field.focus();
			}
		});

		// handle close
		document.addEventListener('keyup', (e) => {
			if ((e.keyCode == 9 // tab
				|| e.keyCode == 27 // escape
				) && this.isOpen()) {
				this.close();
			}
		});

		// this.open_checkbox.addEventListener('focus', (e) => {
		// 	this.open();
		// });

		// listen for new elements in the select
		sDom.querySelectorLive('[data-s-select="'+this.id+'"] option', (elm) => {
			// handle option
			this._handleOption(elm);
		}, this.elm);
	}

	/**
	 * Create html structure
	 */
	_buildHTML() {
		let container = document.createElement('div');
		container.setAttribute('class',this.elm.getAttribute('class') + ' s-select');

		let open_checkbox = document.createElement('input');
		open_checkbox.type = 'checkbox';
		open_checkbox.setAttribute('class','s-select__open-checkbox');
		open_checkbox.setAttribute('data-input-activator', true);
		open_checkbox.style.position = 'absolute';
		open_checkbox.style.left = '-3000px';

		let selection_container = document.createElement('div');
		selection_container.setAttribute('class', 's-select__selection');
		let selection_aligner = document.createElement('div');
		selection_aligner.setAttribute('class', 's-select__selection-aligner');

		let dropdown = document.createElement('div');
		dropdown.setAttribute('class', 's-select__dropdown');

		// search
		let search_container = document.createElement('div');
		search_container.setAttribute('class','s-select__search-container');
		let search_field = document.createElement('input');
		search_field.type = "text";
		search_field.setAttribute('class', 's-select__search-field');
		search_field.setAttribute('tabindex', -1);

		// choices
		let choices_container = document.createElement('ul');
		choices_container.setAttribute('class', 's-select__choices');

		// append to document
		selection_container.appendChild(selection_aligner);
		selection_container.appendChild(search_field);

		dropdown.appendChild(search_container);
		dropdown.appendChild(choices_container);

		container.appendChild(open_checkbox);
		container.appendChild(selection_container);
		container.appendChild(dropdown);
		

		this.elm.parentNode.insertBefore(container, this.elm);
		// document.body.appendChild(container);

		// hide element
		this.elm.style.display = 'none';

		// save into object
		this.container = container;
		this.search_field = search_field;
		this.choices_container = choices_container;
		this.open_checkbox = open_checkbox;
	}

	/**
	 * Handle option
	 */
	_handleOption(option) {
		
		// create the choice
		let choice = document.createElement('li');

		let childs = option.children;
		if ( ! childs.length) {
			choice.innerHTML = option.innerHTML;
		} else {
			choice.appendChild(childs);
		}

		// append new choice
		this.choices_container.appendChild(choice);

	}

	/**
	 * Is opened
	 */
	isOpen() {
		return this.open_checkbox.checked;
	}

	/**
	 * Close
	 */
	close() {
		this.open_checkbox.checked = false;
	}

	/**
	 * Close
	 */
	open() {
		this.open_checkbox.checked = true;
	}

}

// init the radiobox
sDom.querySelectorLive('select[data-s-select]', (elm) => {
	new SugarSelectElement(elm);
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