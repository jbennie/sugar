# keysLast

Make sure the passed array ends with the passed keys


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
array  |  **{ [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) }**  |  The array to process  |  required  |
keys  |  **{ [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) }**  |  The keys to end the array with  |  required  |

Return **{ [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) }** The processed array

### Example
```js
	import keysLast from 'coffeekraken-sugar/js/utils/arrays/keysLast'
keysLast(['a','b','d','g','c'], ['d','g'])
// ['a','b','c','d','g']
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)