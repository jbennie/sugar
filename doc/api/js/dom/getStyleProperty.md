


-----------------------------
## API
-----------------------------

### getStyleProperty(elm : HTMLElement, property : String) : Mixed
Get a style property on the passed element through the computed style.
This function try to store the actual style to not trigger more that 1 redraw
each js execution loop.

- Privacy : **Public**

- Return : **Mixed** : The style value

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to get style from | required | 
property | **String** | The css property to get | required | 


#### Sample
```language-undefined
import getStyleProperty from 'sugarcss/js/dom/getStyleProperty'
const opacity = getStyleProperty(myCoolHTMLElement, 'opacity');

```


