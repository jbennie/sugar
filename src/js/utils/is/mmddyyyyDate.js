/**
 * Check if is a valid mm.dd.yyyy date
 * This will match : mm.dd.yyyy | mm/dd/yyyy | mm-dd-yyyy | mm dd yyyy
 * @param    {String}    date    The date to check
 * @return    {Boolean}    true if is valid, false if not
 * @example    js
 * import isMmddyyyyDate from 'coffeekraken-sugar/js/utils/is/mmddyyyyDate'
 * if (isMmddyyyyDate('12.25.2018')) {
 *     // do something cool
 * }
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function isMmddyyyyDate(date) {
	return /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d\d\d\d$/.test(
		date
	);
}
