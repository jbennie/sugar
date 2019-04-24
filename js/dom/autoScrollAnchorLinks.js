'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = autoScrollAnchorLinks;

var _easeInOutQuint = require('../easings/easeInOutQuint');

var _easeInOutQuint2 = _interopRequireDefault(_easeInOutQuint);

var _querySelectorLive = require('./querySelectorLive');

var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

var _urlParse = require('url-parse');

var _urlParse2 = _interopRequireDefault(_urlParse);

var _scrollTo = require('./scrollTo');

var _scrollTo2 = _interopRequireDefault(_scrollTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Listen for links contains an hash to init them for scroll to target on click
 * @param    {Integer}    [duration=500]    The scroll duration in ms
 * @param    {Integer}    [offset=0]    A scroll offset to apply
 * @param    {Function}    [easing=__easing]    An easing function used to scroll
 * @param    {Boolean}    [checkPathnames=true]    Specify if need to check the pathnames correspondance or not
 * 
 * @example    js
 * import autoScrollAnchorLinks from 'coffeekraken-sugar/js/autoScrollAnchorLinks'
 * autoScrollAnchorLinks()
 * 
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function autoScrollAnchorLinks() {
  var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _easeInOutQuint2.default;
  var checkPathnames = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;


  (0, _querySelectorLive2.default)('a:not([is])[href*="#"]', function ($link) {

    // listen for click
    $link.addEventListener('click', function (e) {

      // get the hash
      var linkUrl = (0, _urlParse2.default)($link.getAttribute('href'));
      var currentUrl = (0, _urlParse2.default)();

      // chack that we have an hash
      if (!linkUrl.hash || linkUrl.hash === '#') return;

      // if it's not the same pathname between the current url and the link one,
      // we do nothing and we let the link behave as he want
      if (checkPathnames && currentUrl.pathname !== linkUrl.pathname) return;

      // try to get the target from the hash
      var $target = document.querySelector(linkUrl.hash);

      // if we don't have any target, let the link behave as he wants
      if (!$target) return;

      // preventing the link to behave as he wants
      e.preventDefault();

      // append the hash to the history in the url
      history.pushState({}, null, linkUrl.hash);

      // all seems to be good, we can scroll to the target
      (0, _scrollTo2.default)($target, duration, easing || _easeInOutQuint2.default, offset, 'top');
    });
  });
}