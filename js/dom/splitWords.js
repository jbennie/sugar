'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = splitWords;

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Split each words inside an HTMLElement by scoping them inside some tags.
 * Here's an result sample for :
 * Hello World
 *
 * ```html
 * <span class="split-words">Hello</span>
 * <span class="split-words">World</span>
 * ```
 *
 * @example 	js
 * import __splitWords from 'coffeekraken-sugar/js/dom/splitLines'
 * const myCoolElement = document.querySelector('.my-cool-element');
 * __splitWords(myCoolElement);
 *
 * @param 	{HTMLElement} 		elm 		 	The HTMLElement to split words in
 * @param 	{String} 			[tag="p"] 		The tag to use to split the words
 * @param 	{String} 			[tagClass="s-split-lines"] 		The class to apply on the tags
 * @return 	{HTMLElement} 						The HTMLElement processed
 * @author 	Olivier Bossel <olivier.bossel@gmail.com>
 */
function splitWords(elm) {
  var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';
  var tagClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'split-words';


  // first call
  _splitWords(elm, tag, tagClass);

  return elm;
}

function _splitWords(elm, tag, tagClass) {
  var string = elm._splitWordsOriginalString;
  if (!string) {
    string = elm.innerHTML;
    elm._splitWordsOriginalString = string;
  }

  elm.classList.add(tagClass);

  // wrap each characters inside two spans
  var words = string.match(/<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g);
  words = (0, _map3.default)(words, function (word) {
    return '<' + tag + ' class="' + tagClass + '__word">' + word + '</' + tag + '>';
  }).join(' ');
  elm.innerHTML = words;
}