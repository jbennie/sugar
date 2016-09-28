export default function strToHtml(string) {
	if (document !== undefined && document.createElement !== undefined) {
		const cont = document.createElement('div');
		cont.innerHTML = string;
		if (cont.children.length === 1) {
			return cont.children[0];
		} else {
			return cont;
		}
	}
	return string;
}
