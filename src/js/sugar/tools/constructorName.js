/**
 * Get an object constructor name
 */
export default function constructorName(obj) {
	let funcNameRegex = /function (.{1,})\(/;
	let results = (funcNameRegex).exec((obj).constructor.toString());
	return (results && results.length > 1) ? results[1] : "";
}