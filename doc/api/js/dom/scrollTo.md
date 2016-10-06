


-----------------------------
## API
-----------------------------

### scrollTo(HTMLElement target, Number duration, Function easing, Number offset, String align, Function onFinish)

- Privacy : **Public**



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
target | **HTMLElement** | The element to scroll to | required | 
duration | **Number** | The animation duration | required | 
easing | **Function** | An easing Function | required | 
offset | **Number** | The destination offset | required | 
align | **String** | The destination align (top, center, bottom) | required | 
onFinish | **Function** | A callback to call when the animation if finished | required | 


#### Sample
```js
import scrollTop from 'sugarcss/js/dom/scrollTo'
import easeInOutQuad from 'sugarcss/js/easings/easeInOutQuad'
scrollTo(myCoolHTMLElement, 2000, easeInOutQuad);

```


