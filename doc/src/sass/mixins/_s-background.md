# s-background

Helper mixin to set a background image



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$repeat  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The background-repeat property  |  optional  |  null
$size  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The background-size property  |  optional  |  null
$attachment  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The background-attachment property  |  optional  |  null
$blend-mode  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The background-blend-mode property  |  optional  |  null
$clip  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The background-clip property  |  optional  |  null
$url  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The background-image url property  |  optional  |  null
$width  |  **{ Number }**  |  The background-size width property  |  optional  |  null
$height  |  **{ Number }**  |  The background-size height property  |  optional  |  null
$top  |  **{ Number }**  |  The background-position top property  |  optional  |  null
$left  |  **{ Number }**  |  The background-position left property  |  optional  |  null
$suffix2x  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The suffix to add the the url if the 2x resolution if wanted  |  optional  |  @2x
$suffix3x  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The suffix to add the the url if the 3x resolution if wanted  |  optional  |  @3x
$suffix4x  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The suffix to add the the url if the 4x resolution if wanted  |  optional  |  @4x
$resolution  |  **{ [List](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#lists) }**  |  The resolution wanted like 2x, 3x and 4x  |  optional  |  null
$position  |  **{ [List](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#lists) }**  |  The background-position property  |  optional  |  null

### Example
```scss
	.my-cool-element {
		@include s-background(
			$url : 'img/my-cool-image.jpg',
			$size : cover,
			resolution : 2x 3x 4x
		);
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com)