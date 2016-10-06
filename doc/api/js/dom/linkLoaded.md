


-----------------------------
## API
-----------------------------

### linkLoaded(HTMLLinkElement link, Function cb = null) : Promise
Wait until the passed HTMLLinkElement is fully loaded

- Privacy : **Public**

- Return : **Promise** : The promise that will be resolved

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
link | **HTMLLinkElement** | The link tag to check the loading state | required | 
cb | **Function** | An optional callback to call | optional | null


#### Sample
```js
import linkLoaded from 'sugarcss/js/dom/linkLoaded'
linkLoaded(myCoolHTMLLinlElement).then((link) => {
		// do something when the link is loaded
});

```


