/**
 * Get the element once
 */
import querySelectorLive from './querySelectorLive'
import {Observable} from 'rxjs/Observable'

export default function querySelectorLiveOnce(selector, settings = {}) {
	return new Observable(observer => {
		querySelectorLive(selector, {
			...settings,
			once : true
		}).subscribe((elm) => {
			console.log('new elm', elm);
			observer.next(elm);
		});
	});
}
