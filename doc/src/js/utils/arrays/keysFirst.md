# keysFirst

Make sure the passed array start with the passed keys


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
array  |  **{ [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) }**  |  The array to sort  |  required  |
keys  |  **{ [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) }**  |  The keys to start the array with  |  required  |

Return **{ [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) }** The processed array

### Example
```js
	import keysFirst from 'coffeekraken-sugar/js/utils/arrays/keysFirst'
keysFirst(['a','b','d','g','c'], ['d','g'])
// ['d','g','a','b','c']
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)