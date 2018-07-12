# SGoogleSearch

This class let you make with ease search requests to the google custom search service
with useful features like:
- Simple pagination system
- Promise support


### Example
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
See : **See more** : [https://developers.google.com/custom-search/](https://developers.google.com/custom-search/)

Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com)


## Constructor


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
apiKey  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The google api key to reach the services  |  required  |
cx  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The google custom search context  |  required  |




## Settings

Here's the list of available setting(s).

### num

How many results by page wanted
Can be between 1 and 10

Type : **{ Integer }**

Default : **10**


### page

The page to request

Type : **{ Integer }**

Default : **1**



## Methods


### search

Launch a search


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
keywords  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The keywords to search  |  required  |
settings  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  The settings object  |  required  |

Return **{ [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) }** A promise of results


### next

Load the next page

Return **{ [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) }** The promise of next page results