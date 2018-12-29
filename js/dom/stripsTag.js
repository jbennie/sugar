/**
 * Strip the tags of the passed text
 * @param    {String}    html    the html to process
 * @return    {String}    The html without any tags
 *
 * @example    js
 * import stripsTag from 'coffeekraken-sugar/js/dom/stripsTag'
 * stripsTag('<h1>Hello World</h1>') // => Hello World
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function stripsTag(html) {
	const tmp = document.createElement('div')
	tmp.innerHTML = html
	return tmp.textContent || tmp.innerText || ''
}
