# s-context

Return the name of the context setted with the [../mixins/_s-context.scss] mixin



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$default  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The name to return if no context exist  |  optional  |  null

Return **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }** The context name

### Example
```scss
	// register a context
@include s-context-setup('my-context', (
		// override some settings here...
));

s-context('hello') // => 'hello'
@include s-context('my-context') {
		s-context('hello') // => 'my-context'
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)