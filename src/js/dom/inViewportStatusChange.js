import InViewportStatusChangeDetector from './InViewportStatusChangeDetector'

/**
 * Monitor when the passed element enter or exit the viewport
 *
 * @name 		inViewportStatusChange
 * @param 		{HTMLElement} 						elm  		The element to monitor
 * @param 		{Function} 							onEnter 	Callback when the element enter the viewport
 * @param 		{Function} 							onExit 		Callback when the element exit the viewport
 * @return 		{InViewportStatusChangeDetector} 				The in viewport status change detector instance
 *
 * @example  	js
 * import inViewportStatusChange from 'sugarcss/js/dom/inViewportStatusChange'
 * const detector = inViewportStatusChange(myCoolHTMLElement, () => {
 * 		// i'm now in the viewport
 * }, () => {
 * 		// i'm now out of the viewport
 * });
 *
 * // stop listening
 * detector.destroy();
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
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
