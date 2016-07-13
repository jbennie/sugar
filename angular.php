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
<section id="home-cta">
	
	<nav>
		<div class="layout__container">
			<div class="row">
				<div class="gr-12">
					<ul class="tabs tabs--justified">
						<li class="tabs__tab">
							<a href="#home-special-offers" s-activate="" s-activate-group="home-ctas" data-s-element-id="se1qqt2b127532156" class="null">
								<i class="icon-circle-star text-medium"></i>
								<br>
								Special Offers
							</a>
						</li>
						<li class="tabs__tab">
							<a href="#home-online-enrolment" s-activate="" s-activate-group="home-ctas" data-s-element-id="se1qqt2b1325303346" class="null">
								<i class="icon-briefcase text-medium"></i>
								<br>
								Online Enrolment
							</a>
						</li>
						<li class="tabs__tab">
							<a href="#home-free-quote" s-activate="" s-activate-group="home-ctas" data-s-element-id="se1qqt2b13326000360" class="active">
								<i class="icon-quote text-medium"></i>
								<br>
								Free Quote
							</a>
						</li>
						<li class="tabs__tab">
							<a href="#home-brochures" s-activate="" s-activate-group="home-ctas" data-s-element-id="se1qqt2b13432208350">
								<i class="icon-book text-medium"></i>
								<br>
								Brochures
							</a>
						</li>
						<li class="tabs__tab">
							<a href="#home-online-test" s-activate="" s-activate-group="home-ctas" data-s-element-id="se1qqt2b13422499394">
								<i class="icon-edit text-medium"></i>
								<br>
								Online Test
							</a>
						</li>
						<li class="tabs__tab">
							<a href="#home-university-pathway" s-activate="" s-activate-group="home-ctas" data-s-element-id="se1qqt2b13523441362">
								<i class="icon-uni text-medium"></i>
								<br>
								University Pathway
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>

	<section id="home-special-offers" class="section section--medium">
		<div class="layout__container">
			<div class="row">
				<div class="gr-12">
					<div class="bkg-white clearfix">
						<div class="gr-8 no-gutter">
							
							<!-- offers -->
															<article id="offer-0" s-activate-target="" class="">
									<figure>
										<img src="//schools.s.alpadia-lan.net/assets/data/category/placeholders/movie03.jpg">
									</figure>
									<div class="p-t-medium p-b-medium p-s-medium vertical-rhythme" id="offer-content-0">
										<h3 class="h5">
											Come with a friend and pay no enrolment fees!
										</h3>
										<div class="read-more" data-more="Read more" data-less="Read less">
											<p class="p">
												Get ready for an exciting summer holiday and take advantage of a 10% discount on our summer camps based in Switzerland. Valid only for summer camp all-inclusive activity programmes booked until 30th April 2016.
											</p>
											<p class="p">
												Discount not applicable to transfers or Premium+ activities.
											</p>
										</div>
									</div>
								</article>
															<article id="offer-1" s-activate-target="" class="">
									<figure>
										<img src="//schools.s.alpadia-lan.net/assets/data/category/placeholders/landscape02.jpg">
									</figure>
									<div class="p-t-medium p-b-medium p-s-medium vertical-rhythme" id="offer-content-1">
										<h3 class="h5">
											Come with a friend and pay no enrolment fees!
										</h3>
										<div class="read-more" data-more="Read more" data-less="Read less">
											<p class="p">
												Get ready for an exciting summer holiday and take advantage of a 10% discount on our summer camps based in Switzerland. Valid only for summer camp all-inclusive activity programmes booked until 30th April 2016.
											</p>
											<p class="p">
												Discount not applicable to transfers or Premium+ activities.
											</p>
										</div>
									</div>
								</article>
															<article id="offer-2" s-activate-target="" class="">
									<figure>
										<img src="//schools.s.alpadia-lan.net/assets/data/category/placeholders/businessman02.jpg">
									</figure>
									<div class="p-t-medium p-b-medium p-s-medium vertical-rhythme" id="offer-content-2">
										<h3 class="h5">
											Come with a friend and pay no enrolment fees!
										</h3>
										<div class="read-more" data-more="Read more" data-less="Read less">
											<p class="p">
												Get ready for an exciting summer holiday and take advantage of a 10% discount on our summer camps based in Switzerland. Valid only for summer camp all-inclusive activity programmes booked until 30th April 2016.
											</p>
											<p class="p">
												Discount not applicable to transfers or Premium+ activities.
											</p>
										</div>
									</div>
								</article>
															<article id="offer-3" s-activate-target="" class="">
									<figure>
										<img src="//schools.s.alpadia-lan.net/assets/data/category/placeholders/woman02.jpg">
									</figure>
									<div class="p-t-medium p-b-medium p-s-medium vertical-rhythme" id="offer-content-3">
										<h3 class="h5">
											Come with a friend and pay no enrolment fees!
										</h3>
										<div class="read-more" data-more="Read more" data-less="Read less">
											<p class="p">
												Get ready for an exciting summer holiday and take advantage of a 10% discount on our summer camps based in Switzerland. Valid only for summer camp all-inclusive activity programmes booked until 30th April 2016.
											</p>
											<p class="p">
												Discount not applicable to transfers or Premium+ activities.
											</p>
										</div>
									</div>
								</article>
															<article id="offer-4" s-activate-target="" class="active">
									<figure>
										<img src="//schools.s.alpadia-lan.net/assets/data/category/placeholders/woman05.jpg">
									</figure>
									<div class="p-t-medium p-b-medium p-s-medium vertical-rhythme" id="offer-content-4">
										<h3 class="h5">
											Come with a friend and pay no enrolment fees!
										</h3>
										<div class="read-more" data-more="Read more" data-less="Read less">
											<p class="p">
												Get ready for an exciting summer holiday and take advantage of a 10% discount on our summer camps based in Switzerland. Valid only for summer camp all-inclusive activity programmes booked until 30th April 2016.
											</p>
											<p class="p">
												Discount not applicable to transfers or Premium+ activities.
											</p>
										</div>
									</div>
								</article>
															<article id="offer-5" s-activate-target="">
									<figure>
										<img src="//schools.s.alpadia-lan.net/assets/data/category/placeholders/woman01.jpg">
									</figure>
									<div class="p-t-medium p-b-medium p-s-medium vertical-rhythme" id="offer-content-5">
										<h3 class="h5">
											Come with a friend and pay no enrolment fees!
										</h3>
										<div class="read-more" data-more="Read more" data-less="Read less">
											<p class="p">
												Get ready for an exciting summer holiday and take advantage of a 10% discount on our summer camps based in Switzerland. Valid only for summer camp all-inclusive activity programmes booked until 30th April 2016.
											</p>
											<p class="p">
												Discount not applicable to transfers or Premium+ activities.
											</p>
										</div>
									</div>
								</article>
							
						</div>
						<div class="gr-4 no-gutter">
							
							<!-- offers-list -->
							<ul class="tabs tabs--vertical tabs--arrow-left">
																	<li class="tabs__tab">
										<a href="#offer-0" s-activate="" s-activate-group="home-ctas-offers" data-s-element-id="se1qqt2b13724011688" class="null">Hello</a>
									</li>
																	<li class="tabs__tab">
										<a href="#offer-1" s-activate="" s-activate-group="home-ctas-offers" data-s-element-id="se1qqt2b1383875994" class="null">Hello</a>
									</li>
																	<li class="tabs__tab">
										<a href="#offer-2" s-activate="" s-activate-group="home-ctas-offers" data-s-element-id="se1qqt2b14429375610" class="null">Hello</a>
									</li>
																	<li class="tabs__tab">
										<a href="#offer-3" s-activate="" s-activate-group="home-ctas-offers" data-s-element-id="se1qqt2b146106393881" class="null">Hello</a>
									</li>
																	<li class="tabs__tab">
										<a href="#offer-4" s-activate="" s-activate-group="home-ctas-offers" data-s-element-id="se1qqt2b147102894336" class="null active">Hello</a>
									</li>
																	<li class="tabs__tab">
										<a href="#offer-5" s-activate="" s-activate-group="home-ctas-offers" data-s-element-id="se1qqt2b14863127285">Hello</a>
									</li>
															</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

</section>

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
