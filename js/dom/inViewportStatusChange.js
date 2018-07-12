'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inViewportStatusChange;

var _InViewportStatusChangeDetector = require('./InViewportStatusChangeDetector');

var _InViewportStatusChangeDetector2 = _interopRequireDefault(_InViewportStatusChangeDetector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Monitor when the passed element enter or exit the viewport
 *
 * @name 		inViewportStatusChange
 * @param 		{HTMLElement} 						elm  		The element to monitor
 * @param 		{Function} 							onEnter 	Callback when the element enter the viewport
 * @param 		{Function} 							onExit 		Callback when the element exit the viewport
 * @return 		{InViewportStatusChangeDetector} 				The in viewport status change detector instance
 *
 * @example  	js
 * import inViewportStatusChange from 'sugarcss/js/dom/inViewportStatusChange'
 * const detector = inViewportStatusChange(myCoolHTMLElement, () => {
 * 		// i'm now in the viewport
 * }, () => {
 * 		// i'm now out of the viewport
 * });
 *
 * // stop listening
 * detector.destroy();
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function inViewportStatusChange(elm) {
  var onEnter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var onExit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var detector = new _InViewportStatusChangeDetector2.default(elm);
  if (onEnter) {
    detector.on('enter', onEnter);
  }
  if (onExit) {
    detector.on('exit', onExit);
  }
  // return the detector
  return detector;
}