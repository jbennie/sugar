


-----------------------------
## API
-----------------------------

### style({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } elm, { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } styleObj) : (Object)
Set or remove a css style property on an HTMLElement

- Privacy : **Public**

- Return : **(Object)** : The element applied style

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The element to process | required | 
styleObj | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** | An object of style to apply | required | 


#### Sample
```js
import style from 'sugarcss/js/dom/style'
style(myCoolHTMLElement, {
		paddingLeft : 20,
		display : null
});

```


