# isRegexp

Check if the passed value is a js Regexp


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
value  |  **{ Mixed }**  |  The value to check  |  required  |

Return **{ Regexp }** true if it's a Regexp, false if not

### Example
```js
	import isRegexp from 'coffeekraken-sugar/js/utils/is/regexp'
if (isRegexp(/^hello$/g) {
  // do something
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)