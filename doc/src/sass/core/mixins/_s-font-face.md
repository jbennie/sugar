# s-font-face

Helper to print a font-face



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$font-family  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The font-family  |  required  |
$src  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The source url (only 1 extension)  |  required  |
$extensions  |  **{ [List](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#lists) }**  |  The extensions list that you have available  |  optional  |  woff2
$font-weight  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The font-weight property  |  optional  |  normal
$font-style  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The font-style property  |  optional  |  normal
$font-display  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The font-display property  |  optional  |  auto

### Example
```scss
	// if you have these extensions files : .woff .eot .woff2
@include s-font-face(
		$name : my-cool-font,
		$src : '/fonts/my-font.eot',
		$extensions : eot woff woff2
)
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)