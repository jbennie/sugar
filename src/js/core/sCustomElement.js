require('webcomponents.js');
export default {

	/**
	 * Register a custom element
	 * @param 			{String} 			name 		The name of the component
	 * @param 			{SWebComponent} 	component 	The component to register
	 */
	define : function(name, component) {
		document.registerElement(name, component);
	}
}
