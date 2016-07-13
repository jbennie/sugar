/**
 * Grab all the visible element just once
 * And apply the callback when a new item match the selector
 */
import querySelectorLive from './querySelectorLive'
import whenViewportVisible from './whenViewportVisible'

export default function querySelectorViewportVisibleLiveOnce(selector, cb, settings) {
	// extend settings
	settings = {...settings,...{ once : true }};
	// make the selection
	querySelectorLive(selector, (elm) => {
		// check if is array
		if (elm instanceof Array) {
			elm.forEach((e) => {
				whenViewportVisible(e).then((e) => {
					cb(e);
				});
			});
		} else {
			// check if is visible
			whenViewportVisible(elm).then((elm) => {
				cb(elm);
			});
		}
	}, settings);
}