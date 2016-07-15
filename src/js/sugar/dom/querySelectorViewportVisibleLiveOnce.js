/**
 * Grab all the visible element just once
 * And apply the callback when a new item match the selector
 */
import {Observable} from 'rxjs/Observable'
import querySelectorLive from './querySelectorLive'
import whenViewportVisible from './whenViewportVisible'

export default function querySelectorViewportVisibleLiveOnce(selector, settings) {
	return Observable.create(observer => {
		querySelectorLive(selector, {
			...settings,
			once : true
		}).subscribe((elm) => {
			whenViewportVisible(elm).then((elm) => {
				observer.next(elm);
			});
		});
	});
}
