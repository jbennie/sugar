# Features

> Stored in ```coffeekraken-sugar/js/features/...```

The goal of the features are to ad some features around certain element types like inputs, etc...
They don't expose any API, classes or functions. They're just files that add some behaviors to certain elements.

- **imagesLazySrcAttribute** : Add support for the attribute `lazy-src` on images
	- Images will be loaded when they enter the viewport
- **imagesLoadedAttribute** : Add a "loaded" attribute on images when loaded
- **inputAdditionalAttributes** : Add and maintain to input, select, radio, etc... attributes "dirty", "empty" and "has-value"
- **inputAdditionalEvents** : Dispatch some additional events from input, textarea, etc...:
	- **escape** : from ```textarea``` and ```input```
	- **enter** : from ```textarea``` and ```input```
- **linksScrollHrefAttribute** : Allows to use links href attribute like so:
	- **scroll:#my-target-id** : On click, will scroll to #my-target-id
- **videoLazySrcAttribute** : Add support for the attribute `lazy-src` on videos
	- Videos will be loaded when they enter the viewport

## Usage

Simply require the features you want into your codebase and that's it

```js
import 'coffeekraken-sugar/js/features/imagesLazySrcAttribute'
import 'coffeekraken-sugar/js/features/imagesLoadedAttribute'
import 'coffeekraken-sugar/js/features/inputAdditionalAttributes'
import 'coffeekraken-sugar/js/features/inputAdditionalEvents'
import 'coffeekraken-sugar/js/features/linksScrollHrefAttribute'
import 'coffeekraken-sugar/js/features/videosLazySrcAttribute'
```
