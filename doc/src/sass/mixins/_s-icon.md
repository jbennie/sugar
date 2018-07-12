# s-icon

Apply an icon on the element. This mixin support font-awesome and custom icons systems that have an icon name formated like "icon-{name}"


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$name  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The icon name to apply  |  required  |

### Example
```scss
	.my-cool-icon {
	@include s-icon(fa-user);
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)