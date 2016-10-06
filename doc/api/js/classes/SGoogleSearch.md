# SGoogleSearch
This class let you make with ease search requests to the google custom search service
with useful features like:
- Simple pagination system
- Promise support

-----------------------------
## Constructor
-----------------------------



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
apiKey | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** | The google api key to reach the services | required | 
cx | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** | The google custom search context | required | 

- Author **Olivier Bossel<olivier.bossel@gmail.com>**

#### Sample
```js
// create a google search instance
const googleSearch = new SGoogleSearch('myApiKey', 'myCustomSearchContextKey');

// make a search...
googleSearch.search('hello world').then((response) => {
		// do something with the google response...
});

// get the nexts results
googleSearch.next().then((response) => {
		// do something with the new response...
});

```

-----------------------------
## Settings
-----------------------------

### { Integer } num = 10
How many results by page wanted
Can be between 1 and 10

### { Integer } page = 1
The page to request


-----------------------------
## API
-----------------------------

### search({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } keywords, { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } settings) : { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise" target="_blank" title="Promise">Promise</a> }
Launch a search
- Privacy : **Public**

- Return : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise" target="_blank" title="Promise">Promise</a> }** : A promise of results

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
keywords | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** | The keywords to search | required | 
settings | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** | The settings object | required | 


### next() : { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise" target="_blank" title="Promise">Promise</a> }
Load the next page
- Privacy : **Public**

- Return : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise" target="_blank" title="Promise">Promise</a> }** : The promise of next page results



