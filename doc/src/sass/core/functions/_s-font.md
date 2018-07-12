# s-font

Return the font {Map} that correspond to the passed arguments



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$family  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The font family wanted (can be a registered font name)  |  optional  |  null
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color wanted (can be a registered color name)  |  optional  |  null
$size  |  **{ Number }**  |  The font-size wanted  |  optional  |  null
$style  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The font-style wanted  |  optional  |  null
$variant  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The font-variant wanted  |  optional  |  null
$weight  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) , Number }**  |  The font-weight wanted  |  optional  |  null
$decoration  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The text-decoration wanted  |  optional  |  null
$align  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The text-align wanted  |  optional  |  null
$transform  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The text-transform wanted  |  optional  |  null
$stretch  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The font-stretch wanted  |  optional  |  null
$white-space  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The white-space wanted  |  optional  |  null
$height  |  **{ Number }**  |  The line-height wanted  |  optional  |  null
$spacing  |  **{ Number }**  |  The letter-spacing wanted  |  optional  |  null
$indent  |  **{ Number }**  |  The text-indent wanted  |  optional  |  null
$break  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The line-break wanted  |  optional  |  null
$wrap  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The word-wrap wanted  |  optional  |  null

Return **{ [Map](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) }** The corresponding font map

### Example
```scss
	s-font(
		$family : 'Helvetica Neue',
		$size : 12px,
		$wrap : norwap
);
// (
		font-family : 'Helvetica Neue',
		font-size : 12px,
		word-wrap : nowrap
// )
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)