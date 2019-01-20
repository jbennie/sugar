# backgroundImageLoaded

Detect when a background image has been loaded on an HTMLElement


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The HTMLElement on which to detect the background image load  |  required  |

Return **{ [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) }** A promise that will be resolved when the background image has been loaded

### Example
```js
	import backgroundImageLoaded from 'coffeekraken-sugar/js/dom/backgroundImageLoaded'
backgroundImageLoaded($myElm).then(() => {
  // do something when loaded
})
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)