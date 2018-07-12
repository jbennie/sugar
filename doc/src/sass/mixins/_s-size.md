# s-size

Quicky and easily set simple or complexe size to any element


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$size-width  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) , Number }**  |  The size like "cover" or "contain", or the width un number  |  required  |
$height  |  **{ Number }**  |  The height wanted  |  optional  |  null
$position  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The position wanted if the size is "cover" or "contain"  |  optional  |  absolute

### Example
```scss
	.my-cool-image {
	@include s-size(cover);
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)