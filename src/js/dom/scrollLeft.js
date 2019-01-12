/**
 * Get the amount of scroll left
 *
 * @example    js
 * import scrollLeft from 'coffeekraken-sugar/js/dom/scrollLeft'
 * scrollLeft() // 40
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivier.bossel@gmail.com)
 */
export default function scrollLeft() {
	return window.pageXOffset || document.scrollLeft || document.body.scrollLeft;
}
