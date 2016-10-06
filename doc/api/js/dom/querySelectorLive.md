
-----------------------------
## Settings
-----------------------------

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } rootNode = document.body
The root node to start the monitoring from

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array" target="_blank" title="Array">Array</a> }<Function> onNodeRemoved = []
An array of callbacks to call when the detected element is removed from the dom


-----------------------------
## API
-----------------------------

### undefined({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } selector, { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } settings = null) : { QuerySelectorLiveObservable }
Observe the dom to get all the elements that matches the passed selector at any point in time

- Privacy : **Public**

- Return : **{ QuerySelectorLiveObservable }** : The augmented observable instance to subscribe to

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
selector | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** | The css selector to monitor in the dom | required | 
settings | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** | The settings to pass to the selector | optional | null


#### Sample
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


