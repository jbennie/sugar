/**
 * Return the full height of an element that has maybe a max-height, etc...
 * @param 		{HTMLElement} 		elm 		The element to process
 * @return 		{Number} 						The real height of the element
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function realHeight(elm) {
	// apply an overflow-y to the element
	elm.style.transition = 'none';
	elm.style.overflowY = 'scroll';
	// get the actual height through the scrollHeight
	const height = elm.scrollHeight;
	// reset the overflowY
	elm.style.overflowY = '';
	elm.style.transition = '';
	// return the height
	return height;
}
