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

<div data-s-drawer="menu" active-class="coco" class="typeset vertical-rhythme">

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

<div data-s-drawer="author" class="typeset vertical-rhythme">
	
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

	<div data-s-drawer-content>

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

<div data-toggle-baseline-class>

	<section id="vertical-rhythme" class="section bkg-grey--light">
	
		<div class="container">
			
			<div class="row typeset vertical-rhythme" data-toggle-rhythme-class>

				<div class="gr-12">
					<a data-toggle-rhythme class="pull-right active">
						<i class="fa-check"></i> Toggle rhythme
					</a>
					<a data-toggle-baseline class="pull-right">
						<i class="fa-bars"></i> Toggle baseline
					</a>

					<h3>Vertical rhythme</h3>

					<p class="lead">
						We all know as front-end developers that the vertical rhythme concept is nice, but sometimes it became hard to understand and implement. Sugar is here for you guys!
					</p>

				</div>

				<div class="gr-6">

					<h4>Title</h4>

					<figure>
						<img src="http://sugarcss.io/assets/img/highlight-bkg.jpg" />
					</figure>

					<p>
						In hac habitasse platea dictumst. Sed venenatis non massa ut vehicula. Vivamus gravida a nunc nec facilisis. Mauris tristique tellus dolor, vel interdum tortor congue laoreet. Mauris lobortis, tellus sit amet dictum fermentum, felis erat iaculis ex, sed luctus augue odio ut orci. Duis commodo.
					</p>

				</div>

				<div class="gr-6">

					<h4>Title</h4>

					<figure>
						<img src="http://sugarcss.io/assets/img/highlight-bkg.jpg" />
					</figure>

					<p>
						In hac habitasse platea dictumst. Sed venenatis non massa ut vehicula. Vivamus gravida a nunc nec facilisis. Mauris tristique tellus dolor, vel interdum tortor congue laoreet. Mauris lobortis, tellus sit amet dictum fermentum, felis erat iaculis ex, sed luctus augue odio ut orci. Duis commodo.
					</p>

				</div>

				<div class="gr-4">

					<h4>Title</h4>

					<figure>
						<img src="http://sugarcss.io/assets/img/highlight-bkg.jpg" />
					</figure>

					<p>
						In hac habitasse platea dictumst. Sed venenatis non massa ut vehicula. Vivamus gravida a nunc nec facilisis. Mauris tristique tellus dolor, vel interdum tortor congue laoreet. Mauris lobortis, tellus sit amet dictum fermentum, felis erat iaculis ex, sed luctus augue odio ut orci. Duis commodo.
					</p>

				</div>

				<div class="gr-4">

					<h4>Title</h4>

					<figure>
						<img src="http://sugarcss.io/assets/img/highlight-bkg.jpg" />
					</figure>

					<p>
						In hac habitasse platea dictumst. Sed venenatis non massa ut vehicula. Vivamus gravida a nunc nec facilisis. Mauris tristique tellus dolor, vel interdum tortor congue laoreet. Mauris lobortis, tellus sit amet dictum fermentum, felis erat iaculis ex, sed luctus augue odio ut orci. Duis commodo.
					</p>

				</div>

				<div class="gr-4">

					<h4>Title</h4>

					<figure>
						<img src="http://sugarcss.io/assets/img/highlight-bkg.jpg" />
					</figure>

					<p>
						In hac habitasse platea dictumst. Sed venenatis non massa ut vehicula. Vivamus gravida a nunc nec facilisis. Mauris tristique tellus dolor, vel interdum tortor congue laoreet. Mauris lobortis, tellus sit amet dictum fermentum, felis erat iaculis ex, sed luctus augue odio ut orci. Duis commodo.
					</p>

				</div>

			</div>

		</div>

	</section>

</div>

<section class="section" id="more">

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

	</div>

	<div style="width:100px;height:3000px;background:red;">

	</div>

	<a id="coco" href="#" class="btn">
		Coco
	</a>

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
