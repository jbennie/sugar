# isJson

Check if the passed value is a valid json


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
value  |  **{ Mixed }**  |  The value to check  |  required  |

Return **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }** true if it's a valid json, false if not

### Example
```js
	import isJson from 'coffeekraken-sugar/js/utils/is/json'
if (isJson('[{id:10}]')) {
  // do something
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)