# s-lnf

Alias to the [./_s-look-and-feel.scss] function

Return a settings.look-and-feel stack value



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$name  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The look and feel value name  |  required  |

Return **{ Number }** The look and feel value in em

### Example
```scss
	.my-cool-element {
		padding : s-lnf(padding-horizontal) s-lnf(padding-vertical);
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)