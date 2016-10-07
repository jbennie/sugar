
-----------------------------
## Settings
-----------------------------

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> } width = elm.offsetWith
The width of the generated trianglify picture

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> } height = elm.offsetHeight
The height of the generated trianglify picture

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> } cellSize = 75
The size of each cell that will compose the trianglify picture

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> } variance = 0.75
Decimal value between 0 and 1 (inclusive), defaults to 0.75. Specify the amount of randomness used when generating triangles.

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> } seed = null
Seeds the random number generator to create repeatable patterns. When set to null, the random number will be seeded with random values from the environment. An example usage would be passing in blog post titles as the seed to generate unique trianglify patterns for every post on a blog that won't change when the page reloads.

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array" target="_blank" title="Array">Array</a> }{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } xColors = random
String or array of CSS-formatted colors, default is 'random'.
Specify the color gradient used on the x axis.

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array" target="_blank" title="Array">Array</a> }{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } yColors = match_x
String or array of CSS-formatted colors, default is 'match_x'.
When set to 'match_x' the same gradient will be used on both axes. Otherwise, accepts the same options as xColors.

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } colorSpace = lab
 Set the color space used for generating gradients. Supported values are rgb, hsv, hsl, hsi, lab and hcl.

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> } colorFunction = null
Specify a custom function for coloring triangles, defaults to null. Accepts a function to override the standard gradient coloring that takes the x,y coordinates of a triangle's centroid as arguments and returns a CSS-formatted color string representing the color that triangle should have.

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> } strokeWidth = 1.51
Specify the width of the stroke on triangle shapes in the pattern. The default value is the ideal value for eliminating antialiasing artifacts when rendering patterns to a canvas.

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array" target="_blank" title="Array">Array</a> } points = null
Array of points ([x, y]) to trianglulate. When not specified an array randomised points is generated filling the space.


-----------------------------
## API
-----------------------------

### enable()
Enable the component
- Privacy : **Public**




### disable()
Disable the component
- Privacy : **Public**





