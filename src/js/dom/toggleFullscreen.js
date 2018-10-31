import requestFullscreen from './requestFullscreen'
import exitFullscreen from './exitFullscreen'

/**
 * Toggle the fullscreen mode
 * @param    {HTMLElement}    elm    The element on which to request the fullscreen
 * @return    {Promise}   Returns a Promise which is resolved once full-screen mode has been des/activated.
 *
 * @example   js
 * import toggleFullscreen from 'coffeekraken-sugar/js/dom/toggleFullscreen'
 * toggleFullscreen(myDomElm)
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function toggleFullscreen(elm) {
	const fullscreenElm = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement
	if ( ! fullscreenElm || fullscreenElm !== elm) {
		return requestFullscreen(elm)
	} else {
		return exitFullscreen()
	}
}
