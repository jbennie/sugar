# appendScriptTag

Append a script tag either to the head or the body


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
src  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The script src to load  |  required  |

Return **{ [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) }** A promise resolved with the script tag when it has fully loaded

### Example
```js
	import appendScriptTag from 'coffeekraken-sugar/js/dom/appendScriptTag'
appendScriptTag('dist/js/app.js')
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)