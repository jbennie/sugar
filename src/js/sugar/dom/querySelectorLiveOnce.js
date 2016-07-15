/**
 * Get the element once
 */
import querySelectorLive from './querySelectorLive'

export default function querySelectorLiveOnce(selector, settings = {}) {
	return querySelectorLive(selector, {
		...settings,
		once : true
	});
}
