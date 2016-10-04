/**
 * Ease in out cubic function
 *
 * @name 		easeInOutCubic
 * @param 		{Number} 		t 		The current time
 * @return 		{Number} 				The value depending on time
 */
export default function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 };
