


-----------------------------
## API
-----------------------------

### styleObject2String({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } styleObj) : (String)
Transform a style object to inline string separated by ;

- Privacy : **Public**

- Return : **(String)** : The string style representation

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
styleObj | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** | An object of style to apply | required | 


#### Sample
```js
import styleObject2String from 'sugarcss/js/dom/styleObject2String'
const styleString = styleObject2String({
		paddingLeft : '20px',
		display : 'block'
});
// output => padding-left:20px; display:block;

```


