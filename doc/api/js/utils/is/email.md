




## Methods


### isEmail

Check if the passed value is a valid email address



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
value  |  **{ Mixed }**  |  The value to check  |  required  |

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }** The check result
#### Example
```js
	isEmail('john.doe@gmail.com') => true
isEmail('plop@yop.com') => true
isEmail('hello') => false

```
Author : Olivier Bossel <olivier.bossel@gmail.com>