


-----------------------------
## API
-----------------------------

### attributesObservable(target : HTMLElement, settings : MutationObserverInit) : Observable
Observe attributes on an HTMLElement and get mutations through the observable subscription

- Privacy : **Public**

- Return : **Observable** : The mutation observable

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
target | **HTMLElement** | The element to observe | required | 
settings | **MutationObserverInit** | The mutation observer settings | required | 


#### Sample
```language-undefined
import attributesObservable from 'sugarcss/js/dom/attributesObservable'
attributesObservable(myCoolHTMLElement).subscribe((mutation) => {
		// do something with the mutation
});

```


