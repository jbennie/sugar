# s-animation

Print out the animation property calculated with the passed arguments
This mixin support all the standard css animation properties like name, duration, delay, ease, direction and fill-mode.
The $animations argument will be parsed with the [../functions/_s-parse-properties.scss] function.
If you specify multiple animations at a time, this mixin will take care
of the delay calculation for each animations and make them play one after another



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$animations  |  **{ [List](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#lists) }**  |  The animations wanted like : coco .2s ease-in-out reverse  |  required  |

### Example
```scss
	// animation : my-animation 1s 0s ease-in-out 1 normal forwards, another-animation 4s 1s ease-in-out 1 normal forwards;
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)