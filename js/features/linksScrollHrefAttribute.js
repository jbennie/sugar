'use strict';

var _querySelectorLive = require('../dom/querySelectorLive');

var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

var _scrollTo = require('../dom/scrollTo');

var _scrollTo2 = _interopRequireDefault(_scrollTo);

var _easeInOutQuint = require('../easings/easeInOutQuint');

var _easeInOutQuint2 = _interopRequireDefault(_easeInOutQuint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name 	scrollLinks
 * Add the ability to set links href attribute with "scroll:#target" in order to animate the scroll to this target element
 * 
 * @example 	html
 * <a href="scroll:#my-cool-element-id">Scroll to</a>
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
(0, _querySelectorLive2.default)('[href^="scroll:#"]', function ($scrollElm) {
  $scrollElm.addEventListener('click', function (e) {
    e.preventDefault();
    var $target = document.querySelector('' + $scrollElm.getAttribute('href').substr(7));
    if (!$target) return;
    (0, _scrollTo2.default)($target, 400, _easeInOutQuint2.default);
  });
});