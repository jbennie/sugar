import InViewportStatusChangeDetector from './InViewportStatusChangeDetector'

export default function inViewportStatusChange(elm, onEnter = null, onExit = null) {
	const detector = new InViewportStatusChangeDetector(elm);
	if (onEnter) {
		detector.on('enter', onEnter);
	}
	if (onExit) {
		detector.on('exit', onExit);
	}
	// return the detector
	return detector;
}
