'use strict';

var _querySelectorLive = require('../dom/querySelectorLive');

var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

var _scrollTo = require('../dom/scrollTo');

var _scrollTo2 = _interopRequireDefault(_scrollTo);

var _easeInOutQuint = require('../easings/easeInOutQuint');

var _easeInOutQuint2 = _interopRequireDefault(_easeInOutQuint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _querySelectorLive2.default)('[href^="scrollTo:#"]', function ($scrollElm) {
  $scrollElm.addEventListener('click', function (e) {
    e.preventDefault();
    var $target = document.querySelector('' + $scrollElm.getAttribute('href').substr(9));
    if (!$target) return;
    (0, _scrollTo2.default)($target, 600, _easeInOutQuint2.default);
  });
});