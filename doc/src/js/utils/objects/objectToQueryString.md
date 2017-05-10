# objectToQueryString

Transform an object (key => pairs) to a query string like "?var1=value1&var2"


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
obj  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  The object to serialize  |  required  |

Return **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }** The query string

### Example
```js
	import __objectToQueryString from 'coffeekraken-sugar/js/utils/object/objectToQueryString'
console.log(__objectToQueryString({
	value1 : 'coco',
	value1 : 'plop'
}));
// => ?value1=coco&value2=plop
```
Author : Olivier Bossel <olivier.bossel@gmail.com>