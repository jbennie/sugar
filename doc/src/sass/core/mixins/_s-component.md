# s-component

Set the name of the component that will be handled inside the mixin



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$name  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The name of the component to set  |  optional  |  null
$context  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) , [Map](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) }**  |  A context name or map to use inside the mixin  |  optional  |  null

### Example
```scss
	@include s-component('my-component') {
		s-component('hello') // => 'my-component'
		@include s-component('another-component') {
			s-component('hello') // => 'my-component'
		}
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)