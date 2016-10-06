


-----------------------------
## API
-----------------------------

### attributesObservable({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } target, { MutationObserverInit } settings) : { <a class="link" href="https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observable.md" target="_blank" title="Observable">Observable</a> }
Observe attributes on an HTMLElement and get mutations through the observable subscription

- Privacy : **Public**

- Return : **{ <a class="link" href="https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observable.md" target="_blank" title="Observable">Observable</a> }** : The mutation observable

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
target | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The element to observe | required | 
settings | **{ MutationObserverInit }** | The mutation observer settings | required | 


#### Sample
```js
import attributesObservable from 'sugarcss/js/dom/attributesObservable'
attributesObservable(myCoolHTMLElement).subscribe((mutation) => {
		// do something with the mutation
});

```


