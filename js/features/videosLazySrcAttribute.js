'use strict';

var _whenInViewport = require('../dom/whenInViewport');

var _whenInViewport2 = _interopRequireDefault(_whenInViewport);

var _querySelectorLive = require('../dom/querySelectorLive');

var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name    videoLazySrcAttribute
 * Add support for the `lazy-src` attribute on `video` elements.
 * The video `src` attribute will be populated when the `video` element enter the viewport
 * @example    html
 * <video lazy-src="my-cool-video.mp4"></video>
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
(0, _querySelectorLive2.default)('video[lazy-src]:not([src])', function ($videoElm) {
  (0, _whenInViewport2.default)($videoElm).then(function () {
    $videoElm.setAttribute('src', $videoElm.getAttribute('lazy-src'));
  });
});