# querySelectorAll

Enhanced proxy of the Element.querySelectorAll function that let you specify
if you want elements that are visible, or even that are in the viewport



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
selector  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The css selector to search  |  required  |
settings  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |    |  required  |

Return **{ Array<HTMLElement> }** The founded elements

### Example
```js
	// simple query
const elms = querySelectorAll('.a-cool-css-selector');

// get elements that are in the viewport
const elms = querySelectorAll('.a-cool-css-selector', {
		inViewport : true
});
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)





## Settings

Here's the list of available setting(s).

### visible

If we want only visible elements

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **false**


### inViewport

If we want only elements that are in the viewport

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **false**


### rootNode

The root node to start the query from

Type : **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**

Default : **document.body**