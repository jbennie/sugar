# SBinder
const binder &#x3D; new SBinder();

// keep in sync the myObject2.title with the myObject1.title property
binder.bindObjectPath2ObjectPath(myObject1, &#x27;title&#x27;, myObject2, &#x27;title&#x27;);

// update and HTMLElement attribute when the myObject1.title is updated
binder.bindObjectPath2ElementAttribute(myObject1, &#x27;title&#x27;, myHTMLElement, &#x27;title&#x27;);

// and more...
### Constructor

#### Parameters

## Settings
Here&#x27;s the available settings

Name | Type | Description | Default
------------ | ------------ | ------------ | ------------
## API


