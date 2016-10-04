


-----------------------------
## API
-----------------------------

### style(elm : HTMLElement, styleObj : Object) : (Object)
Set or remove a css style property on an HTMLElement

- Privacy : **Public**

- Return : **(Object)** : The element applied style

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to process | required | 
styleObj | **Object** | An object of style to apply | required | 


#### Sample
```language-undefined
import style from 'sugarcss/js/dom/style'
style(myCoolHTMLElement, {
		paddingLeft : 20,
		display : null
});

```


