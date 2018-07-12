# getAnimationProperties

Get the css animation properties from an HTMLElement in an object format



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to get the properties from  |  required  |

Return **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }** The animation properties

### Example
```js
	import getAnimationProperties from 'sugarcss/js/dom/getAnimationProperties'
const props = getAnimationProperties(myCoolHTMLElement);
// output format
// {
// 	name : ['animation1'],
// 	duration : [200],
// 	delay : [0],
// 	timingFunction : ['linear'],
// 	iterationCount : [1],
// 	direction : ['forward'],
// 	totalDuration : 200
// }
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)