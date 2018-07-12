# s-columns-map

Return the Map representation of a columns properties


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$count  |  **{ Interger }**  |  The number of columns  |  optional  |  null
$gap  |  **{ Number }**  |  The gap width between each columns  |  optional  |  null
$fill  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The fill property (balance,auto,initial,inherit)  |  optional  |  null
$width  |  **{ Number }**  |  The width of the columns  |  optional  |  null
$span  |  **{ Integer , [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The column-span property (1,all,initial,inherit)  |  optional  |  null
$rule  |  **{ [List](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#lists) }**  |  The column-rule property  |  optional  |  null
$rule-style  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The column-rule-style property  |  optional  |  null
$rule-color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The column-rule-color property  |  optional  |  null
$rule-width  |  **{ Number }**  |  The column-rule-width property  |  optional  |  null

Return **{ [Map](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) }** The map representation or the columns properties

### Example
```scss
	s-columns-map(2, 20px);
// return
// (
// 	column-count : 2,
// 	column-gap : 20px
// )
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)