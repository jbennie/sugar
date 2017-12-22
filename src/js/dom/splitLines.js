import _map from 'lodash/map'
import __throttle from '../utils/functions/throttle'

/**
 * Split each lines inside an HTMLElement by scoping them inside some tags.
 * Here's an result sample for :
 * Hello
 * World
 *
 * ```html
 * <p class="split-lines">Hello</p>
 * <p class="split-lins">World</p>
 * ```
 *
 * @example 	js
 * import __splitLines from 'coffeekraken-sugar/js/dom/splitLines'
 * const myCoolElement = document.querySelector('.my-cool-element');
 * __splitLines(myCoolElement);
 *
 * @param 	{HTMLElement} 		elm 		 	The HTMLElement to split lines in
 * @param 	{String} 			[tag="p"] 		The tag to use to split the lines
 * @param 	{String} 			[tagClass="s-split-lines"] 		The class to apply on the tags
 * @return 	{HTMLElement} 						The HTMLElement processed
 * @author 	Olivier Bossel <olivier.bossel@gmail.com>
 */
export default function splitLines(elm, tag = 'p', tagClass = 'split-lines') {

	// apply again on resize
	window.addEventListener('resize', __throttle((e) => {
		_splitLines(elm, tag, tagClass);
	}, 150));

	// first call
	_splitLines(elm, tag, tagClass);

	return elm;
}

function _splitLines(elm, tag, tagClass) {
	let string = elm._splitLinesOriginalString;
	if ( ! string) {
		string = elm.innerHTML;
		elm._splitLinesOriginalString = string;
	}

	elm.classList.add(tagClass);

	// wrap each characters inside two spans
	let words = string.match(/<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g);
	words = _map(words, (word) => {
		return `<span class="s-split-lines">${word}</span>`
	}).join(' ');
	elm.innerHTML = words;

	const spans = elm.querySelectorAll('span.s-split-lines');
	let top = null;
	const lines = [];
	let line = [];
	[].forEach.call(spans, (spanElm) => {
		const spanTop = spanElm.getBoundingClientRect().top;
		if (top && spanTop !== top) {
			lines.push(line.join(' '));
			line = [];
		}
		line.push(spanElm.innerHTML.trim());
		top = spanTop;
	});
	lines.push(line.join(' '));

	elm.innerHTML = lines.map((lineStr) => {
		return `<${tag} class="${tagClass}__line">${lineStr}</${tag}>`;
	}).join('');
}
