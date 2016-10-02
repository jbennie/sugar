# SGoogleSearch
// create a google search instance
const googleSearch &#x3D; new SGoogleSearch(&#x27;myApiKey&#x27;, &#x27;myCustomSearchContextKey&#x27;);

// make a search...
googleSearch.search(&#x27;hello world&#x27;).then((response) &#x3D;&gt; {
// do something with the google response...
});

// get the nexts results
googleSearch.next().then((response) &#x3D;&gt; {
// do something with the new response...
});
### Constructor

#### Parameters

Name | Type | Description | Optional | Default
------------ | ------------ | ------------ | ------------ | ------------
apiKey | **String** | The | required | 
cx | **String** | The | required | 

## Settings
Here&#x27;s the available settings

Name | Type | Description | Default
------------ | ------------ | ------------ | ------------
num | **num** | How many results by page wanted
Can be between 1 and 10 | 10
page | **page** | The page to request | 1
## API


