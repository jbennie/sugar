/**
 * @name 	imagesLoadedAttribute
 * Add on every images the attribute "loaded" when it has been fully loaded. This is useful
 * for styling purposes and for others thinks as well.
 * @exemple 	js
 * import 'coffeekraken-sugar/features/imagesLoadedAttribute'
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */

import __imageLoaded from '../dom/imageLoaded'
document.addEventListener('load', (e) => {
	if ( ! e.target.tagName) return;
	if (e.target.tagName.toLowerCase() !== 'img') return;
	if (e.target.hasAttribute('loaded')) return;
	e.target.setAttribute('loaded', true);
}, true);
[].forEach.call(document.querySelectorAll('img'), (img) => {
	__imageLoaded(img).then((img) => {
		if (img.hasAttribute('loaded')) return;
		img.setAttribute('loaded', true);
	});
});
