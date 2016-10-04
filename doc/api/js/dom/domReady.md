


-----------------------------
## API
-----------------------------

### domReady(cb : Function) : Promise
Wait that the dom is ready before resolving the promise
If you need that some css files are loaded before considering the dom as loaded
you can add the attribute 's-domready-dependency' on any css link tag

- Privacy : **Public**

- Return : **Promise** : A promise that will be resolved when the dom is ready

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
cb | **Function** | An optional callback that will be called when the dom is ready | required | 


#### Sample
```language-undefined
import domReady from 'sugarcss/js/dom/domReady'
// using callback
domReady(() => {
		// do something
});
// using promise
domReady().then(() => {
		// do something
});

```


