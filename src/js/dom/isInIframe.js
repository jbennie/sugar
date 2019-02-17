/**
 * Check if the page is loaded inside an iframe
 *
 * @return    {Boolean}    true if in iframe, false if not
 *
 * @example    js
 * import isInIframe from 'coffeekraken-sugar/js/dom/isInIframe'
 * if (isInIframe()) {
 *   // do something
 * }
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function isInIframe() {
	try {
		return window.self !== window.top;
	} catch (e) {
		return true;
	}
}
