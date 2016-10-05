


-----------------------------
## API
-----------------------------

### scrollTo(target : HTMLElement, duration : Number, easing : Function, offset : Number, align : String, onFinish : Function)

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
```language-undefined
import scrollTop from 'sugarcss/js/dom/scrollTo'
import easeInOutQuad from 'sugarcss/js/easings/easeInOutQuad'
scrollTo(myCoolHTMLElement, 2000, easeInOutQuad);

```


