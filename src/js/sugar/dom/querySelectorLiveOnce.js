/**
 * Get the element once
 */
import querySelectorLive from './querySelectorLive'

export default function querySelectorLiveOnce(selector, cb, settings = {}) {
	// extend settings
	settings = {
		...settings,
		...{
			once : true
		}
	};
	querySelectorLive(selector, cb, settings);
}