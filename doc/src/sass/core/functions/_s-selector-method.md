# Functions


## s-selector-method

Return the selector method define at the top level with the the [../mixins/_s-selector-method.scss] mixin



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$default  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The selector method to return if no top selector method exist  |  optional  |  settings.selector.method

Return **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }** The selector method

### Example
```scss
	s-selector-method() // => settings.selector.method
s-selector-method(BEM) // => BEM
@include s-selector-method(SMACCS) {
		s-selector-method(BEM) // => SMACCS
		@include s-selector-method(WEBCOMPONENT) {
			s-selector-method() // => SMACCS
		}
}
```
Author : Olivier Bossel <olivier.bossel@gmail.com>;