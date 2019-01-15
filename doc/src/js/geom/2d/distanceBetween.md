# distanceBetween

Get the distance between two points


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
point1  |  **{ Point }**  |  The point 1, x and y value  |  required  |
point2  |  **{ Point }**  |  The point 2, x and y value  |  required  |

Return **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }** The distance between the two points

### Example
```js
	import distanceBetween from 'coffeekraken-sugar/js/geom/2d/distanceBetween'
distanceBetween({
	x: 10, y: 20
}, {
	x: 10, y: 30
}) // 10
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)