<!doctype html>
<html lang="en">
<head>

	<?php
	$colors = ['default','primary','secondary','warning','error','success','info'];
	$sizes = ['small','default','medium','big'];
	function rand_color() {
		global $colors;
		return $colors[rand(0,count($colors)-1)];
	}
	?>

	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

	<link href="assets/css/loaders.css" rel="stylesheet" type="text/css" />
	<link href="assets/css/components.css" rel="stylesheet" type="text/css" />
	<link href="assets/css/style.css" s-domready-dependency rel="stylesheet" type="text/css" />
	<link href="assets/css/grid.css" rel="stylesheet" type="text/css" />

	<script src="assets/js/angular-demo.js"></script>

	<title>Sugar - Demo</title>

</head>
<body>

	<label id="author-toggle" for="author">
		<i class="fa-user"></i>
	</label>

	<label id="menu-toggle" for="menu">
		<i class="fa-bars"></i>
	</label>

	<label id="author-toggle" for="author">
	<i class="fa-user"></i>
</label>

<label id="menu-toggle" for="menu">
	<i class="fa-bars"></i>
</label>

<div s-drawer="menu" active-class="coco" class="typeset vertical-rhythme">

	<h3>
		<strong>SUGAR</strong><span class="c-orange--dark">{.SCSS}</span>
	</h3>
	<ul class="list--menu">
		<li class="list__item">
			<a href="#vertical-rhythme">Vertical Rhythme</a>
		</li>
		<li class="list__item">
			<a href="#mixins">Mixins</a>
		</li>
		<li class="list__item">
			<a href="#bubbles">Fu%&!* bubbles</a>
		</li>
		<li class="list__item">
			<a href="#loaders">Loaders</a>
		</li>
		<li class="list__item">
			<a href="#motion-blur">Motion blur</a>
		</li>
		<li class="list__item">
			<a href="#gooey">Gooey</a>
		</li>
		<li class="list__item">
			<a href="#packages">Cool packages</a>
		</li>
		<li class="list__item">
			<a href="http://sugarcss.io" target="_blank">Many more!</a>
		</li>
	</ul>

</div>

<div s-drawer="author" class="typeset vertical-rhythme">

	<div class="avatar m-b-small" style="width:100px; height:100px"></div>

	<h2 class="h2">
		Olivier Bossel
	</h2>
	<p>
		Passionate interactive web designer from Switzerland. <br />
		To be always in research of new design trends, technologies and user interaction is my primary motivation. <br />
		The web community is moving so fast and being up to date is a daily job. THIS is where my passion for this domain come from. I'm an eternal dissatisfied and this is what makes me push each project at the limit and never give up on challenges.
	</p>

	<a class="btn btn--block btn--orange--dark" href="http://olivierbossel.com" target="_blank">
		<i class="fa-home"></i> &nbsp;&nbsp;Website
	</a>
	<a class="btn btn--block btn--orange--dark" href="https://ch.linkedin.com/in/olivierbossel" target="_blank">
		<i class="fa-linkedin"></i> &nbsp;&nbsp;Find me on linkedIn
	</a>
	<a class="btn btn--block btn--orange--dark" href="https://github.com/olivierbossel/sugar" target="_blank">
		<i class="fa-github"></i> &nbsp;&nbsp;Find me on github
	</a>
	<a class="btn btn--block btn--orange--dark" href="http://twitter.com/olivierbossel" target="_blank">
		<i class="fa-twitter"></i> &nbsp;&nbsp;Follow me on twitter
	</a>
	<a class="btn btn--block btn--orange--dark" href="http://sugarcss.io/#help" target="_blank">
		<i class="fa-beer"></i> &nbsp;&nbsp;Offer me a beer!
	</a>


</div>


	<div s-drawer-content>

		<section id="top-bar">
	
	<div class="container">
		
		<div class="row">
			<div class="gr-12">
				<ul class="list list--top-bar pull-left">
					<li class="list__item">
						<a href="./">
							<span class="bold">SUGAR</span>{.SCSS}
						</a>
					</li>
					<li class="list__item">
						<div class="dropdown">
							<div class="dropdown__label">
								Core
							</div>
							<ul class="dropdown__menu">
								<li class="dropdown__item">
									<a href="./core.html#syntax">
										Syntax
									</a>
								</li>
								<li class="dropdown__item">
									<a href="./core.html#colors">
										Colors management
									</a>
								</li>
								<li class="dropdown__item">
									<a href="./core.html#transitions-filters">
										Transitions & filters
									</a>
								</li>
								<li class="dropdown__item">
									<a href="./core.html#classes">
										Classes
									</a>
								</li>
								<li class="dropdown__item">
									<a href="./core.html#mixins">
										Mixins
									</a>
								</li>
								<li class="dropdown__item">
									<a href="./core.html#functions">
										Functions
									</a>
								</li>
								
							</ul>
						</div>
					</li>

					<li class="list__item">
						<div class="dropdown dropdown--medium">
							<div class="dropdown__label">
								Typo
							</div>
							<ul class="dropdown__menu">
								<li class="dropdown__item">
									<a href="./typo.html#base">
										Base
									</a>
								</li>
								<li class="dropdown__item">
									<a href="./typo.html#fonts">
										Fonts
									</a>
								</li>
								<li class="dropdown__item">
									<a href="./typo.html#vertical-rhythme">
										Vertical rhythme
									</a>
								</li>
							</ul>
						</div>
					</li>
					
					<li class="list__item">
						<div class="dropdown dropdown--big">
							<div class="dropdown__label">
								Layout
							</div>
							<ul class="dropdown__menu">
								<li class="dropdown__item">
									<a href="./layout.html#sizes">
										Sizes
									</a>
								</li>
								<li class="dropdown__item">
									<a href="./layout.html#spaces">
										Spaces
									</a>
								</li>
								<li class="dropdown__item">
									<a href="./layout.html#look-and-feel">
										Look and feel
									</a>
								</li>
							</ul>
						</div>
					</li>

								

					<li class="list__item">
						<div class="dropdown dropdown--bigger">
							<div class="dropdown__label">
								Components
							</div>
							<ul class="dropdown__menu">
								<li class="dropdown__item">
									<a href="#">
										Drawer
									</a>
								</li>
								<li class="dropdown__item">
									<a href="#">
										Dropdown
									</a>
								</li>
								<li class="dropdown__item">
									<a href="./typeset.html">
										Typeset
									</a>
								</li>
								<li class="dropdown__item">
									<a href="#">
										Bootstrap
									</a>
								</li>
								<li class="dropdown__item">
									<a href="#">
										Foundation
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li class="list__item">
						<div class="dropdown dropdown--bigger">
							<div class="dropdown__label">
								Effects
							</div>
							<ul class="dropdown__menu">
								<li class="dropdown__item">
									<a href="#">
										Motion blur
									</a>
								</li>
								<li class="dropdown__item">
									<a href="#">
										Gooey
									</a>
								</li>
							</ul>
						</div>
					</li>
				</ul>
				<ul class="list list--top-bar pull-right">
					<li class="list__item">
						<a href="http://sugarcss.io" title="Sugar - Full documentation" target="_blank">
							Full documentation
						</a>
					</li>
				</ul>
			</div>

		</div>

	</div>

</section>

		<section id="header">

			<div class="container">

				<div class="row">

					<div class="gr-12">
						<h1 class="h1"><strong>Sugar</strong><span class="c-orange">{.scss}</span></h1>
						<h2 class="h2">Writing SCSS has <span class="c-orange">never tasted better!</span></h2>
					</div>

				</div>

			</div>

		</section>


<section class="section">

	<div class="container">
		
		<div class="row typeset vertical-rhythme show-rhythme">

			<div class="gr-12">
				<div class="loader-1"></div>
				<p class="lead">
					Sugar is build around it's core features which are described bellow. It allows you to manage efficiently your colors, fonts, transitions, filters as well as giving you access to a lot of very useful mixins and function that will dramatically speed up your development process.
				</p>
				<p>
					This page is just a quick overview of the sugar features. This is not a replacement for the official documentation that you can find <a href="http://sugarcss.io" target="_blank">here</a>
				</p>
			</div>
		
		</div>

	</div>

</section>

<section id="syntax" class="section bkg-grey--light">

	<div class="container">
		
		<div class="row typeset vertical-rhythme" data-toggle-rhythme-class>

			<div class="gr-12">
				
				<h3>Syntax</h3>

				<p>
					Sugar use a special but very powerful syntax for mixins and functions. Don't be afraid, it's something that you use every single day already!
				</p>

<pre><code class="language-scss">// write this
h1 {
@include s-font(22px helvetica uppercase underline);
}
// instead of this
h1 {
font-size: 22px;
font-family: helvetica;
text-transform: uppercase;
text-decoration: underline;
}
</code></pre>

			<p>
				<a class="btn" href="http://sugarcss.io/documentation#syntax">
					Full syntax documentation
				</a>
			</p>

			</div>

		</div>

	</div>

</section>

<section id="colors" class="section">

	<div class="container">
		
		<div class="row typeset vertical-rhythme" data-toggle-rhythme-class>

			<div class="gr-12">
				
				<h3>Colors management</h3>

				<p>
					In a large project, it became hard to manage your colors efficiently. Sugar gives you a nice structure and functions to handle that.
				</p>

<pre><code class="language-scss">// setup your colors
@include s-setup((
colors : (
primary : (
	color : #ff0000,
	modifiers : (
		light : -lighten 20%,
		dark : -darken 10%
	)
),
// etc...
)
));

// then use your colors
h1 {
color : s-color(primary);

// specify a modifier to use
color : s-color(primary, light);

// custom modifier
color : s-color(primary, -saturate 10% -opacity .2);
}
</code></pre>

				<p>
					Sugar comes with some default colors names that you can use if you want. It follow the bootstrap and foundation conventions in order to make easier the integration with these frameworks and to reduce confusion between projects. If you use these names, you will always know between projects which color name you want.
				</p>

<pre><code class="language-scss">// default colors names to use
colors : (
default		: ..., // the global default color
primary		: ..., // the primary color that describe your identity
secondary	: ..., // a secondary color that describe your identity if needed
text 		: default, // the color used for your texts
link 		: primary, // the color used for your links
success 		: ..., // a color for the success items
warning 		: ..., // a color for the warning items
error 		: ..., // a color for the error items
info 		: ..., // a color for the info items
// some others colors you need
)
</code></pre>

				<p>
					<a class="btn" href="http://sugarcss.io/documentation#syntax">
						Full colors documentation
					</a>
				</p>

			</div>

		</div>

	</div>

</section>

<section id="transitions-filters" class="section bkg-grey--light">

	<div class="container">
		
		<div class="row typeset vertical-rhythme" data-toggle-rhythme-class>

			<div class="gr-12">
				
				<h3>Transition & filters</h3>
				
				<p>
					As for the colors, you will have some nice utilitises to manage your transitions and filters
				</p>

<pre><code class="language-scss">// setup your transitions and filters
@include s-setup((
transitions : (
duration : .2s,
transitions : (
	fast : all .2s ease-in-out,
	slow : all 1s ease-out
)
),
filters : (
shadow : -box-shadow rgba(0,0,0,.3) 0 0 10px,
// etc...
)
));

// then use your filters and colors
.my-cool-element {
@include s-filter(shadow);

// custom filter
@include s-filter(-contrast 20%);

// transition
@include s-transition(fast);

// custom transition
@include s-transition(all); // will take default duration and easing in settings
}
</code></pre>
				
				<p>
					<a class="btn" href="http://sugarcss.io/documentation#transitions">
						Full transitions documentation
					</a>
					<a class="btn" href="http://sugarcss.io/documentation#filters">
						Full filters documentation
					</a>
				</p>

			</div>

		</div>

	</div>

</section>

<section id="classes" class="section">

	<div class="container">
		
		<div class="row typeset vertical-rhythme" data-toggle-rhythme-class>

			<div class="gr-12">
				
				<h3>Classes</h3>
				
				<p>
					Sugar gives you access to some useful classes that depend on your settings like ratios, spaces, transitions, etc... All these classes are totally optional. If you don't want them it's ok. As Sugar has been built, it's just a little sugar in your coffee if you'd like...
				</p>

<pre><code class="language-scss">// generate the classes where you want
@include s-classes();
</code></pre>

				<div class="row">
					
					<div class="gr-4">
						
						<h4>Margins</h4>

<pre><code class="language-scss">// margin classes
.m-t-{space}
.m-r-{space}
.m-b-{space}
.m-l-{space}
.m-s-{space}
</code></pre>

					</div>

					<div class="gr-4">

						<h4>Paddings</h4>

<pre><code class="language-scss">// padding classes
.p-t-{space}
.p-r-{space}
.p-b-{space}
.p-l-{space}
.p-s-{space}
</code></pre>

					</div>

					<div class="gr-4">
						
						<h4>Texts</h4>

<pre><code class="language-scss">// texts classes
.text-uppercase
.text-lowercase
.text-justify
.text-left
// etc...
</code></pre>

					</div>

				</div>

				<p>
					And many more classes for transitions, animations, filters, etc...
				</p>

				<p>
					<a class="btn" href="http://sugarcss.io/documentation#classes">
						Full classes documentation
					</a>
				</p>

			</div>

		</div>

	</div>

</section>

<section class="section bkg-grey--light" id="mixins">

	<div class="container typeset vertical-rhythme">

		<div class="row">

			<div class="gr-12">

				<h3>Mixins</h3>

				<p class="lead">
					Sugar comes with a lot of very cool mixins that allows to <strong>write less and do more</strong>. All of that based on the css properties you already knows and love.
				</p>

			</div>

			<div class="gr-6">

				<h4>s-font</h4>

				<p>
					Sugar gives you a nice mixin to set your font-family, text-transform, and all the font corresponding css properties.
				</p>

<pre><code class="language-scss">h1 {
@include s-font(22px helvetica uppercase underline);
}
p {
@include s-font(14px capitalize nowrap keep-all);
}
</code></pre>

			</div>

			<div class="gr-6">

				<h4>s-media</h4>

				<p>
					The s-media is a helpful mixin to handle media queries
				</p>

<pre><code class="language-scss">.my-cool-element {
background: red;

@include s-media(chrome retina, webkit mobile) {
background: yellow;
}
}
</code></pre>

			</div>

			<div class="gr-12">

				<h4>And many more</h4>

				<p>
					Sugar gives you access to <strong>more than 25 mixins</strong> to make your development process easier and a lot more fun!
				</p>

				<p>
					<a href="http://sugarcss.io/documentation#mixins-s-animation" target="_blank" class="btn">Full mixins documentation</a>
				</p>

			</div>

		</div>

	</div>

</section>

<section class="section" id="functions">

	<div class="container typeset vertical-rhythme">

		<div class="row">

			<div class="gr-12">

				<h3>Functions</h3>

				<p class="lead">
					Sugar comes with a lot of very cool functions that allows to <strong>write less and do more</strong>. It comes with <a href="https://github.com/davidkpiano/sassdash" target="_blank">SassDash</a>, <a href="http://www.modularscale.com/" target="_blank">Modular Scale</a> and a lot of function to convert units, handle colors, etc...
				</p>

			</div>

			<div class="gr-6">

				<h4>s-is</h4>

				<p>
					The s-is function allows you to check a variable type with ease
				</p>

<pre><code class="language-scss">// some possible checks
@if s-is($my-variable, string) { // something }
@if s-is($my-variable, second) { // something }
@if s-is($my-variable, list-boolean) { // something }
@if s-is($my-variable, list-color) { // something }
</code></pre>

			</div>

			<div class="gr-6">

				<h4>s-color</h4>

				<p>
					The s-color function allows you to get and modify colors with ease
				</p>

<pre><code class="language-scss">// some colors
color : s-color(primary);
color : s-color(primary, -darken 10%);
color : s-color(text, -opacity .4);
color : s-color(#ff0000, -desaturate 20%);
</code></pre>

			</div>

			<div class="gr-12">

				<h4>And many more</h4>

				<p>
					Sugar gives you access to <strong>a lot of functions</strong>, including sassdash, modularscale, etc... to make your development process easier and a lot more fun!
				</p>

				<p>
					<a href="http://sugarcss.io/documentation#functions" target="_blank" class="btn">Full functions documentation</a>
				</p>

			</div>

		</div>

	</div>

</section>

<section class="section bkg-grey--light" id="more">

	<div class="container typeset vertical-rhythme">

		<div class="row">

			<div class="gr-12 text-center">

				<h3>Many more to discover on the official website</h3>

				<iframe width="560" height="315" src="https://www.youtube.com/embed/xJjCnWm5cvE?start=83&end=95" frameborder="0" allowfullscreen></iframe>

				<br />
				<br />
				<br />
				

				<a href="http://sugarcss.io" target="_blank" class="btn hey">Check out sugarcss.io</a>

			</div>

		</div>

	</div>

</section>

		<a id="coco" href="javascript:void(0)" class="btn">
			Coco
		</a>

	</div>

	<a href="#" class="top">
		<i class="fa-arrow-up"></i>
	</a>

	<script>
	sugar.SActivateComponent.setup('nested', {
		history : false
	});

	sugar.sLocalStorageFonts.init({
		json_path : './assets/fonts/fonts.json#2.2',
		debug : true
	});
	// if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
	// 	sugar.motionblur.enabled = false;
	// 	sugar.gooey.enabled = false;
	// }
	</script>

	<script src="http://cdnjs.cloudflare.com/ajax/libs/prism/0.0.1/prism.min.js"></script>

	<script type="text/javascript">

		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-70303780-1']);
		_gaq.push(['_trackPageview']);

		(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();

	</script>

</body>
</html>
