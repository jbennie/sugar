# SGradientSvgFilter
This SVG filter class apply either a linear or a radial gradient of your choice
on an HTMLElement.
This is useful cause the gradient will only be applied on part of the elements that is really visible and will respect the opacity
of each parts


- Extends **{SSvgFilter}**
- Author **Olivier Bossel <olivier.bossel@gmail.com>**

#### Sample
```language-undefined
const filter = new SGradientSvgFilter();
filter.linear(['red','blue','green']);
filter.applyTo(myCoolHTMLElement);

```



-----------------------------
## API
-----------------------------

### linear(colors : Array, settings : Object)
Linear gradient
- Privacy : **Public**



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
colors | **Array** | An array of colors for your gradient | required | 
settings | **Object** | The settings of your gradient | required | 


### radial(colors : Array, settings : Object)
Linear gradient
- Privacy : **Public**



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
colors | **Array** | An array of colors for your gradient | required | 
settings | **Object** | The settings of your gradient | required | 


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



