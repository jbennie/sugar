import __uniqid from '../tools/uniqid'
import __uncamelize from '../string/uncamelize'

if ( ! window.sugar) window.sugar = {};
window.sugar._styles = new Map();

function convertStyleObjToString(styleObj) {
	// process the style object
	let propertiesArray = [];
	for (let key in styleObj) {
		const value = styleObj[key];
		// if the value is ''
		// mean that we need to get rid of
		if ( ! value || value === '') {
			delete styleObj[key];
		} else {
			propertiesArray.push(`${__uncamelize(key)}:${value};`);
		}
	}

	// return the css text
	return propertiesArray.join(' ');
}

export default function style(elm, styleObj) {

	let current = window.sugar._styles.get(elm) || {
		styleObj : styleObj,
		elm : elm
	};

	// mix the style oject
	current.styleObj = {
		...current.styleObj,
		...styleObj
	};

	// apply the style to the element
	elm.setAttribute('style', convertStyleObjToString(current.styleObj));

	// save the styleObj into map
	window.sugar._styles.set(elm, current);

	// return the style
	return elm.style;
}

/**
export default function style(elm, styleObj) {

	// init selector
	let selector = elm;
	let sStyleId = null;

	// check if the elm is a selector or an html element
	if (typeof(elm) !== 'string'
		&& elm.nodeName) {
		// generate the best selector for the element
		if (elm.id) {
			selector = `#${elm.id}`;
		} else if (elm.getAttribute('s-element')) {
			selector = `[s-element="${elm.getAttribute('s-element')}"]`;
		} else {
			sStyleId = elm.getAttribute('s-style') || __uniqid();
			elm.setAttribute('s-style', sStyleId);
			selector = `[s-style="${sStyleId}"]`;

			// listen for element updated by sTemplate
			// to apply again the style
			elm.addEventListener('sTemplate:updated', (e) => {
				// if ( ! elm.hasAttribute('s-style')) {
				// 	elm.setAttribute('s-style', sStyleId);
				// }
				elm.setAttribute('style', convertStyleObjToString())
			});
		}
	}

	// check if already a style defined
	if (window.sugar._styles[selector]) {
		// we have already a style
		// so mix the new one with the old one
		styleObj = {
			...window.sugar._styles[selector].styleObj,
			...styleObj
		};
		// save the new styleObj
		window.sugar._styles[selector].styleObj = styleObj;
	} else {
		const styleElm = document.createElement('style');
		styleElm.type = 'text/css';
		const head = document.head || document.getElementsByTagName('head')[0];
		head.appendChild(styleElm);
		// we don't have any style for this element
		// so we create the stack item
		window.sugar._styles[selector] = {
			styleObj : styleObj,
			element : elm,
			styleElm : styleElm
		};
	}



	// create and add the style to the head
	const style = window.sugar._styles[selector].styleElm;
	if (style.styleSheet) {
		style.styleSheet.cssText = styleString;
	} else {
		style.innerHTML = '';
		style.appendChild(document.createTextNode(styleString));
	}
}
*/
