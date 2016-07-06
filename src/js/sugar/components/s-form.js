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
import SComponent from '../core/s-component'
import {
	querySelectorLive
} from '../core/s-dom'
import Pikaday from 'pikaday-time'
import sSettings from '../core/s-settings'

querySelectorLive('.label--inside, .label-inside', (elm) => {

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
querySelectorLive('[data-s-datepicker]', (elm) => {
	new SugarDatepickerElement(elm);
});
querySelectorLive('[data-s-datetimepicker]', (elm) => {
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
