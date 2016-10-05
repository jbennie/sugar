# SLocalStorageFonts
This class allows to easily store and load custom fonts from the localStorage

-----------------------------
## Constructor
-----------------------------



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
settings | **Object** | The settings | required | 

- Author **Olivier Bossel<olivier.bossel@gmail.com>**

#### Sample
```language-undefined
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

### version : String = 1.0
Store the version of the fonts to load.
Used for cache busting

### json_path : String = /fonts/fonts.json
Set the json file to load

### debug : Boolean = false
Set if want the debug messages in the console



