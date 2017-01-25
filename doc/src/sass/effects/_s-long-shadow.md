# s-long-shadow




Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The shadow color  |  optional  |  rgba(0,0,0,.3)
$type  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The shadow type (text,box)  |  optional  |  text
$angle  |  **{ Degree }**  |  The shadow angle  |  optional  |  135deg
$depth  |  **{ Integer }**  |  The shadow depth  |  optional  |  20
$fade  |  **{ Boolean }**  |  If true, the shadow will fade itself  |  optional  |  false
$blur  |  **{ Number }**  |  The blur amount of the shadow  |  optional  |  0
$blur-ratio  |  **{ Number }**  |  The ratio to blur each depth more  |  optional  |  0

### Example
```scss
	.my-cool-title {
		@include s-long-shadow(
			$depth : 10
		);
}
.my-cool-box {
		@include s-long-shadow(
			$type : box
		);
}
```
Author : Olivier Bossel <olivier.bossel@gmail.com>