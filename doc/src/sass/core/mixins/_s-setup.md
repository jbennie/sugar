# s-setup

Setup sugar toolkit by overriding the default [settings](../_settings.scss)
This has to be called **BEFORE** the [s-init mixin](./_s-init.scss)



### Parameters
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
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)