# s-context-setup

Register a context with a name to use it later



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$name  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The context name  |  required  |
$settings  |  **{ [Map](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) }**  |  The settings to override for this context  |  required  |

### Example
```scss
	@include s-context-setup(my-cool-context, (
		look-and-feel : (
			padding-vertical : (
				default : 0.6em
			)
		)
));

// using your context
@include s-context(my-cool-context) {
		s-look-and-feel(padding-vertical); // => 0.6em
}
```
Author : Olivier Bossel <olivier.bossel@gmail.com>