/**
 * Detect if is chrome
 * @example 	js
 * import isChrome from 'coffeekraken-sugar/js/utils/is/chrome'
 * if (isChrome()) {
 *   // do something cool
 * }
 *
 * @return    {Boolean}    true if is chrome, false if not
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function isChrome() {
	return (navigator.userAgent.indexOf('Chrome') > -1)
}
