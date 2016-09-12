import __camelize from '../string/camelize'
import __autoCast from '../string/autoCast'

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
