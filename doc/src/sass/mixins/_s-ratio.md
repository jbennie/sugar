# s-ratio




Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$ratio  |  **{ Number }**  |  The ratio to keep like 16/9, etc...  |  required  |
$type  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The type of ratio to apply. Can be before or after  |  optional  |  before

### Example
```scss
	.my-cool-element {
	@include s-ratio(16/9);
}
```
Author : Olivier Bossel <olivier.bossel@gmail.com>