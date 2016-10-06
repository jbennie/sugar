const __path = require('path');
module.exports = (files) => {
	const types = {};
	files.forEach((path) => {
		const basename = __path.basename(path),
			  fileName = basename.slice(0,-3);
		types[fileName] = `/${path}`;
	});
	types['HTMLElement'] = 'https://developer.mozilla.org/fr/docs/Web/API/HTMLElement';
	types['HTMLLinkElement'] = 'https://developer.mozilla.org/fr/docs/Web/API/HTMLLinkElement';
	return types;
}
