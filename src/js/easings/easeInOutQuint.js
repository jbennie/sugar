/**
 * Ease in out quint function
 *
 * @name 		easeInOutQuint
 * @param 		{Number} 		t 		The current time
 * @return 		{Number} 				The value depending on time
 */
export default function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t };
