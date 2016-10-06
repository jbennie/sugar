
-----------------------------
## Settings
-----------------------------

### HTMLElement rootNode = document.body
The root node to start the monitoring from

### Array<Function> onNodeRemoved = []
An array of callbacks to call when the detected element is removed from the dom


-----------------------------
## API
-----------------------------

### undefined(String selector, Object settings = null) : QuerySelectorLiveObservable
Observe the dom to get all the elements that matches the passed selector at any point in time

- Privacy : **Public**

- Return : **QuerySelectorLiveObservable** : The augmented observable instance to subscribe to

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
selector | **String** | The css selector to monitor in the dom | required | 
settings | **Object** | The settings to pass to the selector | optional | null


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


