# s-interpolate

Return the specified or calculated value of the given stack and size
depending on the settings.sizes ratios stack



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$stack  |  **{ [Map](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) }**  |  The stack from which to interpolate the value  |  required  |
$size  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The size wanted (has to exist in the settings.sizes stack)  |  required  |

Return **{ Number }** The $stack.$size value or the interpolated one depending on the settings.sizes ratios

### Example
```scss
	// settings.sizes
@include s-setup((
		sizes : (
			small : 0.5,
			default : 1, // default is ALWAYS 1
			big : 1.5
		)
));

$myStack : (
		default : 3rem,
		big : 6rem
)

s-interpolate($myStack, big) // 6rem cause specified in the $myStack value
s-interpolate($myStack, small) // 1.5rem => calculated like : 3rem * 0.5 = 1.5rem
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)