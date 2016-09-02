import querySelectorLive from '../dom/querySelectorLive';

querySelectorLive('.label--inside, .label--material').once().inViewport().subscribe((elm) => {
	const label = elm.querySelector(':scope > span');
	const input = elm.querySelector(':scope > input');
	// get the width of the span
	let labelWidth = label.offsetWidth;
	// set the values
	input.style.paddingLeft = labelWidth + 'px';
	// set the input value
	input.addEventListener('keyup', (e) => {
		if (input.value) {
			input.setAttribute('value', input.value);
		} else {
			input.removeAttribute('value');
		}
	});
});
