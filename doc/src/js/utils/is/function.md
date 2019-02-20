# isFunction

Check if the passed value is a js function


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
value  |  **{ Mixed }**  |  The value to check  |  required  |

Return **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }** true if it's a function, false if not

### Example
```js
	import isFunction from 'coffeekraken-sugar/js/utils/is/function'
if (isFunction(function() {})) {
  // do something
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)