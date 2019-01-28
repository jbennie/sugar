import MobileDetect from 'mobile-detect'

/**
 * Detect if is the samsung stock browser that is running the page
 * @example    js
 * import isSamsumgBrowser from 'coffeekraken-sugar/js/utils/is/samsungBrowser'
 * if (isSamsumgBrowser()) {
 *   // do something
 * }
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function isSamsumgBrowser() {
	return window.navigator.userAgent.match(/SamsungBrowser/i) !== null
}
