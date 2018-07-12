'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollToLocationHash;

var _scrollTo = require('./scrollTo');

var _scrollTo2 = _interopRequireDefault(_scrollTo);

var _easeInOutQuint = require('../easings/easeInOutQuint');

var _easeInOutQuint2 = _interopRequireDefault(_easeInOutQuint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Scroll to the location hash if an hash is present.
 * This function will try to get the target element from the hash and scroll to it
 *
 * @example 	js
 * import __scrollToLocationHash from 'coffeekraken-sugar/js/dom/scrollToLocationHash'
 * __scrollToLocationHash(500, 0)
 *
 * @param    {Integer}    [duration=500]    The scroll duration
 * @param    {Integer}    [offset=0]    A pixel value to offset the scroll with
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com) (https://olivierbossel.com)
 */
function scrollToLocationHash() {
  var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;


  // check if we have an hash in the url
  var hash = document.location.hash;

  // if not, do nothing
  if (!hash) return;

  // try to get the hash target in the page
  var targetElm = document.querySelector(hash);

  // if no target found, do nothing
  if (!targetElm) return;

  // scroll to target
  (0, _scrollTo2.default)(targetElm, duration, _easeInOutQuint2.default, offset, 'top');
}