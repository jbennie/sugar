## $_sugar-selector-method




Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$method  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The selector method to set  |  optional  |  null

#### Example
```scss
	@include s-selector-method(SMACCS) {
		s-selector-method(BEM) // => SMACCS
		@include s-selector-method(WEBCOMPONENT) {
			s-selector-method() // => 'SMACCS'
		}
}
```
Author : Olivier Bossel <olivier.bossel@gmail.com>;