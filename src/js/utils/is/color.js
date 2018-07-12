/**
 * Check if the passed value is a color
 *
 * @name 		isColor
 * @param 		{Mixed} 		value 		The value to check
 * @return 		{Boolean} 					The check result
 *
 * @example 	js
 * isColor('red') => true
 * isColor('#fff') => true
 * isColor('hello') => false
 *
 * @see 		http://stackoverflow.com/questions/6386090/validating-css-color-names
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function isColor(value) {
	var ele = document.createElement("div");
    ele.style.color = value;
    return ele.style.color.split(/\s+/).join('').toLowerCase();
}
