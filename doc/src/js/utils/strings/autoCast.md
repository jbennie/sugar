# autoCast

Auto cast the string into the correct variable type


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
string  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The string to auto cast  |  required  |

Return **{ Mixed }** The casted value

### Example
```js
	import autoCast from 'coffeekraken-sugar/js/utils/strings/autoCast'
autoCast('12') // => 12
autoCast('window.HTMLElement') // => HTMLElement
autoCast('{"hello":"world"}') // {hello:'world'}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)