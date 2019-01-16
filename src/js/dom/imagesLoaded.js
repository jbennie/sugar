import imageLoaded from './imageLoaded'

/**
 * Detect when some images are loaded
 * @param    {Array<HTMLImageElement>}    $imgs    An array (or nodeList) of HTMLImageElement to detect the load
 * @return    {Promise}    A promise resolved when all images are loaded properly
 *
 * @example    js
 * import imagesLoaded from 'coffeekraken-sugar/js/dom/imagesLoaded'
 * imagesLoaded([
 * 	$img1, $img2, $img3
 * ]).then(() => {
 *   // do something here
 * })
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function imagesLoaded($imgs) {
	return new Promise((resolve, reject) => {
		const promises = []
		Array.from($imgs).forEach(($img) => {
			promises.push(imageLoaded($img))
		})
		resolve(Promise.all(promises))
	})
}
