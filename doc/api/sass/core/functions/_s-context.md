


-----------------------------
## API
-----------------------------

### s-context({String} $default = null) : {String}
Return the name of the context setted with the [../mixins/_s-context.scss] mixin

- Privacy : **Public**

- Return : **{String}** : The context name

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
$default | **{String}** | The name to return if no context exist | optional | null


#### Sample
```scss
// register a context
\@include s-context-setup('my-context', (
		// override some settings here...
));

s-context('hello') // => 'hello'
\@include s-context('my-context') {
		s-context('hello') // => 'my-context'
}

```


