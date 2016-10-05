import __uncamelize from '../utils/string/uncamelize'

/**
 * Transform a style object to inline string separated by ;
 *
 * @name 		styleObject2String
 * @param 		{Object} 				styleObj 		An object of style to apply
 * @return 		(String) 								The string style representation
 *
 * @example 	js
 * import styleObject2String from 'sugarcss/js/dom/styleObject2String'
 * const styleString = styleObject2String({
 * 		paddingLeft : '20px',
 * 		display : 'block'
 * });
 * // output => padding-left:20px; display:block;
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
export default function styleObject2String(styleObj) {
	// process the style object
	let propertiesArray = [];
	for (let key in styleObj) {
		const value = styleObj[key];
		// if the value is ''
		// mean that we need to get rid of
		if ( value === undefined || value === '') {
			delete styleObj[key];
		} else {
			propertiesArray.push(`${__uncamelize(key)}:${value};`);
		}
	}
	// return the css text
	return propertiesArray.join(' ');
}
