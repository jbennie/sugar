import scriptLoaded from './scriptLoaded'

/**
 * Append a script tag either to the head or the body
 * @param    {String}    src    The script src to load
 * @return    {Promise}    A promise resolved with the script tag when it has fully loaded
 *
 * @example    js
 * import appendScriptTag from 'coffeekraken-sugar/js/dom/appendScriptTag'
 * appendScriptTag('dist/js/app.js')
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function appendScriptTag(src, $parent = document.body) {
	const $script = document.createElement('script')
	$script.src = src
	$parent.appendChild($script)
	return scriptLoaded($script)
}
