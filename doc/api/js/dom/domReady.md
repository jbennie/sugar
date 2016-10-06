


-----------------------------
## API
-----------------------------

### domReady({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> } cb) : { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise" target="_blank" title="Promise">Promise</a> }
Wait that the dom is ready before resolving the promise
If you need that some css files are loaded before considering the dom as loaded
you can add the attribute 's-domready-dependency' on any css link tag

- Privacy : **Public**

- Return : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise" target="_blank" title="Promise">Promise</a> }** : A promise that will be resolved when the dom is ready

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
cb | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }** | An optional callback that will be called when the dom is ready | required | 


#### Sample
```js
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


