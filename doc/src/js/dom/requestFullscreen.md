# requestFullscreen

Request fullscreen on the passed DOM element


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element on which to request the fullscreen  |  required  |

Return **{ [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) }** Returns a Promise which is resolved once full-screen mode has been activated.

### Example
```js
	import requestFullescreen from 'coffeekraken-sugar/js/dom/requestFullscreen'
requestFullscreen(myDomElm)
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)