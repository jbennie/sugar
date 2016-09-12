import __uncamelize from '../string/uncamelize'
import __styleString2Object from './styleString2Object'
import __styleObject2String from './styleObject2String'

if ( ! window.sugar) window.sugar = {};
window.sugar._styles = new Map();

export default function style(elm, styleObj) {

	// get the current style of the element
	let current = window.sugar._styles.get(elm);

	// if first time handling style
	if ( ! current) {
		// convert style string to object
		const styleAttr = elm.getAttribute('style');

		if (styleAttr) {
			styleObj = {
				...__styleString2Object(styleAttr),
				...styleObj
			};
		}

		current = {
			styleObj : styleObj,
			elm : elm
		};
	}

	// mix the style oject
	current.styleObj = {
		...current.styleObj,
		...styleObj
	};

	// apply the style to the element
	// elm.setAttribute('style', __styleObject2String(current.styleObj));
	elm.style.cssText = __styleObject2String(current.styleObj);

	// save the styleObj into map
	window.sugar._styles.set(elm, current);

	// return the style
	return elm.style;
}
