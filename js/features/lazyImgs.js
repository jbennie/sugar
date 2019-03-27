'use strict';

var _whenInViewport = require('../js/dom/whenInViewport');

var _whenInViewport2 = _interopRequireDefault(_whenInViewport);

var _querySelectorLive = require('../js/dom/querySelectorLive');

var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _querySelectorLive2.default)('img[lazy-src]:not([src]):not([is="s-responsive-img"])', function ($imgElm) {
  (0, _whenInViewport2.default)($imgElm).then(function () {
    $imgElm.setAttribute('src', $imgElm.getAttribute('lazy-src'));
  });
});