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
apiKey | **String** | The google api key to reach the services | required | 
cx | **String** | The google custom search context | required | 

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

### Integer num = 10
How many results by page wanted
Can be between 1 and 10

### Integer page = 1
The page to request


-----------------------------
## API
-----------------------------

### search(String keywords, Object settings) : Promise
Launch a search
- Privacy : **Public**

- Return : **Promise** : A promise of results

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
keywords | **String** | The keywords to search | required | 
settings | **Object** | The settings object | required | 


### next() : Promise
Load the next page
- Privacy : **Public**

- Return : **Promise** : The promise of next page results



