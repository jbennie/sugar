# SSvgFilter
This class allows you to create with ease some complexe SVG filters and to apply it on any HTMLElement that you want
by extending this class like so

-----------------------------
## Constructor
-----------------------------



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
The SVG filter string representation | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** | undefined | required | 

- Author **Olivier Bossel <olivier.bossel@gmail.com>**

#### Sample
```js
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

### applyTo({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } elm)
Apply the filter to an element
- Privacy : **Public**



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The element on which to apply the filter | required | 


### unapplyFrom({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } elm)
Unapply from
- Privacy : **Public**



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The element from which to remove the filter | required | 


### destroy()
Destroy the filter
- Privacy : **Public**





