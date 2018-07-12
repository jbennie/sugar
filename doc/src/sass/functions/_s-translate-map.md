# s-translate-map

Return the Map properties representation of a translate x,y and z



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$x  |  **{ Number }**  |  The x translate value  |  optional  |  0
$y  |  **{ Number }**  |  The y translate value  |  optional  |  0
$z  |  **{ Number }**  |  The z translate value  |  optional  |  0

Return **{ [Map](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) }** The translate Map representation

### Example
```scss
	s-translate-map(10px,20px);
// return
// (
// 	transform: translateX(10px) translateY(20px) translateZ(0)
// )
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)