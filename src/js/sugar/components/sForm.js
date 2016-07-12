import querySelectorVisibleLiveOnce from '../dom/querySelectorVisibleLiveOnce';
import isVisible from '../dom/isVisible';
import closestNotVisible from '../dom/closestNotVisible';

querySelectorVisibleLiveOnce('.label--inside', (elm) => {

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

	let pl = window.getComputedStyle(input).getPropertyValue('padding-left');
	// get the width of the span
	let spanWidth = span.offsetWidth;
	// set the values
	input.style.paddingLeft = (parseInt(pl) + spanWidth) + 'px';

});
