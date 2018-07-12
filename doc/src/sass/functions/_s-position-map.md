# s-position-map

Return the representation of a position styling like position:absolute; top:0; left:100%; etc...
This function gives you some shortcuts to align your element top, bottom, middle, center, etc...



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
	s-position-map(absolute, top, right);
s-position-map(absolute, middle, center);
s-position-map(relative, bottom, right);
s-position-map(absolute, bottom, center);
// etc...
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)