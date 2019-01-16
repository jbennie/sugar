'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imagesLoaded;

var _imageLoaded = require('./imageLoaded');

var _imageLoaded2 = _interopRequireDefault(_imageLoaded);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Detect when some images are loaded
 * @param    {Array<HTMLImageElement>}    $imgs    An array (or nodeList) of HTMLImageElement to detect the load
 * @return    {Promise}    A promise resolved when all images are loaded properly
 *
 * @example    js
 * import imagesLoaded from 'coffeekraken-sugar/js/dom/imagesLoaded'
 * imagesLoaded([
 * 	$img1, $img2, $img3
 * ]).then(() => {
 *   // do something here
 * })
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function imagesLoaded($imgs) {
  return new Promise(function (resolve, reject) {
    var promises = [];
    Array.from($imgs).forEach(function ($img) {
      promises.push((0, _imageLoaded2.default)($img));
    });
    resolve(Promise.all(promises));
  });
}