import addEventListenerOnce from './addEventListenerOnce'

/**
 * Remove some classes on animation end
 *
 * @param    {HTMLElement}    elm    The element to take care of
 * @param    {Array}    classes    The classes to remove
 * @return    {HTMLElement}    The element to mainain chainability
 *
 * @example    js
 * import removeClassesOnAnimationEnd from 'coffeekraken-sugar/js/dom/removeClassesOnAnimationEnd'
 * removeClassesOnAnimationEnd(myCoolElm, ['my-class'])
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function removeClassesOnAnimationEnd(elm, classes) {
	// listen for animation end on the element just once
	addEventListenerOnce(elm, 'animationend', (e) => {
		// remove the classes
		classes.forEach((cls) => {
			elm.classList.remove(cls)
		})
	})
	// return the element
	return elm
}
