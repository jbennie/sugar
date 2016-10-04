# SMotionblurSvgFilter
This class represent a motion blur svg filter that will blur your
element depending on his movements, direction and speed

-----------------------------
## Constructor
-----------------------------



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
amount | **Number** | The motion blur amount | required | 

- Extends **{SSvgFilter}**
- Author **Olivier Bossel <olivier.bossel@gmail.com>**

#### Sample
```language-undefined
const filter = new SMotionblurSvgFilter();
filter.applyTo(myCoolHTMLElement);
// now when your element will move, it will be blured accordingly

```



-----------------------------
## API
-----------------------------

### applyTo(elm : HTMLElement)
Apply the filter to element
- Privacy : **Public**



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element on which to apply the filter | required | 


### unapplyFrom(elm : HTMLElement)
Remove the filter from element
- Privacy : **Public**



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to unapply the filter from | required | 


### destroy()
Destroy the filter
- Privacy : **Public**





