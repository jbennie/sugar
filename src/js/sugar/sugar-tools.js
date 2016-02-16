module.exports = {
	uncamelize : (text, separator = '-') => {
		// Replace all capital letters by separator followed by lowercase one
		var text = text.replace(/[A-Z]/g, function (letter) {
			return separator + letter.toLowerCase();
		});

		// Remove first separator (to avoid _hello_world name)
		return text.replace("/^" + separator + "/", '');
	}
};