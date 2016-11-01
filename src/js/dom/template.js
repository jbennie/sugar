import __strToHtml from '../utils/string/strToHtml'

function processNodeElm(elm) {
	// check tpl type
	switch (elm.tagName.toLowerCase()) {
		case 'script':
			// grab the script content and convert it to html
			return __strToHtml(elm.innerHTML);
		break;
		case 'template':
			// get the template content
			return document.importNode(elm.content, true);
		break;
		default:
			// assume that the template is the element itself
			return elm;
		break;
	}
}

/**
 * Return a usable nodeTree from a variable source like selector, an html string, an html template tag or a node that will be cloned.
 * @param 			{String|HTMLElement} 			source 			The source of the template (html string, selector, node element)
 * @return 			{HTMLElement} 									An HTMLElement node tree that represent the template
 *
 * @TODO : sample
 *
 * @author 			Olivier Bossel <olivier.bossel@gmail.com>
 */
export default function template(source) {

	// if the source is an HTMLElement
	if (source.tagName) {
		return processNodeElm(source);
	}

	// check source type
	if (typeof(source) === 'string' && source.substr(0,1) === '<' && source.substr(-1) === '>') {
		// The source is an html string source
		// we need to convert it to html fragment
		return strToHtml(source);
	}

	// string selector
	if (typeof(source) === 'string') {
		// Try to get the template from the document
		const tpl = document.querySelector(source);
		// if don't found anything
		if ( ! tpl) return;
		// process the node
		return processNodeElm(tpl);
	}
}
