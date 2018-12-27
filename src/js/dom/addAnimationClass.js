import removeClassesOnAnimationEnd from './removeClassesOnAnimationEnd'
/**
 * Add a class that trigger an animation and remove it at the end
 *
 * @param    {HTMLElement}    elm    The element to take care of
 * @param    {String}    class    The class to apply
 * @return    {HTMLElement}    The elm to maintain chainability
 *
 * @example    js
 * import addAnimationClass from 'coffeekraken-sugar/js/dom/addAnimationClass'
 * addAnimationClass(myElm, 'my-cool-class')
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function addAnimationClass(elm, cls) {
	// remove the class at the end of the animation
	removeClassesOnAnimationEnd(elm, [cls])
	// add the class to the element
	elm.classList.add(cls)
	// return the element
	return elm
}
