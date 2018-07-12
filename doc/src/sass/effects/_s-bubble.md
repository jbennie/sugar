# s-bubble

Create an arrow bubble effect



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$side  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The side (top,right,bottom,left)  |  optional  |  bottom
$align  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The alignement (left,center,right,top,middle,bottom)  |  optional  |  center
$size  |  **{ Number }**  |  The size of the arrow  |  optional  |  10px
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color of the bubble  |  optional  |  s-color(primary)
$arrow-offset  |  **{ Number }**  |  The arrow offset from the side of the bubble  |  optional  |  10px
$border-width  |  **{ Number }**  |  The border width of the bubble  |  optional  |  0
$border-color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The border color of the bubble  |  optional  |  null

### Example
```scss
	.my-cool-bubble {
		@include s-bubble(
			$color : s-color(secondary)
		);
		color : white;
}
```
See : **See more** : [https://codepen.io/kirkas/pen/otqyJ](https://codepen.io/kirkas/pen/otqyJ)

Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)