'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = splitLines;

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _throttle = require('../utils/functions/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
 * @author 	Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function splitLines(elm) {
	var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'p';
	var tagClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'split-lines';


	// apply again on resize
	window.addEventListener('resize', (0, _throttle2.default)(function (e) {
		_splitLines(elm, tag, tagClass);
	}, 150));

	// first call
	_splitLines(elm, tag, tagClass);

	return elm;
}

function _splitLines(elm, tag, tagClass) {
	var string = elm._splitLinesOriginalString;
	if (!string) {
		string = elm.innerHTML;
		elm._splitLinesOriginalString = string;
	}

	elm.classList.add(tagClass);

	// wrap each characters inside two spans
	var words = string.match(/<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g);
	words = (0, _map3.default)(words, function (word) {
		return '<span class="s-split-lines">' + word + '</span>';
	}).join(' ');
	elm.innerHTML = words;

	var spans = elm.querySelectorAll('span.s-split-lines');
	var top = null;
	var lines = [];
	var line = [];
	[].forEach.call(spans, function (spanElm) {
		var spanTop = spanElm.getBoundingClientRect().top;
		if (top && spanTop !== top) {
			lines.push(line.join(' '));
			line = [];
		}
		line.push(spanElm.innerHTML.trim());
		top = spanTop;
	});
	lines.push(line.join(' '));

	elm.innerHTML = lines.map(function (lineStr) {
		return '<' + tag + ' class="' + tagClass + '__line">' + lineStr + '</' + tag + '>';
	}).join('');
}