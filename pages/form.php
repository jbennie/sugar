{HEAD}

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
					<a class="btn" href="http://sugarcss.io/documentation#button">
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
				</ul>

				<form>

					<div id="input-text" s-activate-target>
						<?php foreach($colors as $color): ?>
						<?php foreach($sizes as $size): ?>
							<div class="row">
								<div class="gr-12">
									<label class="label">
										<span>Input label</span>
										<input class="input input--<?= $size ?> input--<?= $color ?>" type="text" placeholder="gr-12" />
									</label>
								</div>
								<div class="gr-12">
									<label class="label label--inline">
										<span>Input label inline</span>
										<input class="input input--<?= $size ?> input--<?= $color ?>" type="text" placeholder="gr-12" />
									</label>
								</div>
								<div class="gr-12">
									<label class="label label--inside">
										<span>Input label inside</span>
										<input class="input input--<?= $size ?> input--<?= $color ?>" type="text" placeholder="gr-12" />
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

						<?php endforeach; ?>
						<?php endforeach; ?>
					</div>

					<div id="datepicker" s-activate-target>
						<?php foreach($colors as $color): ?>
						<?php foreach($sizes as $size): ?>

							<div class="row">
								<div class="gr-12">
									<label class="label">
										<span>Date</span>
										<div class="form-group color--<?= $color ?> size--<?= $size ?>">
											<div class="input-addon">from</div>
											<input id="s-datepicker-from" class="input input--<?= $color ?>" type="text" s-datepicker -to="#s-datepicker-to" placeholder="gr-9" />
											<div class="input-addon">to</div>
											<input id="s-datepicker-to" class="input input--<?= $color ?>" type="text" s-datetimepicker -from="#s-datepicker-from" -number-of-months="3" placeholder="gr-9" />
										</div>
									</label>
								</div>
							</div>

						<?php endforeach; ?>
						<?php endforeach; ?>
					</div>

					<div id="range" s-activate-target>
						<?php foreach($colors as $color): ?>
						<?php foreach($sizes as $size): ?>
							<div class="row">
								<div class="gr-12">
									<label class="label">
										<span>Range label</span>
										<div class="form-group">
											<div class="input-addon input-addon--<?= $color ?> input-addon--<?= $size ?>">from</div>
											<input class="input input--<?= $color ?> input--<?= $size ?>" type="text" value="10,20" s-range-input -init-when="viewportVisible" -value="11,44" placeholder="gr-12" />
										</div>
									</label>
								</div>
							</div>
						<?php endforeach; ?>
						<?php endforeach; ?>
					</div>


					<div class="row">
						<div class="gr-4">
							<label class="label">Text
								<input type="text" placeholder="gr-4" class="input input--success" />
							</label>
						</div>
						<div class="gr-4">
							<label class="label">Password
								<input type="password" placeholder="gr-4" class="input input--success" />
							</label>
						</div>
						<div class="gr-4">
							<label class="label">
								<span>Date</span>
								<div class="form-group color--primary">
									<div class="input-addon input-addon--primary">from</div>
									<input id="s-datepicker-from" class="input input--success" type="text" data-s-datepicker data-s-datepicker-to="#s-datepicker-to" placeholder="gr-9" />
									<div class="input-addon input-addon--primary">to</div>
									<input id="s-datepicker-to" class="input input--primary" type="text" data-s-datetimepicker data-s-datepicker-from="#s-datepicker-from" data-s-datetimepicker-number-of-months="3" placeholder="gr-9" />
								</div>
							</label>
						</div>
					</div>
					<div class="row">
						<div class="gr-4">
							<label class="label">Text
								<input type="text" placeholder="gr-4" class="input input--error" />
							</label>
						</div>
						<div class="gr-4">
							<label class="label">Password
								<input type="password" placeholder="gr-4" class="input input--success" />
							</label>
						</div>
						<div class="gr-4">
							<label class="label">Date
								<input type="text" placeholder="Date" class="input input--primary" data-s-datepicker />
							</label>
						</div>
					</div>
					<div class="row">
						<div class="gr-4">
							<label class="label label--inline">
								<span>Text</span>
								<div class="form-group">
									<input type="text" placeholder="gr-4" class="input input--error" />
									<div class="input-addon input-addon--error">$</div>
								</div>
							</label>
						</div>
						<div class="gr-4">
							<label class="label label--inline">
								<span>Password</span>
								<input type="password" placeholder="gr-4" class="input input--success" />
							</label>
						</div>
						<div class="gr-4">
							<label class="label label--inline">
								<span>Date</span>
								<input type="text" placeholder="Date" class="input input--warning" data-s-datepicker />
							</label>
						</div>
					</div>
					<div class="row size--big">
						<div class="gr-4">
							<label class="label label--inside">
								<span>Text</span>
								<input type="text" placeholder="gr-4" class="input input--error" />
							</label>
						</div>
						<div class="gr-4">
							<label class="label label--inside">
								<span><i class="fa-user"></i>&nbsp;&nbsp;Password</span>
								<input type="password" placeholder="gr-4" class="input input--success" />
							</label>
						</div>
						<div class="gr-4">
							<label class="label label--inside form-group">
								<span>Date</span>
								<input type="text" placeholder="Date" class="input" data-s-datepicker />
								<div class="input-addon">$</div>
							</label>
						</div>
					</div>
					<div class="row size--big">
						<div class="gr-4">
							<label class="label">Text
								<input type="text" disabled placeholder="gr-4" class="input input--error" />
								<div class="input-reply input-reply--error">
									This is an error on the field...
								</div>
								<div class="input-reply input-reply--success">
									Nunc ullamcorper orci dui, at ultrices elit euismod ut. In sollicitudin eget ligula commodo cursus. Nam bibendum felis placerat libero pellentesque sodales. Integer gravida ipsum non elementum egestas. Morbi sed.
								</div>
							</label>
						</div>
						<div class="gr-4">
							<label class="label">Password
								<input type="password" placeholder="gr-4" class="input input--success" />
								<div class="input-reply input-reply--success">
									This is a success on the field...
								</div>
							</label>
						</div>
						<div class="gr-4">
							<label class="label label--primary">Postfix
								<div class="form-group">
									<input class="input input--primary" type="text" placeholder="gr-9" />
									<div class="input-addon input-addon--primary">.com</div>
								</div>
								<div class="input-reply input-reply--primary">
									This is an error on the field...
								</div>
							</label>
						</div>
					</div>


					<?php foreach($colors as $color): ?>
					<?php foreach($sizes as $size): ?>
						<div class="row">
							<div class="gr-6">
								<label class="label">Select Box <?= $color ?>/<?= $size ?>
									<select class="input input--<?= $size ?> input--<?= $color ?>" s-select -init-when="viewportVisible">
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
									<select class="input input--<?= $size ?> input--<?= $color ?>" s-select -init-when="viewportVisible" multiple>
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


					<div class="row">
						<div class="gr-12">
							<label class="label">Select Box <?= $color ?>/<?= $size ?>
								<select class="input" disabled>
									<option value="husker">Husker</option>
									<option value="starbuck">Starbuck</option>
									<option value="hotdog">Hot Dog</option>
									<option value="apollo">Apollo</option>
								</select>
							</label>
						</div>
						<div class="gr-12">
							<label class="label">Select Box
								<select class="input input--medium input--error">
									<option value="husker">Husker</option>
									<option value="starbuck">Starbuck</option>
									<option value="hotdog">Hot Dog</option>
									<option value="apollo">Apollo</option>
								</select>
								<div class="input-reply input-reply--error">
									This is a success on the field...
								</div>
							</label>
						</div>
						<div class="gr-12">
							<label class="label">Select Box
								<select class="input input--bigger input--warning">
									<option value="husker">Husker</option>
									<option value="starbuck">Starbuck</option>
									<option value="hotdog">Hot Dog</option>
									<option value="apollo">Apollo</option>
								</select>
								<div class="input-reply input-reply--warning">
									This is a success on the field...
								</div>
							</label>
						</div>
					</div>

					<div class="row">
						<div class="gr-6">
							<label class="label">Choose Your Favorite
								<br>
								<label class="label">
									<input type="radio" class="input" s-radiobox name="rad1" value="Red"> Red
								</label>
								<label class="label">
									<input type="radio" class="input" s-radiobox name="rad1" value="Blue"> Blue
								</label>
							</label>
						</div>
						<div class="gr-6">
							<label class="label">Check these out
								<br>
								<label class="label">
									<input type="checkbox" class="input" s-radiobox> Checkbox 1
								</label>
								<label class="label">
									<input type="checkbox" class="input" s-radiobox> Checkbox 2
								</label>
							</label>
						</div>
					</div>

					<div class="row">
						<div class="gr-6">
							<label class="label" class="medium">Choose Your Favorite
								<br>
								<label class="label" class="medium">
									<input type="radio" s-radiobox name="rad2" value="Red" class="input input--medium" checked> Red
								</label>
								<label class="label" class="medium">
									<input type="radio" s-radiobox name="rad2" value="Blue" class="input input--medium checkmark--warning"> Blue
								</label>
							</label>
						</div>
						<div class="gr-6">
							<label class="label label--medium">Check these out
								<br>
								<label class="label" class="medium">
									<input type="checkbox" s-radiobox class="input input--medium" checked> Checkbox 1
								</label>
								<label class="label" class="medium">
									<input type="checkbox" s-radiobox class="input input--medium checkmark--warning"> Checkbox 2
								</label>
							</label>
						</div>
					</div>

					<div class="row">
						<div class="gr-6">
							<label class="label label--big">Choose Your Favorite
								<br>
								<label class="label label--big">
									<input type="radio" s-radiobox name="rad3" value="Red" class="input input--big checkmark--fill" checked> Red
								</label>
								<label class="label label--big">
									<input type="radio" s-radiobox name="rad3" value="Blue" class="input input--big checkmark--fill checkmark--warning"> Blue
								</label>
							</label>
						</div>
						<div class="gr-6">
							<label class="label label--big">Check these out
								<br>
								<label class="label label--big">
									<input type="checkbox" s-radiobox class="input input---big checkmark--fill" checked> Checkbox 1
								</label>
								<label class="label label--big">
									<input type="checkbox" s-radiobox class="input input--big checkmark--fill checkmark--warning"> Checkbox 2
								</label>
							</label>
						</div>
					</div>

					<div class="row">
						<div class="gr-6">
							<label class="label label--bigger">Choose Your Favorite
								<br>
								<label class="label label--bigger">
									<input type="radio" s-radiobox name="rad4" value="Red" class="input input--bigger checkmark--inside" checked> Red
								</label>
								<label class="label label--bigger">
									<input type="radio" s-radiobox name="rad4" value="Blue" class="input input--bigger checkmark--inside checkmark--warning"> Blue
								</label>
							</label>
						</div>
						<div class="gr-6">
							<label class="label label--bigger">Check these out
								<br>
								<label class="label label--bigger">
									<input type="checkbox" s-radiobox checked class="input input--bigger checkmark--inside"> Checkbox 1
								</label>
								<label class="label label--bigger">
									<input type="checkbox" s-radiobox class="input input--bigger checkmark--inside checkmark--warning"> Checkbox 2
								</label>
							</label>
						</div>
					</div>


					<div class="row">
						<div class="gr-12">
							<label class="label">Textarea Label
								<textarea placeholder="small-12" rows="5" class="input input--error"></textarea>
								<div class="input-reply input-reply--error">
									This is a success on the field...
								</div>
							</label>
						</div>
					</div>
					<div class="row">
						<div class="gr-12">
							<fieldset class="fieldset fieldset--big">
								<legend class="legend legend--big">
									<i class="fa-user"></i> &nbsp;Check this out
								</legend>

								<div class="row">
									<div class="gr-12">
										<label class="label">Hello world
											<div class="error">
												<label class="label">
													<input class="input" type="checkbox" s-radiobox checked> Checkbox 1
												</label>
												<label class="label">
													<input type="checkbox" s-radiobox class="input input--primary"> Checkbox 2
												</label>
												<label class="label">
													<input type="checkbox" s-radiobox class="input input--secondary"> Checkbox 2
												</label>
												<label class="label">
													<input type="checkbox" s-radiobox class="input input--warning"> Checkbox 2
												</label>
												<label class="label">
													<input type="checkbox" s-radiobox class="input input--error"> Checkbox 2
												</label>
												<div class="input-reply input-reply--error">
													This is an error on the field...
												</div>
											</div>
										</label>
									</div>
								</div>

								<div class="row">
									<div class="gr-4">
										<label class="label">Text
											<input class="input" type="text" placeholder="gr-4" />
										</label>
									</div>
									<div class="gr-4">
										<label class="label">Password
											<input class="input" type="password" placeholder="gr-4" />
										</label>
									</div>
									<div class="gr-4">
										<label class="label">Postfix
											<div class="form-group">
												<div class="input-addon input-addon--primary">$</div>
												<input class="input input--primary" type="text" placeholder="gr-9" />
												<div class="input-addon input-addon--primary">.00</div>
											</div>
										</label>
									</div>
								</div>

								<div class="row">
									<div class="gr-4">
										<label class="label">Text
											<div class="form-group row">
												<div class="gr-8">
													<input type="text" placeholder="gr-4" class="input input--medium" />
												</div>
												<div class="gr-4">
													<button class="btn btn--block btn--medium">Send</button>
												</div>
											</div>
										</label>
									</div>
									<div class="gr-4">
										<label class="label">Password
											<input type="password" placeholder="gr-4" class="input input--medium" />
										</label>
									</div>
									<div class="gr-4">
										<label class="label">Postfix
											<input class="input input--primary input--medium" type="text" placeholder="gr-9" />
										</label>
									</div>
								</div>

							</fieldset>

							<fieldset class="fieldset fieldset--big">
								<legend class="legend legend--big">
									<i class="fa-user"></i> &nbsp;Check this out
								</legend>

								<div class="row">
									<div class="gr-12">
										<label class="label label--big">
											Choose Your Favorite
											<div>
												<label class="label label--big">
													<input type="checkbox" s-radiobox checked class="input input--big"> Checkbox 1
												</label>
												<label class="label label--big">
													<input type="checkbox" s-radiobox class="input input--big input--primary"> Checkbox 2
												</label>
												<label class="label label--big">
													<input type="checkbox" s-radiobox class="input input--big input--secondary checkmark--secondary"> Checkbox 2
												</label>
												<label class="label label--big">
													<input type="checkbox" s-radiobox class="input input--big input--warning"> Checkbox 2
												</label>
												<label class="label label--big">
													<input type="checkbox" s-radiobox class="input input--big input--error checkmark--fill checkmark--error" checked> Checkbox 2
												</label>
											</div>
										</label>
									</div>
								</div>

								<div class="row">
									<div class="gr-4">
										<label class="label">Text
											<div class="form-group row">
												<div class="gr-8">
													<input class="input" type="text" placeholder="gr-4" />
												</div>
												<div class="gr-4">
													<button class="btn btn--block">Send</button>
												</div>
											</div>
										</label>
									</div>
									<div class="gr-4">
										<label class="label">Password
											<input class="input" type="password" placeholder="gr-4" />
										</label>
									</div>
									<div class="gr-4">
										<label class="label">Postfix
											<div class="form-group">
												<div class="input-addon input-addon--primary">$</div>
												<input class="input input--primary" type="text" placeholder="gr-9" />
												<div class="input-addon input-addon--primary">.00</div>
											</div>
										</label>
									</div>
								</div>

								<div class="row">
									<div class="gr-4">
										<label class="label">Text
											<div class="form-group row">
												<div class="gr-8">
													<input type="text" placeholder="gr-4" class="input input--medium" />
												</div>
												<div class="gr-4">
													<button class="btn btn--block btn--medium">Send</button>
												</div>
											</div>
										</label>
									</div>
									<div class="gr-4">
										<label class="label">Password
											<input type="password" placeholder="gr-4" class="input input--medium" />
										</label>
									</div>
									<div class="gr-4">
										<label class="label">Postfix
											<div class="form-group">
												<div class="input-addon input-addon--medium">$</div>
												<input class="input input--medium" type="text" placeholder="gr-9" />
												<div class="input-addon input-addon--medium">.00</div>
											</div>
										</label>
									</div>
								</div>

								<div class="row">
									<div class="gr-4">
										<label class="label label--big">Text
											<div class="form-group row">
												<div class="gr-8">
													<input type="text" placeholder="gr-4" class="input input--big" />
												</div>
												<div class="gr-4">
													<button class="btn btn--block btn--big">Send</button>
												</div>
											</div>
										</label>
									</div>
									<div class="gr-4">
										<label class="label label--big">Password
											<input type="password" placeholder="gr-4" class="input input--big" />
										</label>
									</div>
									<div class="gr-4">
										<label class="label label--big">Postfix
											<div class="form-group">
												<div class="input-addon input-addon--big">$</div>
												<input class="input input--big" type="text" placeholder="gr-9" />
												<div class="input-addon input-addon--big">.00</div>
											</div>
										</label>
									</div>
								</div>

							</fieldset>
						</div>
					</div>
				</form>


			</div>

		</div>

	</div>

</section>

{FOOTER}
