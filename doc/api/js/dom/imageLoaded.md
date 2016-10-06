


-----------------------------
## API
-----------------------------

### imageLoaded({ HTMLImageElement } img, { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> } cb = null) : { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise" target="_blank" title="Promise">Promise</a> }
Wait until the passed image is fully loaded

- Privacy : **Public**

- Return : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise" target="_blank" title="Promise">Promise</a> }** : The promise that will be resolved

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
img | **{ HTMLImageElement }** | The image to check the loading state | required | 
cb | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }** | An optional callback to call | optional | null


#### Sample
```js
import imageLoaded from 'sugarcss/js/dom/imageLoaded'
imageLoaded(myCoolHTMLImageElement).then((img) => {
		// do something when the image is loaded
});

```


