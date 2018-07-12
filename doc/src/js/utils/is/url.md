# isUrl

Check if the passed value is a valid url



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
value  |  **{ Mixed }**  |  The value to check  |  required  |

Return **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }** The check result

### Example
```js
	isUrl('http://google.com') => true
isUrl('ftp://web.coco.com:2222') => true
isUrl('hello') => false
```