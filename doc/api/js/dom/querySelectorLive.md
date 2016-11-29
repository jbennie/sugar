


## Settings

Here's the list of available settings that you can pass to the constructor

### rootNode

The root node to start the monitoring from

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**
Default : **document.body**

### onNodeRemoved

An array of callbacks to call when the detected element is removed from the dom

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array" target="_blank" title="Array">Array</a> }<Function>**
Default : **[]**

## Properties




## Methods

Observe the dom to get all the elements that matches the passed selector at any point in time



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
selector  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The css selector to monitor in the dom  |  required  |
settings  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }**  |  The settings to pass to the selector  |  optional  |  null

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