'use strict';

exports.__esModule = true;
exports.default = textWidth;

var _getStyleProperty = require('./getStyleProperty');

var _getStyleProperty2 = _interopRequireDefault(_getStyleProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get the text width in px of a passed string or the passed HTMLElement
 *
 * @name 		textWidth
 * @param 		{String}{HTMLElement}		source 		The source to process
 * @return 		{Number} 								The calculated width of the text
 *
 * @example 	js
 * import textWidth from 'sugarcss/js/dom/textWidth'
 * // text of an HTMLElement
 * const width = textWidth(myCoolHTMLElement);
 *
 * // text directly (no font-size management so it's less accurate...)
 * const width = textWidth('Hello World');
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function textWidth(source) {
	// create an element
	var elm = document.createElement('span');
	elm.style.whiteSpace = 'nowrap';
	elm.style.position = 'absolute';
	elm.style.visibility = 'hidden';
	var text = source;

	// if the source if an html element
	if (source.tagName) {
		// set the text into the element
		var tagName = source.tagName.toLowerCase();
		switch (tagName) {
			case 'input':
			case 'textarea':
				text = source.value;
				break;
			default:
				text = source.innerText;
				break;
		}

		// get the font properties
		var fs = (0, _getStyleProperty2.default)(source, 'font-size');
		var ff = (0, _getStyleProperty2.default)(source, 'font-family');
		var ls = (0, _getStyleProperty2.default)(source, 'letter-spacing');
		elm.style.fontSize = fs;
		elm.style.fontFamily = ff;
		elm.style.letterSpacing = ls;
	}

	// replacing spaces
	text = text.replace(/ /g, '\xA0');
	// set the element content
	elm.innerHTML = text;
	// append the element to the body
	document.body.appendChild(elm);
	// return the width of the element
	var width = elm.offsetWidth;
	// remove the element from the dom
	document.body.removeChild(elm);
	// return the width
	return width;
}