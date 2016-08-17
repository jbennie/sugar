export default function outerHTML(node) {
	const wrap = document.createElement('div');
	wrap.appendChild(node.cloneNode(true));
	return wrap.innerHTML;
}
