# s-depth

Generate a drop shadow depending on the depth specified



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$depth  |  **{ Integer }**  |  The depth wanted (1,2,3,4,etc...)  |  required  |
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The drop shadow color  |  optional  |  rgba(0,0,0,.2)

### Example
```scss
	.my-cool-element {
		@include s-depth(2);
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)