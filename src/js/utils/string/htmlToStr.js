export default function htmlToStr(html, deep = true) {
	if ( document !== undefined && document.createElement !== undefined) {
		const cont = document.createElement('div');
		cont.appendChild(html.cloneNode(deep));
		return cont.innerHTML;
	}
	return html;
}
