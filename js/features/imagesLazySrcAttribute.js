'use strict';

var _whenInViewport = require('../dom/whenInViewport');

var _whenInViewport2 = _interopRequireDefault(_whenInViewport);

var _querySelectorLive = require('../dom/querySelectorLive');

var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name    imagesLazySrcAttribute
 * Add support for the `lazy-src` attribute on `img` elements.
 * The video `src` attribute will be populated when the `img` element enter the viewport
 * @example    html
 * <img lazy-src="my-cool-image.jpg" />
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
(0, _querySelectorLive2.default)('img[lazy-src]:not([is])', function ($imgElm) {
  (0, _whenInViewport2.default)($imgElm).then(function () {
    $imgElm.setAttribute('src', $imgElm.getAttribute('lazy-src'));
  });
});