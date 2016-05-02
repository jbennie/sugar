let uniqidIdx = 0;

/**
 * Get a uniq id
 */
export default function uniqid() {
	// update uniqid idx
	uniqidIdx++;
	let ts=String(new Date().getTime()), i = 0, out = '';
	for(i=0;i<ts.length;i+=2) {        
		out+=Number(ts.substr(i, 2)).toString(36);    
	}
	return ('s' + out + (uniqidIdx * Math.round(Math.random()*9999999)));
}