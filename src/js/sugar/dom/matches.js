/**
 * Polyfill for the matches js method
 */
export default function matches(el, selector) {
	if (el.nodeName == '#comment' || el.nodeName == '#text') { return false; }
	var p = Element.prototype;
	var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function(s) {
		return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
	};
	return f.call(el, selector);
}
