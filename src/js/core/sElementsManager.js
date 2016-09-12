// init a stack into the window
if ( ! window.sugar) window.sugar = {};
window.sugar._elements = new Map();
window.sugar._elementsById = {};

class SElementsManager {

	/**
	 * _getElementStack
	 * Return the element stack object used internaly to keep track of components, etc...
	 * @param 	{HTMLElement} 	elm 	The element to process
	 * @return 	{Object} 				The internal stack of the element
	 */
	_getElementStack(elm) {
		let inStackElement = null;
		if (typeof(elm) === 'string') {
			inStackElement = window.sugar._elementsById[elm];
		} else {
			inStackElement = window.sugar._elements.get(elm);
		}
		if ( ! inStackElement && elm.hasAttribute('s-element')) {
			inStackElement = {
				elements : {},
				components : {},
				originalElement : null
			};
			window.sugar._elements.set(elm, inStackElement);
			window.sugar._elementsById[elm.getAttribute('s-element')] = inStackElement;
		}
		return inStackElement;
	}

	/**
	 * registerComponent
	 * Register a component on a given element
	 * @param 	{HTMLElement} 	elm 		The element in which to register a component
	 * @param 	{SComponent} 	component 	The component to register
	 * @return 	{void}
	 */
	registerComponent(elm, component) {
		const inStackElement = this._getElementStack(elm);
		inStackElement.components[component.componentName] = component;
	}

	/**
	 * unregisterComponent
	 * Unregister a component on a given element
	 * @param 	{HTMLElement} 	elm 		The element in which to register a component
	 * @param 	{SComponent} 	component 	The component to register
	 * @return 	{void}
	 */
	unregisterComponent(elm, component) {
		const inStackElement = this._getElementStack(elm);
		delete inStackElement.components[component.componentName];
		// remove the s-component attribute if no more components
		if (Object.keys(inStackElement.components).length <= 0) {
			elm.removeAttribute('s-component');
		}
	}

	/**
	 * registerElement
	 * Register an SElement instance on a given element
	 * @param 	{HTMLElement} 	elm 		The element in which to register a component
	 * @param 	{SElement} 		element 	The SElement instance to register
	 * @return 	{void}
	 */
	registerElement(elm, sElement) {
		const inStackElement = this._getElementStack(elm);
		// add the element into the element stack
		inStackElement.elements[sElement.elementId] = sElement;
		// save the element into the stacj
		inStackElement.elm = elm;
		// save the original element is is the first time
		// that this element is grabed from the DOM
		if ( ! inStackElement.originalElement) {
			const originalElement = elm.cloneNode(false);
			// remove the sugar component and element attribute
			originalElement.removeAttribute('s-element');
			originalElement.removeAttribute('s-component');
			inStackElement.originalElement = originalElement;
		}
	}

	/**
	 * unregisterElement
	 * Unregister an SElement instance on a given element
	 * @param 	{HTMLElement} 	elm 		The element in which to register a component
	 * @param 	{SElement} 		element 	The SElement instance to register
	 * @return 	{void}
	 */
	unregisterElement(elm, sElement) {
		const inStackElement = this._getElementStack(elm);
		delete inStackElement.elements[sElement.elementId];
		// remove from the elementsById stack
		delete window.sugar._elementsById[sElement.elementId];
		// remove the s-component attribute if no more components
		if (Object.keys(inStackElement.elements).length <= 0) {
			elm.removeAttribute('s-element');
			window.sugar._elements.delete(elm);
		}
	}

	/**
	 * getComponents
	 * Return all the components inited on the given element
	 * @param 	{HTMLElement} 	elm 	The element to process
	 * @return 	{Object} 				The object of all components inited on this element
	 */
	getComponents(elm) {
		const inStackElement = this._getElementStack(elm);
		if ( ! inStackElement) return null;
		return inStackElement.components;
	}

	/**
	 * getOriginalElement
	 * Return the original element before it has been processed by any components etc...
	 * @param 	{HTMLElement} 	elm 	The element to process
	 * @return 	{HTMLElement} 			The original element
	 */
	getOriginalElement(elm) {
		const inStackElement = this._getElementStack(elm);
		if ( ! inStackElement) return null;
		return inStackElement.originalElement;
	}

	/**
	 * getElementsCount
	 * Return the number of SElements instances that are inited on the given html element
	 * @param 	{HTMLElement} 	elm 	The element to process
	 * @return 	{Integer}				The count of SElement instances that are living on the particular node
	 */
	getElementsCount(elm) {
		const inStackElement = this._getElementStack(elm);
		if ( ! inStackElement) return 0;
		return Object.keys(inStackElement.elements).length;
	}
};

if ( ! window.sugar) window.sugar = {};
window.sugar.sElementsManager = new SElementsManager();
export default window.sugar.sElementsManager;
