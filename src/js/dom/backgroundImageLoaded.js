import getStyleProperty from './getStyleProperty'
import imageLoaded from './imageLoaded'
import unquote from '../utils/strings/unquote'

/**
 * Detect when a background image has been loaded on an HTMLElement
 * @param    {HTMLElement}    $elm    The HTMLElement on which to detect the background image load
 * @return    {Promise}    A promise that will be resolved when the background image has been loaded
 *
 * @example    js
 * import backgroundImageLoaded from 'coffeekraken-sugar/js/dom/backgroundImageLoaded'
 * backgroundImageLoaded($myElm).then(() => {
 *   // do something when loaded
 * })
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function backgroundImageLoaded($elm) {
	return new Promise((resolve, reject) => {
		// get the background-image property from computed style
		const backgroundImage = getStyleProperty($elm, 'background-image')
		const matches = backgroundImage.match(/.*url\((.*)\).*/)
		if (!matches || !matches[1]) {
			reject('No background image url found...')
			return
		}
		// process url
		const url = unquote(matches[1])
		// make a new image with the image set
		const $img = new Image()
		$img.src = url
		// return the promise of image loaded
		resolve(imageLoaded($img))
	})
}
