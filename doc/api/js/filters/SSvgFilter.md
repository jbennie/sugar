# SSvgFilter
This class allows you to create with ease some complexe SVG filters and to apply it on any HTMLElement that you want
by extending this class like so

-----------------------------
## Constructor
-----------------------------



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
The SVG filter string representation | **String** | undefined | required | 

- Author **Olivier Bossel <olivier.bossel@gmail.com>**

#### Sample
```language-undefined
class MyBlurFilter extends SSvgFilter {

		constructor(amount = 8) {
			super(`
				<feGaussianBlur in="SourceGraphic" stdDeviation="${amount}" result="blur" />
			`);
		}
}

// using your filter
const myFilter = new MyBlurFilter(10);
myFilter.applyTo(myCoolHTMLElement);

```



-----------------------------
## API
-----------------------------

### applyTo(elm : HTMLElement)
Apply the filter to an element
- Privacy : **Public**



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element on which to apply the filter | required | 


### unapplyFrom(elm : HTMLElement)
Unapply from
- Privacy : **Public**



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element from which to remove the filter | required | 


### destroy()
Destroy the filter
- Privacy : **Public**





