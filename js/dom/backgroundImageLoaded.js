'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = backgroundImageLoaded;

var _getStyleProperty = require('./getStyleProperty');

var _getStyleProperty2 = _interopRequireDefault(_getStyleProperty);

var _imageLoaded = require('./imageLoaded');

var _imageLoaded2 = _interopRequireDefault(_imageLoaded);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Detect when a background image has been loaded on an HTMLElement
 * @param    {HTMLElement}    $elm    The HTMLElement on which to detect the background image load
 * @return    {Promise}    A promise that will be resolved when the background image has been loaded
 *
 * @example    js
 * import backgroundImageLoaded from 'coffeekraken-sugar/js/dom/backgroundImageLoaded'
 * backgroundImageLoaded($myElm).then(() => {
 *   // do something when loaded
 * })
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function backgroundImageLoaded($elm) {
	return new Promise(function (resolve, reject) {
		// get the background-image property from computed style
		var backgroundImage = (0, _getStyleProperty2.default)($elm, 'background-image');
		var matches = backgroundImage.match(/.*url\(['|"](.*)['|"]\):*/);
		if (!matches[1]) {
			reject('No background image url found...');
			return;
		}
		// make a new image with the image set
		var $img = new Image();
		$img.src = matches[1];
		// return the promise of image loaded
		resolve((0, _imageLoaded2.default)($img));
	});
}