"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isYyyymmddDate;
/**
 * Check if is a valid yyyy.mm.dd date
 * This will match : yyyy.mm.dd | yyyy/mm/dd | yyyy-mm-dd | yyyy mm dd
 * @param    {String}    date    The date to check
 * @return    {Boolean}    true if is valid, false if not
 * @example    js
 * import isYyyymmddDate from 'coffeekraken-sugar/js/utils/is/yyyymmddDate'
 * if (isYyyymmddDate('2018.12.25')) {
 *     // do something cool
 * }
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function isYyyymmddDate(date) {
  return (/^\d{4}[\-\/\s\.]?((((0[13578])|(1[02]))[\-\/\s\.]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s\.]?(([0-2][0-9])|(30)))|(02[\-\/\s\.]?[0-2][0-9]))$/.test(date)
  );
}