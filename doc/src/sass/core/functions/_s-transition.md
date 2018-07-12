# s-transition

Take a transition as parameter and parse it to return the {List} corresponding
The $transitions parameter can be either a registered transition name or a custom css transition like : all .2s ease-in-out 2s
The $transitions argument will be parsed with the [./_s-parse-properties.scss] function.



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$transitions  |  **{ [List](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#lists) }**  |  The registered transition(s) name(s) or the transition(s) strings(s) to transform into list  |  required  |

Return **{ [List](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#lists) }** The corresponding transition list properties

### Example
```scss
	// register a transition
@include s-setup((
		transitions : (
			fast : all .2s ease-in-out 0s,
			// other transitions...
		)
));

// registered transition
.my-cool-element {
		transition : s-transition(fast);
		// transition : all .2s ease-in-out 0s;
}

// custom transition
.my-cool-element {
 	transition : s-transition(fast -delay .5s, fast width ease-in);
 	// transition : all .2s ease-in-out .5s, width .2s ease-in 0s;
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)