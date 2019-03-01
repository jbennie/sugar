# pad

Pad a number n of x 0 or another passed character


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
number  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The number to pad  |  required  |
width  |  **{ Integer }**  |  The width of pad to apply  |  required  |
character  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The character to use  |  optional  |  "0"

### Example
```js
	import pad from 'coffeekraken-sugar/js/utils/numbers/pad'
pad(123, 4) // 0123
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)