import SEvent from '../core/SEvent';

export default function dispatchEvent(target, name, data = null) {
	// create new event
	const e = new SEvent(name, {
		detail: data
	});
	target.dispatchEvent(e);
}
