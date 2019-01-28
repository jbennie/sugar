/**
 * Detect if is the UC stock browser that is running the page
 * @example    js
 * import isUcBrowser from 'coffeekraken-sugar/js/utils/is/ucBrowser'
 * if (isUcBrowser()) {
 *   // do something
 * }
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function isUcBrowser() {
	return window.navigator.userAgent.match(/UCBrowser/i) !== null
}
