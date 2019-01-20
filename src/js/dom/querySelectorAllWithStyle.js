import getStyleProperty from './getStyleProperty'

/**
 * Select all node that match the style object passed as parameter
 * @param    {String}    selector    The css selector to use as base filter
 * @param    {Object}    style    The style that has to match
 * @param    {Object}    [settings={}]    A setting object
 * @return    [Array<HTMLElement>]    An array of HTMLElement that matches the style object
 *
 * @example    js
 * import querySelectorAllWithStyle from 'coffeekraken-sugar/js/dom/querySelectorAllWithStyle'
 * querySelectorAllWithStyle('*', {
 * 	backgroundImage: true
 * })
 *
 * // style object can contains either:
 * const style = {
 * 	 backgroundImage: true, // has to have the background-image style
 *   backgroundPosition: false, // has to not have the background-position style
 *   backgroundSize: /cover|contain/, // has to have the background-size set to cover or contain
 *   background: 'none' // has to have to background set to "none"
 * }
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function querySelectorAllWithStyle(selector, style, settings={}) {
	// extend settings
	settings = {
		rootNode : document.body,
		...settings
	};
	// select all the element from the selector
	const $elms = settings.rootNode.querySelectorAll(selector)
	// check that we have some nodes to process
	if (!$elms.length) return []
	// init the ar$Elms stack that will be returned at the end
	const ar$Elms = []
	// loop on each elements
	Array.from($elms).forEach(($elm) => {
		// track if the $elm match all the properties
		let match = true
		// loop on each properties of the style object
		// to check it against the dom computed style
		for (let key in style) {
			// get the value from the computed dom node
			const value = getStyleProperty($elm, key)
			// true as selector
			if (style[key] === true && !value) {
				match = false
				break
			} else if (style[key] === false && value) {
				match = false
				break
			} else if (style[key] instanceof RegExp && !value.toString().match(style[key])) {
				match = false
				break
			} else if (typeof style[key] === 'string' && style[key] !== value) {
				match = false
				break
			}
		}
		// add the dom node in stack if it match all the
		// style object
		if (match) {
			ar$Elms.push($elm)
		}
	})
	// return the elements found
	return ar$Elms
}

/**
 * @name 	settings.rootNode
 * The root node used to select the the elements within
 * @setting
 * @type 		{HTMLElement}
 * @default 	document
 */
