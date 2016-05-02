/**
 * Camelize a string
 */
export default function camelize(text) {
	text = text.replace(/(?:^|[-_])(\w)/g, function (_, c) {
		return c ? c.toUpperCase () : '';
	});
	return text.substr(0,1).toLowerCase() + text.slice(1);
}