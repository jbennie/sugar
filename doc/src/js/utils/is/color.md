## Methods


### isColor

Check if the passed value is a color



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
value  |  **{ Mixed }**  |  The value to check  |  required  |

Return **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }** The check result

#### Example
```js
	isColor('red') => true
isColor('#fff') => true
isColor('hello') => false
```
See more : [http://stackoverflow.com/questions/6386090/validating-css-color-names](http://stackoverflow.com/questions/6386090/validating-css-color-names)

Author : Olivier Bossel <olivier.bossel@gmail.com>