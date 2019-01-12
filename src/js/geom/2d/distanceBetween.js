/**
 * Get the distance between two points
 * @param    {Point}    point1    The point 1, x and y value
 * @param    {Point}    point2    The point 2, x and y value
 * @return    {Number}    The distance between the two points
 *
 * @example    js
 * import distanceBetween from 'coffeekraken-sugar/js/geom/2d/distanceBetween'
 * distanceBetween({
 * 	x: 10, y: 20
 * }, {
 * 	x: 10, y: 30
 * }) // 10
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function distanceBetween(point1, point2) {
var xs = 0;
var ys = 0;

xs = point2.x - point1.x;
xs = xs * xs;

ys = point2.y - point1.y;
ys = ys * ys;

return Math.sqrt( xs + ys );
}
