# wrapInner

Wrapp the content of the passed `$parent` inside a the passed HTMLElement `$wrapper`


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$parent  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The parent to wrap inner  |  required  |
$wrapper  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The wrapper element  |  required  |

### Example
```js
	import wrapInner from 'coffeekraken-sugar/js/dom/wrapInner'
const $myWrapper = document.createElement('div')
// assuming
// <div class="container">
//   <span>Hello World</span>
// </div>
wrapInner(document.querySelector('.container'), $myWrapper)
// return
// <div class="container">
//   <div>
//     <span>Hello World</span>
//   </div>
// </div>
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel@gmail.com](https://olivierbossel@gmail.com)