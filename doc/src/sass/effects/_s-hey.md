# s-hey

Create a poping dot effect to catch user attention on a particular item
This mixin affect the :before and :after pseudo selector of the item



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$vertical-align  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  Where to put the dot verticaly (top,middle,bottom)  |  optional  |  top
$align  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  Where to put the dot horizontaly (left,center,right)  |  optional  |  left
$size  |  **{ Number }**  |  The size of the dot  |  optional  |  20px
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color of the dot  |  optional  |  primary
$offset-top  |  **{ Number }**  |  The offset top  |  optional  |  0
$offset-right  |  **{ Number }**  |  The offset right  |  optional  |  0
$offset-bottom  |  **{ Number }**  |  The offset bottom  |  optional  |  0
$offset-left  |  **{ Number }**  |  The offset left  |  optional  |  0

### Example
```scss
	.my-cool-element {
		@include s-hey(
			$align : right,
			$color : secondary,
			$size : 10px,
			$offset-top : -10px,
			$offset-right : -10px
		);
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)