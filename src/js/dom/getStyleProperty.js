import camelize from '../string/camelize';
import autoCast from '../string/autoCast';

export default function getStyleProperty(elm, name) {
	const computed = window.getComputedStyle(elm);
	const prefixes = ['','webkit-','moz-','ms-','o-','khtml-'];
	for (let i=0; i<prefixes.length; i++) {
		const prefix = prefixes[i];
		const value = computed[camelize(`${prefix}${name}`)];
		if (value) return autoCast(value);
	}
	return null;
}
