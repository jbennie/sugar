import _get from 'lodash/get'
import SWatcher from '../../classes/SWatcher'

export default function whenProperty(object, property, checkFn = null) {
	return new Promise((resolve, reject) => {

		const value = _get(object, property);
		if (value) {
			if (checkFn && checkFn(value, value)) {
				resolve(value);
				return;
			} else if (! checkFn) {
				resolve(value);
				return;
			}
		}

		const watcher = new SWatcher();
		let ok = false;
		watcher.watch(object, property, (newVal, oldVal) => {
			if (ok) return;
			if (checkFn && checkFn(newVal, oldVal)) {
				ok = true;
				resolve(newVal);
				watcher.destroy();
			} else if ( ! checkFn) {
				ok = true;
				resolve(value);
				watcher.destroy();
			}
		});
	});
}
