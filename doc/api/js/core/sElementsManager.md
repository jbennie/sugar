


-----------------------------
## API
-----------------------------

### registerComponent({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } elm, { [SComponent](/data/web/sugar/repo/src/js/core/SComponent.js) } component) : { void }
registerComponent
Register a component on a given element
- Privacy : **Public**

- Return : **{ void }** : undefined

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The element in which to register a component | required | 
component | **{ [SComponent](/data/web/sugar/repo/src/js/core/SComponent.js) }** | The component to register | required | 


### unregisterComponent({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } elm, { [SComponent](/data/web/sugar/repo/src/js/core/SComponent.js) } component) : { void }
unregisterComponent
Unregister a component on a given element
- Privacy : **Public**

- Return : **{ void }** : undefined

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The element in which to register a component | required | 
component | **{ [SComponent](/data/web/sugar/repo/src/js/core/SComponent.js) }** | The component to register | required | 


### registerElement({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } elm, { [SElement](/data/web/sugar/repo/src/js/core/SElement.js) } element) : { void }
registerElement
Register an SElement instance on a given element
- Privacy : **Public**

- Return : **{ void }** : undefined

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The element in which to register a component | required | 
element | **{ [SElement](/data/web/sugar/repo/src/js/core/SElement.js) }** | The SElement instance to register | required | 


### unregisterElement({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } elm, { [SElement](/data/web/sugar/repo/src/js/core/SElement.js) } element) : { void }
unregisterElement
Unregister an SElement instance on a given element
- Privacy : **Public**

- Return : **{ void }** : undefined

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The element in which to register a component | required | 
element | **{ [SElement](/data/web/sugar/repo/src/js/core/SElement.js) }** | The SElement instance to register | required | 


### getComponents({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } elm) : { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }
getComponents
Return all the components inited on the given element
- Privacy : **Public**

- Return : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** : The object of all components inited on this element

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The element to process | required | 


### getOriginalElement({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } elm) : { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }
getOriginalElement
Return the original element before it has been processed by any components etc...
- Privacy : **Public**

- Return : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** : The original element

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The element to process | required | 


### getElementsCount({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } elm) : { Integer }
getElementsCount
Return the number of SElements instances that are inited on the given html element
- Privacy : **Public**

- Return : **{ Integer }** : The count of SElement instances that are living on the particular node

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The element to process | required | 



