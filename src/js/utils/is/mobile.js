import MobileDetect from 'mobile-detect'
/**
 * Detect if is a mobile device (phone or tablet)
 * @return    {Boolean}    true if is a mobile, false if not
 * @example 	js
 * import isMobile from 'coffeekraken-sugar/js/utils/is/mobile'
 * if (isMobile()) {
 *   // do something cool...
 * }
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function isMobile() {
	const md = new MobileDetect(window.navigator.userAgent)
	return md.mobile() !== null
}
