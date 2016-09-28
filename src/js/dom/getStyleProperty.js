import camelize from '../utils/string/camelize';
import autoCast from '../utils/string/autoCast';

export default function getStyleProperty(elm, name) {

	// caching mecanisme
	setTimeout(() => {
		elm._sComputedStyle = null;
	});

	const computed = elm._sComputedStyle || window.getComputedStyle(elm);
	elm._sComputedStyle = computed;

	const prefixes = ['','webkit-','moz-','ms-','o-','khtml-'];
	for (let i=0; i<prefixes.length; i++) {
		const prefix = prefixes[i];
		const value = computed[camelize(`${prefix}${name}`)];
		if (value && value.trim() !== '') return autoCast(value);
	}
	return null;
}
