export default function insertAfter(node, refNode) {
	// next sibling of ref node
	const nextSibling = refNode.nextSibling;
	if ( ! nextSibling) {
		refNode.parentNode.appendChild(node);
	} else {
		refNode.parentNode.insertBefore(node, nextSibling);
	}
}
