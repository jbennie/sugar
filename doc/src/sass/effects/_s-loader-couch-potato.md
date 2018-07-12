# s-loader-couch-potato

Generate a full animated, single element, couch-potato style loader



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$size  |  **{ Number }**  |  The size of the loader  |  optional  |  1em
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color of the loader  |  optional  |  primary
$a-duration  |  **{ Second }**  |  The overall animation duration  |  optional  |  1s
$a-delay  |  **{ Second }**  |  The delay between two animation cycle  |  optional  |  0s
$a-ease  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The ease to use for the animation  |  optional  |  ease-in-out
$a-rotate  |  **{ Degree }**  |  The animation rotation  |  optional  |  360deg
$a-scale  |  **{ Number }**  |  The animation scale  |  optional  |  .7

### Example
```scss
	.my-cool-loader {
		@include s-loader-couch-potato();
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)