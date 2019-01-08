# uncamelize

Uncamelize a string


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
string  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The string to uncamelize  |  required  |
separator  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The separator to use  |  optional  |  '-'

Return **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }** The uncamelized string

### Example
```js
	import uncamelize from 'coffeekraken-sugar/js/utils/strings/uncamelize'
uncamelize('helloWorldAndUniverse') // hello-world-and-universe
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)