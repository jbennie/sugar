/**
 * Ease in out quart function
 *
 * @name 		easeInOutQuart
 * @param 		{Number} 		t 		The current time
 * @return 		{Number} 				The value depending on time
 */
export default function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t };
