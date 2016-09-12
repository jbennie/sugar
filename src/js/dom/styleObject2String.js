import __uncamelize from '../string/uncamelize'

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
