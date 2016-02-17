module.exports = function jsxLoader(source) {
	return 'if (window.MutationObserver) { ' + source + ' }';
}