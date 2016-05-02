/**
 * Auto cast the string into the correct variable type
 */
export default function autoCast(string) {
	if (string === "" || ! string) {
		return true;
	} else if (string == 'false'
		|| string == 'true'
		|| (typeof(string) == 'string' && string.substr(0,1) == '[')
		|| ! isNaN(string)) {
		return eval(string);
	} else if (typeof(string) == 'string' && string.substr(0,1) == '{') {
		return eval('('+string+')');
	}
	return string;
}