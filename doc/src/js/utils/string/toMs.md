# toMs

Return the milisecond (ms) representation of a css timing unit
Currently support:
- milisecond (ms)
- second (s)



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
string  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The string timing representation like 1s, 50ms, etc...  |  required  |

Return **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }** The ms representation of the passed string

### Example
```js
	import toMs from 'coffeekraken-sugar/js/utils/strings/toMs'
toMs('1.2s') // 1200
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)