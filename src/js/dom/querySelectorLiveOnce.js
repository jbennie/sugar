/**
 * Get the element once
 */
import querySelectorLive from './querySelectorLive'
import {Observable} from 'rxjs'

export default function querySelectorLiveOnce(selector, settings = {}) {
	return Observable.create(observer => {
		querySelectorLive(selector, {
			...settings,
			once : true
		}).subscribe((elm) => {
			console.log('new elm', elm);
			observer.next(elm);
		});
	});
}
