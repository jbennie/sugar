


-----------------------------
## API
-----------------------------

### s-component({String} $default = null) : {String}
Return the name of the top level component setted with the [../mixins/_s-component.scss] mixin

- Privacy : **Public**

- Return : **{String}** : The component name

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
$default | **{String}** | The name to return if no top component name exist | optional | null


#### Sample
```scss
s-component('hello') // => 'hello'
\@include s-component('my-component') {
		s-component('hello') // => 'my-component'
		\@include s-component('another-component') {
			s-component('hello') // => 'my-component'
		}
}

```


