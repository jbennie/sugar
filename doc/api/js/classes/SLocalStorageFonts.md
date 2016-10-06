# SLocalStorageFonts
This class allows to easily store and load custom fonts from the localStorage

-----------------------------
## Constructor
-----------------------------



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
settings | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** | The settings | required | 

- Author **Olivier Bossel<olivier.bossel@gmail.com>**

#### Sample
```js
new SLocalStorageFonts({
 	json_path : '/fonts/fonts.json#v1'
});

// the fonts.json file looks like this
{
		"fonts" : [{
  		"font-family" : "Open Sans",
    	"font-weight" : 300,
     	"src" : "url(data:application/font-woff;base64,d09GRgA..."
     }]
}

```

-----------------------------
## Settings
-----------------------------

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } version = 1.0
Store the version of the fonts to load.
Used for cache busting

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } json_path = /fonts/fonts.json
Set the json file to load

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> } debug = false
Set if want the debug messages in the console



