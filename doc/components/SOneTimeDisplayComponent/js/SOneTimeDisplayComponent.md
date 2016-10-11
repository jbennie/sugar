

-----------------------------
## Properties
-----------------------------

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> } timeout
timeout
How many times to hide the element when dismissed

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } method
method
Set the method to use to store the component display status

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } name
name
Set the name used to save the cookie / localStorage or sessionStorage

-----------------------------
## API
-----------------------------

### SComponent()

- Privacy : **Public**




### constructor({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } elm, { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } settings, { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } name) : { [SOneTimeDisplayComponent](/data/web/sugar/repo/src/components/SOneTimeDisplayComponent/js/SOneTimeDisplayComponent.js) }
constructor
Construct the component
- Privacy : **Public**

- Return : **{ [SOneTimeDisplayComponent](/data/web/sugar/repo/src/components/SOneTimeDisplayComponent/js/SOneTimeDisplayComponent.js) }** : undefined

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The dom element that the component handle | required | 
settings | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** | The settings to use for the component | required | 
name | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** | The name of the component in camelCase | required | 


### enable() : { [SOneTimeDisplayComponent](/data/web/sugar/repo/src/components/SOneTimeDisplayComponent/js/SOneTimeDisplayComponent.js) }
enable
Enable the component
- Privacy : **Public**

- Return : **{ [SOneTimeDisplayComponent](/data/web/sugar/repo/src/components/SOneTimeDisplayComponent/js/SOneTimeDisplayComponent.js) }** : undefined


### updateStatus() : { [SOneTimeDisplayComponent](/data/web/sugar/repo/src/components/SOneTimeDisplayComponent/js/SOneTimeDisplayComponent.js) }
updateStatus
Update the element status
- Privacy : **Public**

- Return : **{ [SOneTimeDisplayComponent](/data/web/sugar/repo/src/components/SOneTimeDisplayComponent/js/SOneTimeDisplayComponent.js) }** : undefined


### disable() : { [SOneTimeDisplayComponent](/data/web/sugar/repo/src/components/SOneTimeDisplayComponent/js/SOneTimeDisplayComponent.js) }
disable
Disable the component
- Privacy : **Public**

- Return : **{ [SOneTimeDisplayComponent](/data/web/sugar/repo/src/components/SOneTimeDisplayComponent/js/SOneTimeDisplayComponent.js) }** : undefined


### reset() : { [SOneTimeDisplayComponent](/data/web/sugar/repo/src/components/SOneTimeDisplayComponent/js/SOneTimeDisplayComponent.js) }
reset
Reset the storage
- Privacy : **Public**

- Return : **{ [SOneTimeDisplayComponent](/data/web/sugar/repo/src/components/SOneTimeDisplayComponent/js/SOneTimeDisplayComponent.js) }** : undefined


### isDismissed() : { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }
isDismissed
Return if the component has been dismissed or not
- Privacy : **Public**

- Return : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }** : The dismiss status


### getDismissedTimestamp() : { Integer }
getDismissedTimestamp
Return the timestamp when the element has been dismissed
- Privacy : **Public**

- Return : **{ Integer }** : The timestampe when the element has been dismissed


### dismiss() : { [SOneTimeDisplayComponent](/data/web/sugar/repo/src/components/SOneTimeDisplayComponent/js/SOneTimeDisplayComponent.js) }
dismiss
Dismiss the displayed element
- Privacy : **Public**

- Return : **{ [SOneTimeDisplayComponent](/data/web/sugar/repo/src/components/SOneTimeDisplayComponent/js/SOneTimeDisplayComponent.js) }** : undefined



