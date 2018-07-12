# s-component

Return the name of the top level component setted with the [../mixins/_s-component.scss] mixin



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$default  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The name to return if no top component name exist  |  optional  |  null

Return **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }** The component name

### Example
```scss
	s-component('hello') // => 'hello'
@include s-component('my-component') {
		s-component('hello') // => 'my-component'
		@include s-component('another-component') {
			s-component('hello') // => 'my-component'
		}
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)