/**
 * Grab all the visible element
 * And apply the callback when a new item match the selector
 */
import {Observable} from 'rxjs/Observable'
import querySelectorLive from './querySelectorLive'
import whenVisible from './whenVisible'

export default function querySelectorViewportVisibleLive(selector, settings) {
	return Observable.create(observer => {
		querySelectorLive(selector, settings).subscribe((elm) => {
			whenVisible(elm).then((elm) => {
				observer.next(elm);
			});
		});
	});
}
