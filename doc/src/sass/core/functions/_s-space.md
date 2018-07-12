# s-space

Return a value interpolated from the settings.spaces stack



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$size  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The space size wanted. Must exist in the settings.sizes stack  |  required  |

Return **{ Number }** The actual space value

### Example
```scss
	.my-cool-section {
		padding : s-pace(big);
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)