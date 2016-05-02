/**
 * Grab all the visible element just once
 * And apply the callback when a new item match the selector
 */
import querySelectorLive from './querySelectorLive'
import whenVisible from './whenVisible'

export default function querySelectorVisibleLiveOnce(selector, cb, settings) {
	// extend settings
	settings = {...settings,...{ once : true }};
	// make the selection
	querySelectorLive(selector, (elm) => {
		// check if is array
		if (elm instanceof Array) {
			elm.forEach((e) => {
				whenVisible(e).then((e) => {
					cb(e);
				});
			});
		} else {
			// check if is visible
			whenVisible(elm).then((elm) => {
				cb(elm);
			});
		}
	}, settings);
}