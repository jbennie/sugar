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
						<?php foreach($colors as $color): ?>
						<?php foreach($sizes as $size): ?>

							<div class="row size-<?= $size ?>">
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
							<div class="row size-<?= $size ?>">
								<div class="gr-12">
									<label class="label">
										<span>Range label</span>
										<input class="input input--<?= $color ?>" type="text" value="<?=rand(1,50)?>,<?=rand(50,100)?>" s-range-input -init-when="viewportVisible" />
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

{FOOTER}
