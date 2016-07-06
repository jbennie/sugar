{HEAD}

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

<section id="sizes" class="section bkg-grey--light">

	<div class="container">
		
		<div class="row typeset vertical-rhythme" data-toggle-rhythme-class>

			<div class="gr-12">
				
				<h3>Sizes</h3>

				<p>
					Like the colors management, the differents margins, paddings, button sizes, and all the others spaces that you use in your integration are very painfull to handle and to maintain. Sugar comes with a nice way to manage this. That's called "sizes".
				</p>

<pre><code class="language-scss">// setting up your sizes
@include s-setup((
sizes : (
smaller 			: 1/4,
small 			: 1/2,
default 			: 1,
medium 			: 1.5,
big 			: 2,
bigger 			: 2.5
)
));
// note that the sizes are ratios
// small will be 1/2 of the default
</code></pre>

				<p>
					These sizes ratios tells how to scale your differents values. Some of the internal Sugar functions and mixins are using these ratios but you can also use them through the s-size function like this
				</p>

<pre><code class="language-scss">// pass my value through the size bigger
$my-var : s-size(10, bigger); // 25
</code></pre>
				
				<p>
					<a class="btn" href="http://sugarcss.io/documentation#sizes">
						Full sizes documentation
					</a>
				</p>

			</div>

		</div>

	</div>

</section>

<section id="look-and-feel" class="section">

	<div class="container">
		
		<div class="row typeset vertical-rhythme" data-toggle-rhythme-class>

			<div class="gr-12">
				
				<h3>Look and feel</h3>

				<p>
					The look and feel module has for goal to describe the basic display properties for your elements (buttons, inputs, etc...). By setting these properties and using them across your integration, you will be able to change them later and keep a coherent display in your website.
				</p>

<pre><code class="language-scss">// setting up your look and feel
@include s-setup((
look-and-feel : (
default 	: ( // for the default size
	border-radius 		: 3px,
	padding-vertical 	: 0.5rem,
	padding-horizontal 	: 0.7rem
)
)
));
</code></pre>

				<p>
					You can then use these settings through your code like this
				</p>

<pre><code class="language-scss">// creating buttons
@each $size in sugar('settings.sizes') {
.button-#{$size} {
padding : s-look-and-feel(padding-vertical, $size) s-look-and-feel(padding-horizontal, $size);
border-radius: s-look-and-feel(border-radius, $size);
// etc...
}
}
// creating inputs
// ...
</code></pre>		

				<p>
					<a class="btn" href="http://sugarcss.io/documentation#look-and-feel">
						Full look and feel documentation
					</a>
				</p>

			</div>

		</div>

	</div>

</section>

<section id="spaces" class="section bkg-grey--light">

	<div class="container">
		
		<div class="row typeset vertical-rhythme" data-toggle-rhythme-class>

			<div class="gr-12">
				
				<h3>Spaces</h3>
					
				<p>
					The spaces in Sugar let you store some spaces values that you will use as paddings, margins, or whatever you want in your layout.
				</p>
				<p>
					The difference between spaces and your look and feel settings is that the look and feel take place for your items like inputs, buttons, etc, and your spaces for the layout parts as your section paddings, etc...
				</p>

<pre><code class="language-scss">// setting up your spaces
@include s-setup((
spaces : (
default : 2rem, // this one is required
bigger : 10rem // specify a special one for the bigger size
// the others will be interpolated with your sizes from the default one...
)
));
</code></pre>

				<p>
					<a class="btn" href="http://sugarcss.io/documentation#spaces">
						Full spaces documentation
					</a>
				</p>

			</div>

		</div>

	</div>

</section>

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

{FOOTER}