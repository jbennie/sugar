## Properties


### slide

Set the active class by index

Type : **{ Integer }**


### direction

Set the direction of the slideshow playback

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**


### playback

Status of the playback

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**


### timeout

slideshow is played

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**


### pauseOnHover

Set the slideshow to pause mode when mouse is hover

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**


### nextOnClick

Go to next slide when click on the slideshow

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**


### autoplay

Set if the slideshow start in play mode

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**


### keyboardEnabled

Set if the keyboard navigation is enabled

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**


### touchEnabled

Set if the touch navigation is enabled

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**


### onInit

Callback when the slideshow is inited

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**


### beforeChange

Callback before the slideshow pass to another slide

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**


### onChange

Callback when the slider change from a slide to another

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**


### afterChange

Callback when the slideshow has changed slide

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**


### onNext

Callback when the slideshow pass to the next slide

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**


### onPrevious

Callback when the slideshow pass to the previous slide

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**


### onPause

Callback when the slideshow pass in pause

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**


### onPlay

Callback when the slideshow pass in play mode

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**


### onStop

Callback when the slideshow stops

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**


### initSlide

Callback used to init a new slide

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**


### this._slides

Store all the slides elements

Type : **{ [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) }**


### this._slidesIniter

Store all the slides initer functions

Type : **{ [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) }**


### this._activeSlide

Store the active slide

Type : **{ DOMElement }**


### this._timer

Store the timer instance

Type : **{ STimer }**


### this._slidesObserver

Store the observer of the slides

Type : **{ Observer }**


### this._refs

Store the elements references like navigation, etc...

Type : **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**


## Methods


### defaultProps

Default props


### loop

Set if the slideshow is infinite


### physicalProps

Physical props


### componentWillMount

Component will mount


### componentMount

Mount component


### componentUnmount

Component unmount


### enable

When the element is enabled


### componentWillReceiveProp

Component will receive prop


### disable

When the element is disabled


### destroy

When the element is destroyed


### next

Go to next slide


### previous

Go to previous slide


### goTo

Go to a specific slide


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
slideIndex  |  **{ Integer }**  |  The slide index to go to  |  required  |

Return **{ SSlideshowComponent }** The instance itself


### onNewSlide

Register a function to init a new slide


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
initer  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  The initer function  |  required  |


### play

Set the slideshow to play mode


### pause

Set the slideshow to pause mode


### stop

Stop the slideshow


### getBeforeActiveSlides

Return all the slides that are before the active one

Return **{ [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) }** The array of slides that are before the active one


### getAfterActiveSlides

Return all the slides that are before the active one

Return **{ [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) }** The array of slides that are before the active one


### getActiveSlideIndex

Return the index of the active slide

Return **{ Integer }** The active slide index


### getActiveSlide

Return the active slide element

Return **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }** The active slide


### getFirstSlide

Return the first slide element

Return **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }** The first slide


### getLastSlide

Return the last slide element

Return **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }** The last slide


### getNextSlideIndex

Return the next slide index

Return **{ Integer }** The next slide index


### getNextSlide

Return the previous slide element

Return **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }** The previous slide


### getPreviousSlideIndex

Return the previous slide index

Return **{ Integer }** The previous slide index


### getPreviousSlide

Return the previous slide element

Return **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }** The previous slide


### isPlay

Return if the slideshow is played or not

Return **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }** The played status


### isPause

Return if the slideshow is paused or not

Return **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }** The paused status


### isStop

isStop
Return if the slideshow is stoped or not

Return **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }** The stoped status


### isLoop

Return if the slideshow loop status is true

Return **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }** The loop status


### isFirst

Return if the first slide is active

Return **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }** true if the first slide is active


### isLast

Return if the first slide is active

Return **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }** true if the first slide is active