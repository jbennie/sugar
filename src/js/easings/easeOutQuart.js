/**
 * Ease out quart function
 *
 * @name 		easeOutQuart
 * @param 		{Number} 		t 		The current time
 * @return 		{Number} 				The value depending on time
 */
export default function (t) { return 1-(--t)*t*t*t };
