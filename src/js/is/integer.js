export default function isInteger(data) {
	return !isNaN(data) && (function(x) { return (x | 0) === x; })(parseFloat(data))
}
