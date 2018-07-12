import camelize from '../utils/string/camelize';
import autoCast from '../utils/string/autoCast';

/**
 * Get a style property on the passed element through the computed style.
 * This function try to store the actual style to not trigger more that 1 redraw
 * each js execution loop.
 *
 * @name 		getStyleProperty
 * @param 		{HTMLElement} 					elm  		The element to get style from
 * @param 		{String} 						property 	The css property to get
 * @return 		{Mixed} 									The style value
 *
 * @example  	js
 * import getStyleProperty from 'sugarcss/js/dom/getStyleProperty'
 * const opacity = getStyleProperty(myCoolHTMLElement, 'opacity');
 *
 * @see 		https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function getStyleProperty(elm, property) {

	// caching mecanisme
	setTimeout(() => {
		elm._sComputedStyle = null;
	});

	const computed = elm._sComputedStyle || window.getComputedStyle(elm);
	elm._sComputedStyle = computed;

	const prefixes = ['','webkit-','moz-','ms-','o-','khtml-'];
	for (let i=0; i<prefixes.length; i++) {
		const prefix = prefixes[i];
		const value = computed[camelize(`${prefix}${property}`)];
		if (value && value.trim() !== '') return autoCast(value);
	}
	return null;
}
