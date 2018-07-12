# querySelector

Enhanced proxy of the Element.querySelector function that let you specify
if you want an element that is visible, or even that is in the viewport



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
selector  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The css selector to search  |  required  |
settings  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |    |  required  |

Return **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }** The founded element

### Example
```js
	// simple query
const elm = querySelector('.a-cool-css-selector');

// get an element that is in the viewport
const elm = querySelector('.a-cool-css-selector', {
		inViewport : true
});
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)





## Settings

Here's the list of available setting(s).

### visible

If we want only a visible element

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **false**


### inViewport

If we want only an element that is in the viewport

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **false**


### rootNode

The root node to start the query from

Type : **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**

Default : **document.body**