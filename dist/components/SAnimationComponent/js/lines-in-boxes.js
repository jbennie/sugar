'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = animLinesInBoxes;

var _splitLines = require('coffeekraken-sugar/js/dom/splitLines');

var _splitLines2 = _interopRequireDefault(_splitLines);

var _whenInViewport = require('coffeekraken-sugar/js/dom/whenInViewport');

var _whenInViewport2 = _interopRequireDefault(_whenInViewport);

var _querySelectorLive = require('coffeekraken-sugar/js/dom/querySelectorLive');

var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Init the listener for the "lines-in-boxes" animation to work
 *
 * @example
 * @import 	animLinesInBoxes from 'coffeekraken-sugar/components/SAnimationComponent/js/lines-in-boxes'
 * animLinesInBoxes(); // init listeners
 *
 * @author 	Olivier Bossel <olivier.bossel@gmail.com>
 */
function animLinesInBoxes() {
  (0, _querySelectorLive2.default)('[anim="lines-in-boxes]', function (elm) {
    (0, _splitLines2.default)(elm);
    (0, _whenInViewport2.default)(elm).then(function (elm) {
      setTimeout(function () {
        elm.classList.add('anim-play');
      }, 150);
    });
  });
}