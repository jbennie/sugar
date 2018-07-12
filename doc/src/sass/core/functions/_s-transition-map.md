# $_s-default-transition-map

Take a transition as parameter and parse it to return the {Map} corresponding
The $transition parameter can be either a registered transition name or a custom css transition like : all .2s ease-in-out 2s
The $transition argument will be parsed with the [./_s-parse-properties.scss] function.



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$transition  |  **{ [List](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#lists) }**  |  The registered transition name or the transition string to transform into map  |  required  |

Return **{ [Map](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) }** The corresponding transition map properties

### Example
```scss
	// register a transition
@include s-setup((
		transitions : (
			fast : all .2s ease-in-out,
			// other transitions...
		)
));

// registered transition
s-transition-map(fast);
// {
// 	property : all,
// 	duration : .2s,
// 	ease : ease-in-out
// }

// custom transition
s-transition-map(fast -delay .5s);
// {
// 	property : all,
// 	duration : .2s,
// 	ease : ease-in-out,
// 	delay : .5s
// }
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)