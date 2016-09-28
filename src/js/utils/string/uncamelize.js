/**
 * Uncamelize a string
 */
export default function uncamelize(text, separator = '-') {
	// Replace all capital letters by separator followed by lowercase one
	let res = '';
	res = text.replace(/[A-Z]/g, function (letter) {
		return separator + letter.toLowerCase();
	});

	// Remove first separator (to avoid _hello_world name)
	return res.replace("/^" + separator + "/", '').trim();
}
