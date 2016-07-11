export default function toMs(string) {
	// parse the string to int to get the lenght of the suffix
	// if (string.substr(0,1) === '.') string = '0${string}';
	const value = parseFloat(string);
	const valueLength = `${value}`.length;
	const suffix = string.substr(valueLength);
	// switch on suffix
	switch(suffix) {
		case 'ms': // milisecond
			return value;
		break;
		case 's': // seconds
		default:
			return value * 1000;
		break;
	}
}
