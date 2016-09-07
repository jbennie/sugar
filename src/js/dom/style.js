import __uniqid from '../tools/uniqid'
import __uncamelize from '../string/uncamelize'

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
				if ( ! elm.hasAttribute('s-style')) {
					elm.setAttribute('s-style', sStyleId);
				}
			});
		}
	}

	// process the style object
	let propertiesArray = [];
	for (let key in styleObj) {
		const value = styleObj[key];
		propertiesArray.push(`${__uncamelize(key)}:${value};`);
	}

	// create the style string
	const styleString = `${selector} { ${propertiesArray.join('')} }`;

	// create and add the style to the head
	const head = document.head || document.getElementsByTagName('head')[0];
	const style = document.createElement('style');
	style.type = 'text/css';
	if (style.styleSheet) {
		style.styleSheet.cssText = styleString;
	} else {
		style.appendChild(document.createTextNode(styleString));
	}
	head.appendChild(style);
}
