import __camelize from '../utils/string/camelize'
import __autoCast from '../utils/string/autoCast'

/**
 * Transform a style string to an object representation
 *
 * @name 		styleString2Object
 * @param 		{String} 				style 			The style string
 * @return 		(Object) 								The string object representation
 *
 * @example 	js
 * import styleString2Object from 'sugarcss/js/dom/styleString2Object'
 * const styleString = styleString2Object('padding-left:20px; display:block;');
 * // output => {
 * //		paddingLeft : '20px',
 * // 		display : 'block'
 * // }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function styleString2Object(style) {
	if ( ! style || style === '') return {};
	let obj = {};
	const split = style.replace(/\s/g,'').split(';');
	split.forEach((statement) => {
		// split statement by key value pairs
		const spl = statement.split(':'),
			  key = __camelize(spl[0]),
			  value = spl[1];
		// add element into object
		obj[key] = __autoCast(value);
	});
	// return the style object
	return obj;
}
