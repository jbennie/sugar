/**
 * Wrap an HTMLElement inside another `$wrapper` one
 * @param    {HTMLElement}    $toWrap    The element to wrap
 * @param    {HTMLElement}    $wrapper    The wrapper element
 *
 * @example    js
 * import wrap from 'coffeekraken-sugar/js/dom/wrap'
 * const $wrapper = document.createElement('div')
 * // assuming:
 * // <div>
 * //   <span class="wrap">Hello World</span>
 * // </div>
 * wrap(document.querySelector('.wrap'), $wrapper)
 * // output:
 * // <div>
 * //   <div>
 * //     <span class="wrap">Hello World</span>
 * //   </div>
 * // </div>
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function wrap($elm, $wrapper) {
	if (typeof $wrapper === "string") {
		$wrapper = document.createElement($wrapper);
	}
	const $parent = $elm.parentNode
	const $sibling = $elm.nextSibling
	if ($sibling) {
		$parent.insertBefore($wrapper, $sibling)
	} else {
		$parent.appendChild($wrapper)
	}
	return $wrapper.appendChild($elm);
}
