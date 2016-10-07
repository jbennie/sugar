# SMotionblurSvgFilter <span class="s-smaller-rel">extends { [SSvgFilter](/data/web/sugar/repo/src/js/filters/SSvgFilter.js) }</span>
This class represent a motion blur svg filter that will blur your
element depending on his movements, direction and speed

-----------------------------
## Constructor
-----------------------------



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
amount | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> }** | The motion blur amount | required | 

- Extends **{ [SSvgFilter](/data/web/sugar/repo/src/js/filters/SSvgFilter.js) }**
- Author **Olivier Bossel <olivier.bossel@gmail.com>**

#### Sample
```js
const filter = new SMotionblurSvgFilter();
filter.applyTo(myCoolHTMLElement);
// now when your element will move, it will be blured accordingly

```



-----------------------------
## API
-----------------------------

### applyTo({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } elm)
Apply the filter to element
- Privacy : **Public**



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The element on which to apply the filter | required | 


### unapplyFrom({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } elm)
Remove the filter from element
- Privacy : **Public**



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The element to unapply the filter from | required | 


### destroy()
Destroy the filter
- Privacy : **Public**





