'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = animSlideIn;

var _whenInViewport = require('coffeekraken-sugar/js/dom/whenInViewport');

var _whenInViewport2 = _interopRequireDefault(_whenInViewport);

var _querySelectorLive = require('coffeekraken-sugar/js/dom/querySelectorLive');

var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Init the listener for the "slide-in-" animation to work
 * Supported slides animation directions
 * - up
 * - right
 * - left
 * - down
 *
 * @example
 * @import 	animSlideIn from 'coffeekraken-sugar/components/SAnimationComponent/js/slide-in'
 * animSlideIn(); // init listeners
 *
 * @author 	Olivier Bossel <olivier.bossel@gmail.com>
 */
function animSlideIn() {
  (0, _querySelectorLive2.default)('[anim^="slide-in-"]', function (elm) {
    (0, _whenInViewport2.default)(elm).then(function (elm) {
      setTimeout(function () {
        elm.classList.add('anim-play');
      }, 150);
    });
  });
}