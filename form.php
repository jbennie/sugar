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


<section class="section bkg-grey--light" id="typeset">

	<div class="container typeset vertical-rhythme">

		<div class="row">

			<div class="gr-12">

				<h3>Forms</h3>

				<p class="lead">
					The sugar button component allows you to access a full stack a buttons that depends on your settings.
				</p>

<pre><code class="language-scss">// print out the buttons css
@include s-button();
</code></pre>

				<p>
					<a class="btn" href="javascript:void(0)">
						Full button documentation
					</a>
				</p>

			</div>

		</div>

	</div>

</section>

<style>
[s-activate-target] {
	display:none;
}
[s-activate-target].active {
	display:block;
}
</style>
<section class="section typeset vertical-rhythme showe-rhythme" id="typography" data-toggle-baseline-class data-toggle-rhythme-class>

	<div class="container">

		<div class="row formset">

			<div class="gr-12">

				<ul class="nav nav--tabs no-typeset no-vertical-rhythme m-b-bigger">
					<li s-activate="#input-text">Input text</li>
					<li s-activate="#input-password">Input password</li>
					<li s-activate="#datepicker">Datepicker</li>
					<li s-activate="#range">Range</li>
					<li s-activate="#select">
						Advanced select
					</li>
					<li s-activate="#radiobox">Radiobox</li>
				</ul>

				<form>

					<div id="input-text" s-activate-target>
						<?php foreach($colors as $color): ?>
						<?php foreach($sizes as $size): ?>
							<div class="row size-<?= $size ?>">
								<div class="gr-12">
									<label class="label">
										<span>Input label</span>
										<input class="input input--<?= $color ?>" type="text" placeholder="gr-12" />
									</label>
								</div>
								<div class="gr-12">
									<label class="label label--inline">
										<span>Input label inline</span>
										<input class="input input--<?= $color ?>" type="text" placeholder="gr-12" />
									</label>
								</div>
								<div class="gr-12">
									<label class="label label--inside">
										<span>Input label inside</span>
										<input class="input input--<?= $color ?>" type="text" placeholder="gr-12" />
									</label>
								</div>
								<div class="gr-12">
									<hr />
								</div>
							</div>
						<?php endforeach; ?>
						<?php endforeach; ?>
					</div>

					<div id="input-password" s-activate-target>
						<?php foreach($colors as $color): ?>
						<?php foreach($sizes as $size): ?>
							<p>
								Proin lobortis neque eget turpis condimentum, vulputate volutpat arcu cursus. Nunc scelerisque enim in lacus condimentum, et vehicula felis molestie. Nam efficitur tellus arcu, vitae ultricies neque tristique quis. Maecenas non felis non magna tristique lobortis vel fermentum dolor. Suspendisse potenti. Praesent porttitor mauris quis nibh placerat, sit amet congue urna tincidunt. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi in quam felis. Nunc porttitor, odio in pellentesque pulvinar, est tortor efficitur libero, id scelerisque urna sem semper eros. Suspendisse fringilla sem ut odio euismod malesuada. Pellentesque congue neque at elit malesuada aliquam. Mauris semper lobortis risus, at rhoncus mauris euismod vitae. Sed sit amet odio in dolor lobortis bibendum quis eget mauris. Nulla elementum mollis massa, vel mollis nulla interdum quis. Suspendisse augue lectus, volutpat ac nulla in, eleifend ullamcorper sapien.
							</p>
						<?php endforeach; ?>
						<?php endforeach; ?>
					</div>

					<div id="datepicker" s-activate-target>
						<?php $i = 0; ?>
						<?php foreach($colors as $color): ?>
						<?php foreach($sizes as $size): ?>

							<div class="row size-<?= $size ?>">
								<div class="gr-12">
									<label class="label">
										<span>Date</span>
										<div class="form-group color--<?= $color ?> size--<?= $size ?>">
											<div class="input-addon">from</div>
											<input id="s-datepicker-from-<?= $i ?>" class="input input--<?= $color ?>" type="text" s-datepicker -to="#s-datepicker-to-<?=$i?>" placeholder="gr-9" />
											<div class="input-addon">to</div>
											<input id="s-datepicker-to-<?=$i?>" class="input input--<?= $color ?>" type="text" s-datepicker -from="#s-datepicker-from-<?=$i?>" -number-of-months="3" placeholder="gr-9" />
										</div>
									</label>
								</div>
							</div>
							<?php $i++; ?>
						<?php endforeach; ?>
						<?php endforeach; ?>
					</div>

					<div id="range" s-activate-target>
						<?php foreach($colors as $color): ?>
						<?php foreach($sizes as $size): ?>
							<div class="row size-<?= $size ?>">
								<div class="gr-12">
									<label class="label">
										<span>Range label</span>
										<input class="input input--<?= $color ?>" type="text" s-range s-range-init-when="viewportVisible" -value="<?=rand(0,50)?>,<?=rand(50,100)?>" />
									</label>
								</div>
							</div>
						<?php endforeach; ?>
						<?php endforeach; ?>
					</div>

					<div id="select" s-activate-target>
						<p>
							Proin lobortis neque eget turpis condimentum, vulputate volutpat arcu cursus. Nunc scelerisque enim in lacus condimentum, et vehicula felis molestie. Nam efficitur tellus arcu, vitae ultricies neque tristique quis. Maecenas non felis non magna tristique lobortis vel fermentum dolor. Suspendisse potenti. Praesent porttitor mauris quis nibh placerat, sit amet congue urna tincidunt. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi in quam felis. Nunc porttitor, odio in pellentesque pulvinar, est tortor efficitur libero, id scelerisque urna sem semper eros. Suspendisse fringilla sem ut odio euismod malesuada. Pellentesque congue neque at elit malesuada aliquam. Mauris semper lobortis risus, at rhoncus mauris euismod vitae. Sed sit amet odio in dolor lobortis bibendum quis eget mauris. Nulla elementum mollis massa, vel mollis nulla interdum quis. Suspendisse augue lectus, volutpat ac nulla in, eleifend ullamcorper sapien.
						</p>
						<p>
							Proin lobortis neque eget turpis condimentum, vulputate volutpat arcu cursus. Nunc scelerisque enim in lacus condimentum, et vehicula felis molestie. Nam efficitur tellus arcu, vitae ultricies neque tristique quis. Maecenas non felis non magna tristique lobortis vel fermentum dolor. Suspendisse potenti. Praesent porttitor mauris quis nibh placerat, sit amet congue urna tincidunt. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi in quam felis. Nunc porttitor, odio in pellentesque pulvinar, est tortor efficitur libero, id scelerisque urna sem semper eros. Suspendisse fringilla sem ut odio euismod malesuada. Pellentesque congue neque at elit malesuada aliquam. Mauris semper lobortis risus, at rhoncus mauris euismod vitae. Sed sit amet odio in dolor lobortis bibendum quis eget mauris. Nulla elementum mollis massa, vel mollis nulla interdum quis. Suspendisse augue lectus, volutpat ac nulla in, eleifend ullamcorper sapien.
						</p>
						<p>
							Proin lobortis neque eget turpis condimentum, vulputate volutpat arcu cursus. Nunc scelerisque enim in lacus condimentum, et vehicula felis molestie. Nam efficitur tellus arcu, vitae ultricies neque tristique quis. Maecenas non felis non magna tristique lobortis vel fermentum dolor. Suspendisse potenti. Praesent porttitor mauris quis nibh placerat, sit amet congue urna tincidunt. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi in quam felis. Nunc porttitor, odio in pellentesque pulvinar, est tortor efficitur libero, id scelerisque urna sem semper eros. Suspendisse fringilla sem ut odio euismod malesuada. Pellentesque congue neque at elit malesuada aliquam. Mauris semper lobortis risus, at rhoncus mauris euismod vitae. Sed sit amet odio in dolor lobortis bibendum quis eget mauris. Nulla elementum mollis massa, vel mollis nulla interdum quis. Suspendisse augue lectus, volutpat ac nulla in, eleifend ullamcorper sapien.
						</p>
						<p>
							Proin lobortis neque eget turpis condimentum, vulputate volutpat arcu cursus. Nunc scelerisque enim in lacus condimentum, et vehicula felis molestie. Nam efficitur tellus arcu, vitae ultricies neque tristique quis. Maecenas non felis non magna tristique lobortis vel fermentum dolor. Suspendisse potenti. Praesent porttitor mauris quis nibh placerat, sit amet congue urna tincidunt. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi in quam felis. Nunc porttitor, odio in pellentesque pulvinar, est tortor efficitur libero, id scelerisque urna sem semper eros. Suspendisse fringilla sem ut odio euismod malesuada. Pellentesque congue neque at elit malesuada aliquam. Mauris semper lobortis risus, at rhoncus mauris euismod vitae. Sed sit amet odio in dolor lobortis bibendum quis eget mauris. Nulla elementum mollis massa, vel mollis nulla interdum quis. Suspendisse augue lectus, volutpat ac nulla in, eleifend ullamcorper sapien.
						</p>
						<?php foreach($colors as $color): ?>
						<?php foreach($sizes as $size): ?>
							<div class="row size-<?= $size ?>">
								<div class="gr-6">
									<label class="label">Select Box <?= $color ?>/<?= $size ?>
										<select class="input input--<?= $color ?>" s-select -init-when="viewportVisible">
											<option value="husker" s-select-option-source="#my-cool-option">Husker</option>
											<option value="starbuck">Starbuck</option>
											<option value="hotdog">Hot Dog</option>
											<optgroup label="A cool group">
												<option value="apollo">Apollo</option>
												<option disabled value="disabled">Disabled</option>
											</optgroup>
											<optgroup label="A cool group">
												<option value="apollo">Apollo</option>
												<option disabled value="disabled">Disabled</option>
											</optgroup>
											<option value="yopyop">Yop Yop</option>
											<option value="plop">Plop</option>
											<optgroup label="A cool group">
												<option value="apollo">Apollo</option>
												<option disabled value="disabled">Disabled</option>
											</optgroup>
											<option value="yopyop">Yop Yop</option>
											<option value="plop">Plop</option>
											<optgroup label="A cool group">
												<option value="apollo">Apollo</option>
												<option disabled value="disabled">Disabled</option>
											</optgroup>
											<option value="yopyop">Yop Yop</option>
											<option value="plop">Plop</option>
											<optgroup label="A cool group">
												<option value="apollo">Apollo</option>
												<option disabled value="disabled">Disabled</option>
											</optgroup>
											<option value="yopyop">Yop Yop</option>
											<option value="plop">Plop</option>
											<optgroup label="A cool group">
												<option value="apollo">Apollo</option>
												<option disabled value="disabled">Disabled</option>
											</optgroup>
											<option value="yopyop">Yop Yop</option>
											<option value="plop">Plop</option>
											<optgroup label="A cool group">
												<option value="apollo">Apollo</option>
												<option disabled value="disabled">Disabled</option>
											</optgroup>
											<option value="yopyop">Yop Yop</option>
											<option value="plop">Plop</option>
											<optgroup label="A cool group">
												<option value="apollo">Apollo</option>
												<option disabled value="disabled">Disabled</option>
											</optgroup>
											<option value="yopyop">Yop Yop</option>
											<option value="plop">Plop</option>
										</select>
										<!-- <div class="input-reply input-reply--success">
											This is a success on the field...
										</div> -->
										<!-- <div id="my-cool-option" class="row row-align-middle">
											<div class="gr-adapt">
												<img src="http://graph.facebook.com/622487880/picture?type=large" width="70px" height="70px" />
											</div>
											<div class="gr-grow">
												<strong>My cool option</strong><br />
												<small>Curabitur ullamcorper sapien quis eros consectetur, non ullamcorper.</small>
											</div>
										</div> -->
									</label>
								</div>
								<div class="gr-6">
									<label class="label">Select Box multiple <?= $color ?>/<?= $size ?>
										<select class="input input--<?= $color ?>" s-select -init-when="viewportVisible" placeholder="coco" multiple>
											<option value="husker" s-select-option-source="#my-cool-option-2">Husker</option>
											<option value="starbuck">Starbuck</option>
											<option value="hotdog">Hot Dog</option>
											<optgroup label="A cool group">
												<option value="apollo">Apollo</option>
												<option disabled value="disabled">Disabled</option>
												<option value="husker" s-select-option-source="#my-cool-option-3">Husker</option>
											</optgroup>
											<optgroup label="A cool group">
												<option value="apollo">Apollo</option>
												<option disabled value="disabled">Disabled</option>
											</optgroup>
											<option value="yopyop">Yop Yop</option>
											<option value="plop">Plop</option>
											<optgroup label="A cool group">
												<option value="apollo">Apollo</option>
												<option disabled value="disabled">Disabled</option>
											</optgroup>
											<option value="yopyop">Yop Yop</option>
											<option value="plop">Plop</option>
											<optgroup label="A cool group">
												<option value="apollo">Apollo</option>
												<option disabled value="disabled">Disabled</option>
											</optgroup>
											<option value="yopyop">Yop Yop</option>
											<option value="plop">Plop</option>
											<optgroup label="A cool group">
												<option value="apollo">Apollo</option>
												<option disabled value="disabled">Disabled</option>
											</optgroup>
											<option value="yopyop">Yop Yop</option>
											<option value="plop">Plop</option>
											<optgroup label="A cool group">
												<option value="apollo">Apollo</option>
												<option disabled value="disabled">Disabled</option>
											</optgroup>
											<option value="yopyop">Yop Yop</option>
											<option value="plop">Plop</option>
											<optgroup label="A cool group">
												<option value="apollo">Apollo</option>
												<option disabled value="disabled">Disabled</option>
											</optgroup>
											<option value="yopyop">Yop Yop</option>
											<option value="plop">Plop</option>
											<optgroup label="A cool group">
												<option value="apollo">Apollo</option>
												<option disabled value="disabled">Disabled</option>
											</optgroup>
											<option value="yopyop">Yop Yop</option>
											<option value="plop">Plop</option>
										</select>
										<!-- <div class="input-reply input-reply--success">
											This is a success on the field...
										</div> -->
										<!-- <div id="my-cool-option-2" class="row row-align-middle">
											<div class="gr-adapt">
												<img src="http://graph.facebook.com/622487880/picture?type=large" width="70px" height="70px" />
											</div>
											<div class="gr-grow">
												<strong>My cool option</strong><br />
												<small>Curabitur ullamcorper sapien quis eros consectetur, non ullamcorper.</small>
											</div>
										</div>
										<div id="my-cool-option-3" class="row row-align-middle">
											<div class="gr-adapt">
												<img src="http://graph.facebook.com/622487880/picture?type=large" width="70px" height="70px" />
											</div>
											<div class="gr-grow">
												<strong>My cool option</strong><br />
												<small>Curabitur ullamcorper sapien quis eros consectetur, non ullamcorper ex semper. Cras eu justo tempor ante vehicula pulvinar. Integer rhoncus nec.</small>
											</div>
										</div> -->
									</label>
								</div>
							</div>
						<?php endforeach; ?>
						<?php endforeach; ?>
					</div>

					<div id="radiobox" s-activate-target>
						<?php $i=0; ?>
						<?php foreach($colors as $color): ?>
						<?php foreach($sizes as $size): ?>
							<div class="row size-<?= $size ?>">
								<div class="gr-6">
									<label class="label">
										<span>Radio <?= $color ?>/<?= $size ?></span>
										<br>
										<label class="label label--<?= $size ?>">
											<input checked type="radio" class="input input--<?= $color ?>" s-radiobox name="rad<?=$i?>" value="Red"> Yop
										</label>
										<label class="label label--<?= $size ?>">
											<input type="radio" class="input input--<?= $color ?>" s-radiobox name="rad<?=$i?>" value="Red"> Yap
										</label>
										<label class="label label--<?= $size ?>">
											<input type="radio" class="input input--<?= $color ?>" s-radiobox name="rad<?=$i?>" value="Red"> Plop
										</label>
										<label class="label label--<?= $size ?>">
											<input type="radio" class="input input--<?= $color ?>" s-radiobox name="rad<?=$i?>" value="Red"> Plap
										</label>
									</label>
								</div>
								<div class="gr-6">
									<label class="label">
										<span>Checkbox <?= $color ?>/<?= $size ?></span>
										<br>
										<label class="label label--<?= $size ?>">
											<input checked type="checkbox" class="input input--<?= $color ?>" s-radiobox name="rad<?=$i?>" value="Red"> Yop
										</label>
										<label class="label label--<?= $size ?>">
											<input type="checkbox" class="input input--<?= $color ?>" s-radiobox name="rad<?=$i?>" value="Red"> Yap
										</label>
										<label class="label label--<?= $size ?>">
											<input type="checkbox" class="input input--<?= $color ?>" s-radiobox name="rad<?=$i?>" value="Red"> Plop
										</label>
										<label class="label label--<?= $size ?>">
											<input type="checkbox" class="input input--<?= $color ?>" s-radiobox name="rad<?=$i?>" value="Red"> Plap
										</label>
									</label>
								</div>
							</div>
						<?php $i++ ?>
						<?php endforeach; ?>
						<?php endforeach; ?>
					</div>

				</form>


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

