import getStyleProperty from './getStyleProperty'

/**
 * Force the element to be painted again in case of visual issues
 * @param    {HTMLElement}    $elm    The HTMLElement to force the redraw on
 * @return    {HTMLElement}    The HTMLElement to maintain chainability
 *
 * @example    js
 * import forceRedraw from 'coffeekraken-sugar/js/dom/forceRedraw'
 * forceRedraw($elm)
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 * @see
 */
export default function forceRedraw($elm) {
	const display = getStyleProperty($elm, 'display')
	$elm.style.display = 'none'
	$elm.offsetHeight
	$elm.style.display = display
	return $elm
}
