# s-list-bullet

Set how the list bullet has to be displayed.


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$type  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The list type to use. Can be all the list-style-type values  |  optional  |  null
$image  |  **{ Url }**  |  An image url to use as bullet  |  optional  |  null
$icon  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  An icon name to use as bullet. Will use the s-icon mixin under the hood  |  optional  |  null
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color to use for the bullet  |  optional  |  s-color(default)
$size  |  **{ Number }**  |  The size to use for the bullet  |  optional  |  null
$offset  |  **{ Number , List<Number> }**  |  A number that represent the top offset, or a list of two numbers that represent the top, left offset  |  optional  |  null
$font  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The font name to use for the bullet  |  optional  |  null
$space  |  **{ Number }**  |  The space between the bullet and the content  |  optional  |  null

### Example
```scss
	$image : '../img/my-cool-bullet.svg',
		$offset : 5px 10px,
		$size : 1em,
		$space : 2em
	);
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)