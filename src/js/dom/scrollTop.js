/**
 * document.scrollTop polyfill
 */
export default function scrollTop() {
	return window.pageYOffset || document.scrollTop || document.body.scrollTop;
}
