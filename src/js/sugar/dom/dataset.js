/**
 * Access dataset
 */
import uncamelize from '../string/uncamelize'

export default function dataset(elm, key, value = null) {
	if ( ! elm.getAttribute) return;
	if ( ! value) {
		// try to get
		let v = elm.dataset[key];
		// let v = _get(elm, 'dataset.'+key);
		if (v) return v;
		v = elm.getAttribute('data-'+uncamelize(key));
		return v;
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

	}
}