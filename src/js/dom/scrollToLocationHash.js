import __scrollTo from './scrollTo'
import __easeing from '../easings/easeInOutQuint'

/**
 * Scroll to the location hash if an hash is present.
 * This function will try to get the target element from the hash and scroll to it
 *
 * @example 	js
 * import __scrollToLocationHash from 'coffeekraken-sugar/js/dom/scrollToLocationHash'
 * __scrollToLocationHash(500, 0)
 *
 * @param    {Integer}    [duration=500]    The scroll duration
 * @param    {Integer}    [offset=0]    A pixel value to offset the scroll with
 * @param    {Function}    [easing=__easeing]    An easing function to use to scroll
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com) (https://olivierbossel.com)
 */
export default function scrollToLocationHash(duration = 500, offset = 0, easing = __easeing) {

	// check if we have an hash in the url
	const hash = document.location.hash

	// if not, do nothing
	if ( ! hash) return

	// try to get the hash target in the page
	const targetElm = document.querySelector(hash);

	// if no target found, do nothing
	if ( ! targetElm) return

	// scroll to target
	__scrollTo(targetElm , duration, easing, offset, 'top');

}
