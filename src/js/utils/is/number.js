export default function isNumber(source) {
	return !isNaN(parseFloat(source)) && isFinite(source);
}
