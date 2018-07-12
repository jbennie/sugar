# s-unit-context

Set the unit context to use inside the mixin.
This mean that if you set a unit context, then get a number setting through the [s-setting function](../functions/_s-setting.scss),
The value that will be returned will be converted into the unit context if possible



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$unit  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The unit wanted  |  required  |

### Example
```scss
	// if settings.typography.font-size == 16px
s-setting('typography.font-size'); // => 16px
@incluse s-unit-context(rem) {
		s-setting('typography.font-size'); // => 1rem
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)