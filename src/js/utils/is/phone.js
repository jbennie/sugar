import MobileDetect from 'mobile-detect'
/**
 * Detect if is a phone device
 * @return    {Boolean}    true if is a phone, false if not
 * @example 	js
 * import isPhone from 'coffeekraken-sugar/js/utils/is/phone'
 * if (isPhone()) {
 *   // do something cool...
 * }
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function isPhone() {
	const md = new MobileDetect(window.navigator.userAgent)
	return md.phone() !== null
}
