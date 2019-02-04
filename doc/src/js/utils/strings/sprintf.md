# sprintf

Javascript implementation of the sprintf php function.
>For more infos, check [this github repository](https://github.com/alexei/sprintf.js)



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
format  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The format of the string wanted as output  |  required  |
...replacements  |  **{ Mixed }**  |  The replacement tokens to apply to the string  |  required  |

Return **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }** The processed string

### Example
```js
	import sprintf from 'coffeekraken-sugar/js/utils/strings/sprintf'
sprintf('Hello %s', 'world') // Hello World
const user = { name: 'Dolly' }
sprintf('Hello %(name)s', user) // Hello Dolly
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)

See : **See more** : [https://github.com/alexei/sprintf.js](https://github.com/alexei/sprintf.js)