let uniqidIdx = 0;
if ( ! window.sugar) window.sugar = {};
if ( ! window.sugar._uniqid) window.sugar._uniqid = 0;

/**
 * Get a uniq id
 */
export default function uniqid() {
	// update uniqid idx
	window.sugar._uniqid++;
	return `s${window.sugar._uniqid.toString()}`;
	// uniqidIdx++;

	// let ts=String(new Date().getTime()), i = 0, out = '';
	// for(i=0;i<ts.length;i+=2) {
	// 	out+=Number(ts.substr(i, 2)).toString(36);
	// }
	// return ('s' + out + (uniqidIdx * Math.round(Math.random()*9999999)));
}
