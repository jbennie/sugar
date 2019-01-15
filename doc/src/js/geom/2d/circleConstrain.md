# circleConstrain

Take as parameter a central point, a radius and a points to constrain inside the circle defined by the radius


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
center  |  **{ Vector2 }**  |  The center point of the circle  |  required  |
radius  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The radius to constrain the point in  |  required  |
point  |  **{ Vector2 }**  |  The point to constrain  |  required  |

Return **{ Vector2 }** The new constrained value for the point

### Example
```js
	import circleConstrain from 'coffeekraken-sugar/js/geom/2d/circleConstrain'
circleConstrain({
	x: 10, y: 10
}, 10, {
	x: 10, y: 5
})
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)

See : **See more** : [https://stackoverflow.com/questions/8515900/how-to-constrain-movement-within-the-area-of-a-circle](https://stackoverflow.com/questions/8515900/how-to-constrain-movement-within-the-area-of-a-circle)