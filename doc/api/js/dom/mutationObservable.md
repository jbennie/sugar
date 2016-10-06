


-----------------------------
## API
-----------------------------

### mutationObservable(HTMLElement target, MutationObserverInit settings) : Observable
Observe mutations on an HTMLElement and get them through the observable subscription

- Privacy : **Public**

- Return : **Observable** : The mutation observable

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
target | **HTMLElement** | The element to observe | required | 
settings | **MutationObserverInit** | The mutation observer settings | required | 


#### Sample
```js
import mutationObservable from 'sugarcss/js/dom/mutationObservable'
mutationObservable(myCoolHTMLElement).subscribe((mutation) => {
		// do something with the mutation
});

```


