# isYyyymmddDate

Check if is a valid yyyy.mm.dd date
This will match : yyyy.mm.dd | yyyy/mm/dd | yyyy-mm-dd | yyyy mm dd


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
date  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The date to check  |  required  |

Return **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }** true if is valid, false if not

### Example
```js
	import isYyyymmddDate from 'coffeekraken-sugar/js/utils/is/yyyymmddDate'
if (isYyyymmddDate('2018.12.25')) {
    // do something cool
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)