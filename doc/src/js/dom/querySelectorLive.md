## Settings

Here's the list of available settings.

### rootNode

The root node to start the monitoring from

Type : **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**

Default : **document.body**


### onNodeRemoved

An array of callbacks to call when the detected element is removed from the dom

Type : **{ Array<Function> }**

Default : **[]**



## Methods

Observe the dom to get all the elements that matches the passed selector at any point in time



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
selector  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The css selector to monitor in the dom  |  required  |
settings  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  The settings to pass to the selector  |  optional  |  null

Return **{ QuerySelectorLiveObservable }** The augmented observable instance to subscribe to

#### Example
```js
	const observer = querySelectorLive('.some-cool-css-selector').subscribe((elm) => {
		// do something with the element found in the dom
});

// the QuerySelectorLiveObservable add some nice operators
// that you can use with ease like so:
const observer = querySelectorLive('.some-cool-css-selector').once().inViewport().subscribe((elm) => {
		// do someting with the element found in the dom and that is now in the viewport
});
```
Author : Olivier Bossel <olivier.bossel@gmail.com>