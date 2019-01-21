# unquote

Remove the quotes of a string
Types of quotes removed :
- `"`, `'`, `”`



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
string  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The string to process  |  required  |
quotesToRemove  |  **{ Array<String> }**  |  The quotes to removes  |  optional  |  ['"','\'','”']

Return **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }** The unquoted string

### Example
```js
	import unquote from 'coffeekraken-sugar/js/utils/strings/unquote'
unquote("'Hello world'") // "Hello world"
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)