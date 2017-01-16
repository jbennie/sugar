## Mixins


### s-unit-context




Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$unit  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The unit wanted  |  required  |

#### Example
```scss
	// if settings.typo.font-size == 16px
s-setting('typo.font-size'); // => 16px
@incluse s-unit-context(rem) {
		s-setting('typo.font-size'); // => 1rem
}
```
Author : Olivier Bossel <olivier.bossel@gmail.com>