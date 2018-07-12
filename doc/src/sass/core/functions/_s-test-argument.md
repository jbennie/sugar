# s-test-argument

Test an argument passed to a function or a mixin to ensure his type, value, etc...
If the argument does not pass the test, an error will be thrown, unless the $check-only argument is true



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$method  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The function/mixin name (debug purpose)  |  required  |
$argument  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The argument name to test (debug purpose)  |  required  |
$type-or-values  |  **{ [List](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#lists) , [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  If string, the type(s) that the argument must match, if list, the possible values that the argument can take  |  required  |
$value  |  **{ Mixed }**  |  The actual argument value  |  required  |
$check-only  |  **{ Boolean }**  |  If this is true, will not thrown any error  |  optional  |  false

Return **{ Mixed }** The value if ok, false if not

### Example
```scss
	@mixin my-cool-mixin($argument1, $argument2) {
       $argument1 : s-test-argument(my-cool-mixin, argument1, string, $argument1);
       $argument2 : s-test-argument(my-cool-mixin, argument2, (hello,world,12), $argument2);
}
@mixin my-cool-mixin(hello, world); // ok
@mixin my-cool-mixin(hello, universe); // throw an error
@mixin my-cool-mixin(12, world); // throw an error
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)