# s-media

Easy to use media query mixin that support cssua classes to target specific browsers


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$screen  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  Any of the @media screen type property like "screen, handheld, print, etc..."  |  optional  |  null
$min-width  |  **{ Number }**  |  The min width to target  |  optional  |  null
$max-width  |  **{ Number }**  |  The max width to target  |  optional  |  null
$min-height  |  **{ Number }**  |  The min height to target  |  optional  |  null
$max-height  |  **{ Number }**  |  The max height to target  |  optional  |  null
$orientation  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The orientation to target. Can be portrait or landscape  |  optional  |  null
$resolution  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The resolution to target. Can be 2x, 3x, 4x, etc...  |  optional  |  null
$engine  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The engine that powers the display. Can be gecko, webkit, trident, blink or presto  |  optional  |  null
$device  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The device to target. Can be mobile, tablet, desktop, iphone or ipad  |  optional  |  null
$browser  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The browser(s) to target. Can be chrome, safari, firefox, opera, ie, ie6-20  |  optional  |  null
$system  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The system(s) to target. Can be ios, osx, windows, linux, android, webos or blackberry  |  optional  |  null

### Example
```scss
	// simple min width
@include s-media(
	$min-width : 200px
) {
	// custom css here...
}

// target a specific engine
@include s-media(
	$engine : gecko webkit
) {
	// custom css here
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)