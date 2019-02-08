# wrap

Wrap an HTMLElement inside another `$wrapper` one


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$toWrap  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to wrap  |  required  |
$wrapper  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The wrapper element  |  required  |

### Example
```js
	import wrap from 'coffeekraken-sugar/js/dom/wrap'
const $wrapper = document.createElement('div')
// assuming:
// <div>
//   <span class="wrap">Hello World</span>
// </div>
wrap(document.querySelector('.wrap'), $wrapper)
// output:
// <div>
//   <div>
//     <span class="wrap">Hello World</span>
//   </div>
// </div>
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)