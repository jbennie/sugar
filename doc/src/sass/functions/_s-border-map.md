# s-border-map

Parse and return the Map respresentation of a border property
The $border argument will be parsed with the [s-parse-properties](../core/functions/_s-parse-properties.scss) function.



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$border  |  **{ [List](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#lists) }**  |  The border property to parse  |  required  |

Return **{ [Map](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) }** The Map represenration of the border

### Example
```scss
	s-border-map(1px solid white);
// return
// (
// 	width : 1px,
// 	color : white,
// 	style : solid
// )
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)