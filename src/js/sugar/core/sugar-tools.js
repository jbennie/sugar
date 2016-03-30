module.exports = {
	
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

	/**
	 * Get a uniq id
	 */
	uniqid : () => {
		let ts=String(new Date().getTime()), i = 0, out = '';
		for(i=0;i<ts.length;i+=2) {        
			out+=Number(ts.substr(i, 2)).toString(36);    
		}
		return ('d'+out);
	}
};