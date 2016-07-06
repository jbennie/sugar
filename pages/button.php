{HEAD}

<section class="section bkg-grey--light" id="typeset">

	<div class="container typeset vertical-rhythme">

		<div class="row">

			<div class="gr-12">
				
				<h3>Typeset</h3>

				<p class="lead">
					The sugar button component allows you to access a full stack a buttons that depends on your settings.
				</p>

<pre><code class="language-scss">// print out the buttons css
@include s-button();
</code></pre>

				<p>
					<a class="btn" href="http://sugarcss.io/documentation#button">
						Full button documentation
					</a>
				</p>

			</div>

		</div>

	</div>

</section>

<section class="section typeset vertical-rhythme show-rhythme" id="typography" data-toggle-baseline-class data-toggle-rhythme-class>

	<div class="container">

		<div class="row">

			<div class="gr-12">
				
				<a data-toggle-rhythme class="pull-right active">
					<i class="fa-check"></i> Toggle rhythme
				</a>
				<a data-toggle-baseline class="pull-right">
					<i class="fa-bars"></i> Toggle baseline
				</a>
				
				<h4>Dropdown buttons</h4>				

				<div class="dropdown">
					<button class="btn">My cool button  
						<i class="fa-caret-down"></i>
					</button>
					<ul class="dropdown__menu no-typeset no-vertical-rhythme">
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

				<h4>Buttons</h4>

				<button class="btn"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--primary"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--secondary"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--success"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--warning"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--error"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--info"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--link"><i class="fa-user"></i> My cool button</button>

				<h4>Outline</h4>
				
				<button class="btn btn--outline"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--primary btn--outline"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--secondary btn--outline"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--success btn--outline"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--warning btn--outline"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--error btn--outline"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--info btn--outline"><i class="fa-user"></i> My cool button</button>

				<h4>Small</h4>
				
				<button class="btn btn--small"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--primary btn--small"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--secondary btn--small"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--success btn--small"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--warning btn--small"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--error btn--small"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--info btn--small"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--link btn--small"><i class="fa-user"></i> My cool button</button>

				<h4>Default</h4>
				
				<button class="btn"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--primary"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--secondary"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--success"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--warning"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--error"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--info"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--link"><i class="fa-user"></i> My cool button</button>

				<h4>Medium</h4>
				
				<button class="btn btn--medium"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--primary btn--medium"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--secondary btn--medium"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--success btn--medium"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--warning btn--medium"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--error btn--medium"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--info btn--medium"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--link btn--medium"><i class="fa-user"></i> My cool button</button>

				<h4>Big</h4>
				
				<button class="btn btn--big"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--primary btn--big"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--secondary btn--big"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--success btn--big"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--warning btn--big"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--error btn--big"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--info btn--big"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--link btn--big"><i class="fa-user"></i> My cool button</button>

				<h4>Bigger</h4>
				
				<button class="btn btn--bigger"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--primary btn--bigger"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--secondary btn--bigger"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--success btn--bigger"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--warning btn--bigger"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--error btn--bigger"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--info btn--bigger"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--link btn--bigger"><i class="fa-user"></i> My cool button</button>

				<h4>Disabled</h4>
				
				<button class="btn" disabled><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--primary" disabled><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--secondary" disabled><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--success" disabled><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--warning" disabled><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--error" disabled><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--info" disabled><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--link" disabled><i class="fa-user"></i> My cool button</button>

				<h4>Block</h4>
				
				<button class="btn btn--block"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--primary btn--block"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--secondary btn--block"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--success btn--block"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--warning btn--block"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--error btn--block"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--info btn--block"><i class="fa-user"></i> My cool button</button>
				<button class="btn btn--link btn--block"><i class="fa-user"></i> My cool button</button>

				<h4>Button group</h4>

				<div class="btn-group">
					<button class="btn btn--medium">Button 01</button>
					<button class="btn btn--medium">Button 02</button>
					<button class="btn btn--medium">Button 03</button>
					<button class="btn btn--medium">Button 04</button>
				</div>

				<h4>Radio buttons</h4>
				<div class="btn-group">
					<input type="radio" name="btn-radio" id="btn-radio-1">
					<label for="btn-radio-1" class="btn btn--medium btn--primary">Button 01</label>
					<input type="radio" name="btn-radio" id="btn-radio-2">
					<label for="btn-radio-2" class="btn btn--medium btn--primary">Button 02</label>
					<input type="radio" name="btn-radio" id="btn-radio-3">
					<label for="btn-radio-3" class="btn btn--medium btn--primary">Button 03</label>
					<input type="radio" name="btn-radio" id="btn-radio-4">
					<label for="btn-radio-4" class="btn btn--medium btn--primary">Button 04</label>	
				</div>

				<h4>Checkbox buttons</h4>
				<div class="btn-group">
					<input type="checkbox" name="btn-checkbox" id="btn-checkbox-1">
					<label for="btn-checkbox-1" class="btn btn--medium">Button 01</label>
					<input type="checkbox" name="btn-checkbox" id="btn-checkbox-2">
					<label for="btn-checkbox-2" class="btn btn--medium">Button 02</label>
					<input type="checkbox" name="btn-checkbox" id="btn-checkbox-3">
					<label for="btn-checkbox-3" class="btn btn--medium">Button 03</label>
					<input type="checkbox" name="btn-checkbox" id="btn-checkbox-4">
					<label for="btn-checkbox-4" class="btn btn--medium">Button 04</label>	
				</div>

				<!-- <hr> -->

			</div>

		</div>

	</div>

</section>

{FOOTER}