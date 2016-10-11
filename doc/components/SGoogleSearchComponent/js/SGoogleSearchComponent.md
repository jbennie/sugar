

-----------------------------
## Properties
-----------------------------

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } apiKey
apiKey
The api key used to reach the google services

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } cx
cx
The context key used to reach the google custom search instance

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } keywords
keywords
The keywords to use for the search

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } data
data
The data used in the template

-----------------------------
## API
-----------------------------

### static setup()
Setup
- Privacy : **Public**
- **Static**



### constructor()
Constructor
- Privacy : **Public**




### search({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } keywords, { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } settings) : { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise" target="_blank" title="Promise">Promise</a> }
search
Process the search
- Privacy : **Public**

- Return : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise" target="_blank" title="Promise">Promise</a> }** : A promise object

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
keywords | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** | The keywords to search | required | 
settings | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** | The query settings | required | 


### next() : { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise" target="_blank" title="Promise">Promise</a> }
next
Load the next results
- Privacy : **Public**

- Return : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise" target="_blank" title="Promise">Promise</a> }** : A promise object


### enable() : { [SGoogleSearchComponent](/data/web/sugar/repo/src/components/SGoogleSearchComponent/js/SGoogleSearchComponent.js) }
enable
Enable the component
- Privacy : **Public**

- Return : **{ [SGoogleSearchComponent](/data/web/sugar/repo/src/components/SGoogleSearchComponent/js/SGoogleSearchComponent.js) }** : undefined


### disable() : { [SGoogleSearchComponent](/data/web/sugar/repo/src/components/SGoogleSearchComponent/js/SGoogleSearchComponent.js) }
disable
Disable the component
- Privacy : **Public**

- Return : **{ [SGoogleSearchComponent](/data/web/sugar/repo/src/components/SGoogleSearchComponent/js/SGoogleSearchComponent.js) }** : undefined



