let uniqidIdx = 0;
let sTools = {
	/**
	 * Get a uniq id
	 */
	uniqid : () => {
		// update uniqid idx
		uniqidIdx++;
		let ts=String(new Date().getTime()), i = 0, out = '';
		for(i=0;i<ts.length;i+=2) {        
			out+=Number(ts.substr(i, 2)).toString(36);    
		}
		return ('s' + out + (uniqidIdx * Math.round(Math.random()*9999999)));
	},

	/**
	 * Get an object constructor name
	 */
	constructorName : (obj) => {
		let funcNameRegex = /function (.{1,})\(/;
		let results = (funcNameRegex).exec((obj).constructor.toString());
		return (results && results.length > 1) ? results[1] : "";
	}

};
export default sTools;