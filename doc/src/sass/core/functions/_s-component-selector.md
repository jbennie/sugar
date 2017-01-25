# s-component-selector

Return the css class selector for the current component setted by the [core/mixins/_s-component.scss] mixin
and build with the passed arguments.



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$element  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The element name of the class selector | '&' if target the same element like `&#{s-component-selector('&', null)} {}`  |  optional  |  null
$modifier  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The modifier name of the class selector  |  optional  |  null
$state  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The state name of the class selector  |  optional  |  null

Return **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }** The generated class selector

### Example
```scss
	@incluse s-component('my-component') {
		// if settings.selector.method === 'BEM'
		s-component-selector('item') // => '.my-component__item'
		s-component-selector(null, 'red') // => '.my-component--red'
		s-component-selector('coco',null,'active') // => '.my-component__coco--active'
}

// if target the same element with & :
@include s-component('my-component') {
		#{s-component-selector(null, red, null, 'color')} {
			&#{s-component-selector('&', null, 'active')} {
				// something here...
			}
		}
}
```
Author : Olivier Bossel <olivier.bossel@gmail.com>