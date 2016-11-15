import __strToHtml from '../utils/string/strToHtml'

function processString(string) {
	return string.replace(/&gt;/g,'>').replace(/&lt;/g,'<').replace(/&nbsp;/g,' ');
}

function processNodeElm(elm, format) {
	// check tpl type
	switch (elm.tagName.toLowerCase()) {
		case 'script':
			// grab the script content and convert it to html if needed
			if (format === 'html') {
				return __strToHtml(elm.innerHTML);
			}
			return processString(elm.innerHTML);
		break;
		case 'template':
			// get the template content
			if (format === 'html') {
				return document.importNode(elm.content, true);
			}
			return processString(elm.content);
		break;
		default:
			// assume that the template is the element itself
			if (format === 'html') {
				return elm;
			}
			return processString(elm.outerHTML);
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
export default function template(source, format = 'html') {

	// if the source is an HTMLElement
	if (source.tagName) {
		return processNodeElm(source, format);
	}

	if (typeof(source) === 'string') source = source.trim();

	// check source type
	if (typeof(source) === 'string' && source.substr(0,1) === '<' && source.substr(-1) === '>') {
		// The source is an html string source
		// check if need to convert it
		if (format === 'html') {
			return __strToHtml(source);
		}
		return processString(source);
	}

	// string selector
	if (typeof(source) === 'string') {
		// Try to get the template from the document
		const tpl = document.querySelector(source);
		// if don't found anything
		if ( ! tpl) return;
		// process the node
		return processNodeElm(tpl, format);
	}
}
