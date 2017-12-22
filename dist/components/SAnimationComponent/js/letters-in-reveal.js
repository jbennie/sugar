'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = animLettersInReveal;

var _splitLetters = require('coffeekraken-sugar/js/dom/splitLetters');

var _splitLetters2 = _interopRequireDefault(_splitLetters);

var _whenInViewport = require('coffeekraken-sugar/js/dom/whenInViewport');

var _whenInViewport2 = _interopRequireDefault(_whenInViewport);

var _querySelectorLive = require('coffeekraken-sugar/js/dom/querySelectorLive');

var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Init the listener for the "letters-in-reveal" animation to work
 *
 * @example
 * @import 	animLettersInReveal from 'coffeekraken-sugar/components/SAnimationComponent/js/letters-in-reveal'
 * animLettersInReveal(); // init listeners
 *
 * @author 	Olivier Bossel <olivier.bossel@gmail.com>
 */
function animLettersInReveal() {
  (0, _querySelectorLive2.default)('[anim="letters-in-reveal"]', function (elm) {
    (0, _splitLetters2.default)(elm);
    (0, _whenInViewport2.default)(elm).then(function (elm) {
      setTimeout(function () {
        elm.classList.add('anim-play');
      }, 150);
    });
  });
}