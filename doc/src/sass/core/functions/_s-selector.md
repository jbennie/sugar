# s-selector

Process selector to avoid having --default, etc...


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$selector  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The selector to process  |  required  |

Return **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }** The processed selector

### Example
```scss
	s-selector('.input--default'); // => .input
s-selector('.input-default'); // => .input
s-selector('.input.default'); // => .input
```