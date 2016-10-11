


-----------------------------
## API
-----------------------------

### s-component-selector({String} $element = null, {String} $modifier = null, {String} $state = null) : {String}
Return the css class selector for the current component setted by the [core/mixins/_s-component.scss] mixin
and build with the passed arguments.
This function generate the class selector depending of the settings.selector.method setting

- Privacy : **Public**

- Return : **{String}** : The generated class selector

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
$element | **{String}** | The element name of the class selector | optional | null
$modifier | **{String}** | The modifier name of the class selector | optional | null
$state | **{String}** | The state name of the class selector | optional | null


#### Sample
```scss
\@incluse s-component('my-component') {
		// if settings.selector.method === 'BEM'
		s-component-selector('item') // => '.my-component__item'
		s-component-selector(null, 'red') // => '.my-component--red'
		s-component-selector('coco',null,'active') // => '.my-component__coco--active'
		// if setting.selector.method === 'SMACCS'
		s-component-selector('item') // => '.my-component-item'
		s-component-selector(null, 'red') // => '.my-component-red'
		s-component-selector('coco',null,'active') // => '.my-component-coco.is-active'
}

```


