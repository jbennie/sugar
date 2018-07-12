# s-position

Set a complexe position styling like position:absolute; top:0; left:100%; etc...
This mixin gives you some shortcuts to align your element top, bottom, middle, center, etc...



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$position  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The position css property  |  optional  |  absolute
$vertical-align  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The vertical alignement wanted (top,middle,bottom)  |  optional  |  top
$align  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The horizontal alignement wanted (left,center,right)  |  optional  |  left
$top  |  **{ Number }**  |  The top property wanted  |  optional  |  null
$right  |  **{ Number }**  |  The right property wanted  |  optional  |  null
$bottom  |  **{ Number }**  |  The bottom property wanted  |  optional  |  null
$left  |  **{ Number }**  |  The left property wanted  |  optional  |  null

Return **{ [Map](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) }** The map representation of the position wanted

### Example
```scss
	.my-cool-element {
	// absolute top right
	@include s-position(absolute, top, right);
	// custom right and bottom values
	@include s-position(absolute,
		$bottom : 20px,
		$right : 20px
	);
	// etc...
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)