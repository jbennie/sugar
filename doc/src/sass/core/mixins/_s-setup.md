# Mixins


## s-setup




Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$settings  |  **{ [Map](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) }**  |  The settings to override  |  required  |

### Example
```scss
	@include s-setup((
		typo : (
			font-size : 12px
		),
		sizes : (
			small : 0.5,
			big : 1.5
		)
));
// this mixin can be called as many times as you need
// this allows you to separate your configs setup into multiple
// files...
```
Author : Olivier Bossel <olivier.bossel@gmail.com>