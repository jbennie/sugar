


-----------------------------
## API
-----------------------------

### styleObject2String(styleObj : Object) : (String)
Transform a style object to inline string separated by ;

- Privacy : **Public**

- Return : **(String)** : The string style representation

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
styleObj | **Object** | An object of style to apply | required | 


#### Sample
```language-undefined
import styleObject2String from 'sugarcss/js/dom/styleObject2String'
const styleString = styleObject2String({
		paddingLeft : '20px',
		display : 'block'
});
// output => padding-left:20px; display:block;

```


