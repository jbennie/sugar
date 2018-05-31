'use strict';

var _imageLoaded = require('../dom/imageLoaded');

var _imageLoaded2 = _interopRequireDefault(_imageLoaded);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('load', function (e) {
	if (!e.target.tagName) return;
	if (e.target.tagName.toLowerCase() !== 'img') return;
	if (e.target.hasAttribute('loaded')) return;
	e.target.setAttribute('loaded', true);
}, true); /**
           * @name 	imagesLoadedAttribute
           * Add on every images the attribute "loaded" when it has been fully loaded. This is useful
           * for styling purposes and for others thinks as well.
           * @exemple 	js
           * import 'coffeekraken-sugar/features/imagesLoadedAttribute'
           * @author 		Olivier Bossel <olivier.bossel@gmail.com>
           */

[].forEach.call(document.querySelectorAll('img'), function (img) {
	(0, _imageLoaded2.default)(img).then(function (img) {
		if (img.hasAttribute('loaded')) return;
		img.setAttribute('loaded', true);
	});
});