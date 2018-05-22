import 'babel-polyfill';
window.html = [];

// util function to get dom elements by
// ref="..." attribute value
window.getRefs = function(scope) {
	const elms = scope.querySelectorAll('[ref]');
	const refs = {};
	[].forEach.call(elms, (elm) => {
		refs[elm.getAttribute('ref')] = elm;
	});
	return refs;
}
