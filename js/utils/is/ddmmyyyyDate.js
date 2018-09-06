"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDdmmyyyyDate;
/**
 * Check if is a valid dd.mm.yyyy date
 * This will match : dd.mm.yyyy | dd/mm/yyyy | dd-mm-yyyy | dd mm yyyy
 * @param    {String}    date    The date to check
 * @return    {Boolean}    true if is valid, false if not
 * @example    js
 * import isDdmmyyyyDate from 'coffeekraken-sugar/js/utils/is/ddmmyyyyDate'
 * if (isDdmmyyyyDate('20.12.2018')) {
 *     // do something cool
 * }
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function isDdmmyyyyDate(date) {
  return (/^(?:(?:31(\/|-|\.|\s)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.|\s)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.|\s)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.|\s)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(date)
  );
}