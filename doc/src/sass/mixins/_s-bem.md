# BEM mixins

Some useful mixins to work with BEM methodology


## Mixins


### s-Bem

BEM block selector


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$name  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The block name  |  required  |
$extend  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) , List<String> }**  |  The list of item to extends  |  optional  |  false

#### Example
```scss
	@include s-Bem('card') {
 	background: white;
}
```
Author : Olivier Bossel <olivier.bossel@gmail.com>


### s-bEm

BEM element selector


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$name  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The block name  |  required  |
$extend  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) , List<String> }**  |  The list of item to extends  |  optional  |  false

#### Example
```scss
	@include s-Bem(card) {
	background:white;

	@include s-bEm(title) {
		font-size:20px;
	}
}
```
Author : Olivier Bossel <olivier.bossel@gmail.com>


### s-beM

BEM modifier selector


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$name  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) }**  |  The block name  |  required  |
$extend  |  **{ [String](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#sass-script-strings) , List<String> }**  |  The list of item to extends  |  optional  |  false
$standelone  |  **{ Boolean }**  |  If true, will automatically extends the base element  |  optional  |  s-setting('BEM.standelone')

#### Example
```scss
	@include s-Bem(card) {
	background:white;

	@include s-beM(blue) {
		background: blue;
	}
}
```
Author : Olivier Bossel <olivier.bossel@gmail.com>