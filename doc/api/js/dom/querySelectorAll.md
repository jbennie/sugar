
-----------------------------
## Settings
-----------------------------

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> } visible = false
If we want only visible elements

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> } inViewport = false
If we want only elements that are in the viewport

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } rootNode = document.body
The root node to start the query from


-----------------------------
## API
-----------------------------

### querySelectorAll({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } selector, { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } settings) : { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array" target="_blank" title="Array">Array</a> }<HTMLElement>
Enhanced proxy of the Element.querySelectorAll function that let you specify
if you want elements that are visible, or even that are in the viewport

- Privacy : **Public**

- Return : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array" target="_blank" title="Array">Array</a> }<HTMLElement>** : The founded elements

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
selector | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** | The css selector to search | required | 
settings | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** |  | required | 


#### Sample
```js
// simple query
const elms = querySelectorAll('.a-cool-css-selector');

// get elements that are in the viewport
const elms = querySelectorAll('.a-cool-css-selector', {
		inViewport : true
});

```


