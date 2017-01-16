## Mixins


### s-register-class




Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$classname  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The classname that will be printed out  |  required  |
$namespace  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The dots separated namespace under which the class will live  |  required  |

#### Example
```scss
	@include s-register-class(my-cool-class, 'my.cool.namespace') {
		background : pink;
}
@include s-register-class(another-cool-class, 'my.another.namespace') {
		background : red;
}

// print out my helpers classes
@include s-classes('my');
```
Author : Olivier Bossel <olivier.bossel@gmail.com>