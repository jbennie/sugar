


-----------------------------
## API
-----------------------------

### registerComponent(elm : HTMLElement, component : SComponent) : void
registerComponent
Register a component on a given element
- Privacy : **Public**

- Return : **void** : undefined

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element in which to register a component | required | 
component | **SComponent** | The component to register | required | 


### unregisterComponent(elm : HTMLElement, component : SComponent) : void
unregisterComponent
Unregister a component on a given element
- Privacy : **Public**

- Return : **void** : undefined

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element in which to register a component | required | 
component | **SComponent** | The component to register | required | 


### registerElement(elm : HTMLElement, element : SElement) : void
registerElement
Register an SElement instance on a given element
- Privacy : **Public**

- Return : **void** : undefined

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element in which to register a component | required | 
element | **SElement** | The SElement instance to register | required | 


### unregisterElement(elm : HTMLElement, element : SElement) : void
unregisterElement
Unregister an SElement instance on a given element
- Privacy : **Public**

- Return : **void** : undefined

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element in which to register a component | required | 
element | **SElement** | The SElement instance to register | required | 


### getComponents(elm : HTMLElement) : Object
getComponents
Return all the components inited on the given element
- Privacy : **Public**

- Return : **Object** : The object of all components inited on this element

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to process | required | 


### getOriginalElement(elm : HTMLElement) : HTMLElement
getOriginalElement
Return the original element before it has been processed by any components etc...
- Privacy : **Public**

- Return : **HTMLElement** : The original element

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to process | required | 


### getElementsCount(elm : HTMLElement) : Integer
getElementsCount
Return the number of SElements instances that are inited on the given html element
- Privacy : **Public**

- Return : **Integer** : The count of SElement instances that are living on the particular node

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to process | required | 



