# s-rhythm-width

Return the Map properties representation for the rhythme width
The rhythme width is the width of an element that target a certain number of letters by line



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$letters-count  |  **{ Integer }**  |  The number of letters to target by line  |  optional  |  settings.typography.line-letters-count

Return **{ [Map](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) }** The Map properties representation

### Example
```scss
	s-rhythm-width(50);
// return
// (
// 	display : block,
// 	max-width : 50ex
// )
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)