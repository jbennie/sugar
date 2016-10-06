const __path = require('path');
const __marked = require('marked');
module.exports = (content, types) => {
	content = __marked(content);
	// content = content.replace(/\{[a-zA-Z]+\}/g, (item) => {
	// 	const name = item.replace('{','').replace('}','');
	// 	let result = `{ ${name} }`;
	//
	// 	if (types[name])  {
	// 		result = `{ <a class="link" href="${types[name]}" title="${name}">${name}</a> }`;
	// 	}
	//
	// 	// do not change
	// 	return result;
	//
	// 	// console.log('item', item);
	// });
	return content;
}
