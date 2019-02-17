/**
 * Check if the mouse is hover the passed HTMLElement
 * @param    {HTMLElement}    $elm    The HTMLElement to check
 *
 * @example    js
 * import isHover from 'coffeekraken-sugar/js/dom/isHover'
 * const $myElm = document.querySelector('.my-elm')
 * if (isHover($myElm)) {
 *   // do something
 * }
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function isHover($elm) {
	return $elm.parentElement.querySelector(":hover") === $elm;
}
