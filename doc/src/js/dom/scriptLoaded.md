# loadScript

Detect when a script has been fully loaded


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$script  |  **{ HTMLScriptElement }**  |  The script element to detect the loading state  |  required  |

Return **{ [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) }** The promise that will be resolved when the script is fully loaded

### Example
```js
	import scriptLoaded from 'coffeekraken-sugar/js/dom/scriptLoaded'
scriptLoaded($script).then(($script) => {
  // do something here
})
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)