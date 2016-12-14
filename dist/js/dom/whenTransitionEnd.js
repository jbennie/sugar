'use strict';

exports.__esModule = true;
exports.default = whenTransitionEnd;

var _getTransitionProperties = require('./getTransitionProperties');

var _getTransitionProperties2 = _interopRequireDefault(_getTransitionProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Monitor an HTMLElement to be notified when his transition has ended
 *
 * @name 		whenTransitionEnd
 * @param 		{HTMLElement} 				elm 		The element to monitor
 * @param 		{Function} 					[cb=null] 	An optional callback to call when the element transition has ended
 * @return 		(Promise) 								The promise that will be resolved when the element transition has ended
 *
 * @example 	js
 * import whenTransitionEnd from 'sugarcss/js/dom/whenTransitionEnd'
 * whenTransitionEnd(myCoolHTMLElement).then((elm) => {
 * 		// do something with your element transition has ended...
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function whenTransitionEnd(elm) {
  var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  return new Promise(function (resolve, reject) {
    var transition = (0, _getTransitionProperties2.default)(elm);
    setTimeout(function () {
      resolve();
      cb && cb();
    }, transition.totalDuration);
  });
}