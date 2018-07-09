# querySelectorLive

Observe the dom to get all the elements that matches a passed css selector at any point in time.
Be warned that this use the mutation observer API and will monitor all the document for new nodes. Make sure to use it
when you don't have the chance to use the custom elements API instead



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
selector  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The css selector that we are interested in  |  required  |
cb  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  The function to call with the newly added node  |  required  |
settings  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  An optional settings object to specify things like the rootNode to monitor, etc...  |  optional  |  {}

### Example
```js
	import querySelectorLive from 'coffeekraken-sugar/js/dom/querySelectorLive'
querySelectorLive('.my-cool-item', (node) => {
	// do something here with the detected node
});
```
Author : Olivier Bossel <olivier.bossel@gmail.com>




## Attributes

Here's the list of available attribute to set on the element.

### settings.rootNode

The root node used to detect newly added nodes within

Type : **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**

Default : **document**


### settings.once

Specify if want to detect the node only once. Mean that if the node is removed from the dom and added again, it will not be detected again.

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **true**