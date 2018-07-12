# s-side-lined

Create side lines around an item



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$style  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The line style, same possible values as the border-style property  |  optional  |  solid
$side  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The side where to put lines (left,right,both)  |  optional  |  both
$height  |  **{ Number }**  |  The lines height  |  optional  |  1px
$width  |  **{ Number }**  |  The width of the lines  |  optional  |  50%
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color of the lines  |  optional  |  text
$padding  |  **{ Number }**  |  The padding between the lines and the content  |  optional  |  0
$offset-top  |  **{ Number }**  |  The line offset top  |  optional  |  null

### Example
```scss
	h1 {
		@include s-side-lined(
			$padding : 20px,
			$side : right,
			$width : 100%
		);
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)