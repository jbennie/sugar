'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = domReady;

var _stylesheetsReady = require('../dom/stylesheetsReady');

var _stylesheetsReady2 = _interopRequireDefault(_stylesheetsReady);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var neededStylesheetsStack = null; /**
                                    * Wait that the dom is ready before resolving the promise
                                    * If you need that some css files are loaded before considering the dom as loaded
                                    * you can add the attribute 's-domready-dependency' on any css link tag
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


function _domReady() {
	var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

	return new Promise(function (resolve, reject) {

		var _domReady = function _domReady() {
			if (!document.body || /(un|ing)/.test(document.readyState)) {
				setTimeout(function () {
					_domReady();
				}, 9);
			} else {

				// grab all the needed stylesheets if not already done
				if (!neededStylesheetsStack) {
					// check in dom if has some needed stylesheets
					neededStylesheetsStack = document.querySelectorAll('link[s-domready-dependency]');
				}

				if (!neededStylesheetsStack.length) {
					if (cb) cb();
					resolve();
				} else {

					(0, _stylesheetsReady2.default)(neededStylesheetsStack, function () {
						// console.log('stylesheets loaded');
						if (cb) cb();
						resolve();
					});
				}
			}
		};
		_domReady();
	});
}

var domReadyCallbacks = [];
var domReadyProcess = false;
var domIsReady = false;

function domReady() {
	var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


	return new Promise(function (resolve, reject) {

		// check if the dom is already ready
		if (domIsReady) {
			if (cb) cb();
			resolve();
			return;
		}

		// add the callback to the stack
		domReadyCallbacks.push(function () {
			if (cb) cb();
			resolve();
		});

		// check if already a domReady detecting process
		if (!domReadyProcess) {
			domReadyProcess = true;
			_domReady(function () {
				// update the domIsReady
				domIsReady = true;
				// apply all the callbacks
				domReadyCallbacks.forEach(function (callback) {
					callback();
				});
			});
		}
	});
}