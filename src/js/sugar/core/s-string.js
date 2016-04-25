export default {
	/**
	 * Lower first letter
	 */
	lowerFirst : (string) => {
		return string.charAt(0).toLowerCase() + string.slice(1);
	},

	/**
	 * Upper first
	 */
	upperFirst : (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	},

	/**
	 * Uncamelize a string
	 */
	uncamelize : (text, separator = '-') => {
		// Replace all capital letters by separator followed by lowercase one
		var text = text.replace(/[A-Z]/g, function (letter) {
			return separator + letter.toLowerCase();
		});

		// Remove first separator (to avoid _hello_world name)
		return text.replace("/^" + separator + "/", '');
	},

	/**
	 * Camelize a string
	 */
	camelize : (text) => {
		text = text.replace(/(?:^|[-_])(\w)/g, function (_, c) {
			return c ? c.toUpperCase () : '';
		});
		return text.substr(0,1).toLowerCase() + text.slice(1);
	},
}