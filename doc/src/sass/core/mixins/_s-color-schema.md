# s-color-schema

Print out the scoped color schema css



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$name  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The color schema name  |  required  |

### Example
```scss
	@include s-color-schema(light) {
		h1, h2 {
			color : white;
		}
}
// will print
.cs-light h1,
.cs-light h2 {
		color : white;
}

h1, h2 {
		@include s-color-schema(light) {
			color : white;
		}
}
// will print
.cs-light h1, h1.cs-light,
.cs-light h2, h2.cs-light {
		color : white;
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)