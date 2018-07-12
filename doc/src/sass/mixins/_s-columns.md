# s-columns

Create a column layout my setting each columns properties at once


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$count  |  **{ Integer }**  |  The number of columns wanted  |  optional  |  null
$gap  |  **{ Number }**  |  The column-gap width wanted  |  optional  |  null
$fill  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The column-fill wanted  |  optional  |  null
$width  |  **{ Number }**  |  THe width of each columns wanted  |  optional  |  null
$span  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  Specify on how many columns the element has to span across  |  optional  |  null
$rule  |  **{ [List](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#lists) }**  |  Specify the shorthand version of the column-rule-color, column-rule-style and column-rule-width  |  optional  |  null
$rule-style  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  Specify the column-rule-style wanted  |  optional  |  null
$rule-color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  Specify the column-rule-color wanted  |  optional  |  null
$rule-width  |  **{ Number }**  |  Specify the column-rule-width wanted  |  optional  |  null

### Example
```scss
	.my-cool-container {
	@include s-columns(
		$count : 3,
		$gap : 30px,
		$span : solid s-color(primary) 20px
	);
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)