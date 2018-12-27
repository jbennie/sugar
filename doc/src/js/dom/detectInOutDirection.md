# detectInOutDirection

Detect the mouse direction when entered on the passed element. The direction can be up, down, left or right and will be passed to the two callbacks available.
The first one is the `onIn` callback, and the second one is the `onOut`.



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to listen for mouseover and mouseout on  |  required  |
onIn  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  The onIn callback. The direction and the elm will be passed to it  |  required  |
onOut  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  The onOut callback. The direction and the elm will be passed to it  |  required  |

Return **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }** The elm to maintain chainability

### Example
```js
	import detectInOutDirection from 'coffeekraken-sugar/js/dom/detectInOutDirection'
detectInOutDirection(myElm, (direction, elm) => {
    // do something on in
}, (direction, elm) => {
    // do something on out
})
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)