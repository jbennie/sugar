import uncamelize from '../utils/strings/uncamelize'

// @TODO : delete this method and find a way to replace it by a polyfill
export default function dataset(elm, key, value = null) {
	if ( ! elm.getAttribute) return;
	if ( ! value) {
		return elm.dataset[key] || getAttribute('data-'+uncamelize(key));
	} else {
		// try to set the value
		let dataset = elm.dataset;
		if (dataset) {
			if (elm.dataset[key]) {
				elm.dataset[key] = value;
			} else {
				// set the data through setAttribute
				elm.setAttribute('data-'+uncamelize(key), value);
			}
		} else {
			// set the data through setAttribute
			// cause no support for dataset
			elm.setAttribute('data-'+uncamelize(key), value);
		}
		// return the element
		return elm;
	}
}
