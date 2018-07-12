# s-dash-to-map

Transform a dash notation value into a map
Dash notation value is : -key1 value1 -key2 value2



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$dash  |  **{ [List](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#lists) }**  |  The dash list notation to transform  |  required  |

Return **{ [Map](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) }** The map generated

### Example
```scss
	$dash : -hello world -coco universe
s-dash-to-map($dash);
// (
// 	hello : world,
// 	coco : universe
// )
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)