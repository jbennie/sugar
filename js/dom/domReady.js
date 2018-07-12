'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = domReady;

var _domready = require('domready');

var _domready2 = _interopRequireDefault(_domready);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function domReady() {
  var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  return new Promise(function (resolve, reject) {
    (0, _domready2.default)(function () {
      cb && cb();
      resolve();
    });
  });
} /**
   * Wait that the dom is ready before resolving the promise
   *
   * @name 		domReady
   * @param 		{Function} 		cb 			An optional callback that will be called when the dom is ready
   * @return 		{Promise} 					A promise that will be resolved when the dom is ready
   *
   * @example  	js
   * import domReady from 'sugarcss/js/dom/domReady'
   * // using callback
   * domReady(() => {
   * 		// do something
   * });
   * // using promise
   * domReady().then(() => {
   * 		// do something
   * });
   *
   * @author 		Olivier Bossel <olivier.bossel@gmail.com>
   */