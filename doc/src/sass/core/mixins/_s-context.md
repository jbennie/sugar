# s-context

Set a context to be used inside the mixin



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$name-or-map  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) , [Map](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) }**  |  The name of a registered context or a map  |  required  |

### Example
```scss
	// register a context
@include s-context-setup(my-cool-context, (
		look-and-feel : (
			padding-vertical : (
				default : 0.6em
			)
		)
));

// registered context
@include s-context(my-cool-context) {
		// your code here...
}

// inline context
@include s-context((
		look-and-feel : (
			padding-vertical : (
				default : .3em
			)
		)
)) {
		// your code here...
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)