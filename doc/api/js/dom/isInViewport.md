


-----------------------------
## API
-----------------------------

### isInViewport({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } elm, { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } offset) : {Boolean
Check if the passed HTMLElement is in the viewport or not

- Privacy : **Public**

- Return : **{Boolean** : If the element is in the viewport or not

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The element to insert | required | 
offset | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** | An object of top, right, bottom and left offset used to detect the status | required | 


#### Sample
```js
import isInViewport from 'sugarcss/js/dom/isInViewport'
if (isInViewport(myCoolHTMLElement) {
		// i'm in the viewport
}

```


