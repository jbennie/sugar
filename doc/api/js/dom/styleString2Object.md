


-----------------------------
## API
-----------------------------

### styleString2Object({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } style) : (Object)
Transform a style string to an object representation

- Privacy : **Public**

- Return : **(Object)** : The string object representation

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
style | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** | The style string | required | 


#### Sample
```js
import styleString2Object from 'sugarcss/js/dom/styleString2Object'
const styleString = styleString2Object('padding-left:20px; display:block;');
// output => {
//		paddingLeft : '20px',
// 		display : 'block'
// }

```


