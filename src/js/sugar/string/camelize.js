/**
 * Camelize a string
 */
export default function camelize(text) {
	let res = '';
	res = text.replace(/(?:^|[-_])(\w)/g, function (_, c) {
		return c ? c.toUpperCase () : '';
	});
	res = res.substr(0,1).toLowerCase() + res.slice(1);
	return res.trim();
}
