<script lang="ts">
	import ComingSoon from '$lib/components/ComingSoon.svelte';
	import DownloadButton from '$lib/components/DownloadButton.svelte';
	import Headline from '$lib/components/Headline.svelte';
	import Subheadline from '$lib/components/Subheadline.svelte';
	import WidgetsCallout from '$lib/components/WidgetsCallout.svelte';
</script>

<div class="max-w-md mx-auto overflow-hidden md:max-w-3xl">
	<div class="md:flex text-center">
		<div class="md:pr-8 py-10 md:my-auto md:py-0 text-center md:text-right">
			<img src="images/app-icon.svg" alt="One16 App Icon" class="inline-block" />
			<Headline
				title="One16"
				tagline="A fraction calculator designed for woodworkers and makers."
			/>
			<DownloadButton />
		</div>
		<div class="md:shrink-0">
			<img
				src="images/screenshots/iPhone.webp"
				alt="iPhone screenshot of One16"
				class="inline-block max-w-sm px-10"
			/>
		</div>
	</div>
</div>

<WidgetsCallout />

<div class="max-w-md mx-auto overflow-hidden md:max-w-3xl my-32">
	<div class="md:flex text-center">
		<div class="md:shrink-0 hidden md:block">
			<img
				src="images/screenshots/toggle-values.webp"
				alt="Quick Toggle Screenshot"
				class="inline-block max-w-sm px-10"
			/>
		</div>
		<div class="md:pl-8 py-10 md:my-auto md:py-0 text-center md:text-left">
			<Subheadline
				title="Quick Toggle"
				tagline="One16 can easily convert decimals to fractions, and vise versa. Allowing for a wide range of flexibility in how you work."
			/>
		</div>
		<div class="md:shrink-0 md:hidden">
			<img
				src="images/screenshots/toggle-values.webp"
				alt="Quick Toggle Screenshot"
				class="inline-block max-w-sm px-10"
			/>
		</div>
	</div>
</div>

<div class="max-w-md mx-auto overflow-hidden md:max-w-3xl my-32">
	<div class="md:flex text-center">
		<div class="md:pr-8 py-10 md:my-auto md:py-0 text-center md:text-right">
			<Subheadline
				title="Equation Builder"
				tagline="We are usually working with the same measurement several times. Quick Builder allows you to double tap any term in the history tape to quickly reuse, saving you the extra keystrokes."
			/>
		</div>
		<div class="md:shrink-0">
			<img
				src="images/screenshots/quick-fill.webp"
				alt="Equation Builder Screenshot"
				class="inline-block max-w-sm px-10"
			/>
		</div>
	</div>
</div>

<div class="max-w-md mx-auto overflow-hidden md:max-w-3xl my-32">
	<div class="md:flex text-center">
		<div class="md:shrink-0 hidden md:block">
			<img
				src="images/screenshots/left-handed-keyboard.webp"
				alt="Left-Handed Keyboard Screenshot"
				class="inline-block max-w-sm px-10"
			/>
		</div>
		<div class="md:pl-8 py-10 md:my-auto md:py-0 text-center md:text-left">
			<Subheadline
				title="Left-Handed Mode"
				tagline="Two variants of our calculator keyboard, one for right handed use and one for left handed. We have carefully thought about what buttons are most used, and placed them in easier-to-reach areas."
			/>
		</div>
		<div class="md:shrink-0 md:hidden">
			<img
				src="images/screenshots/left-handed-keyboard.webp"
				alt="Left-Handed Keyboard Screenshot"
				class="inline-block max-w-sm px-10"
			/>
		</div>
	</div>
</div>

<div class="text-center pt-20 px-10 md:max-w-2xl md:mx-auto my-32">
	<Subheadline
		title="Native &amp; Familiar"
		tagline="Inspired by the standard calculator making One16 instantly familiar."
	/>
</div>

<div class="text-center pt-20 px-10 md:max-w-2xl md:mx-auto my-32">
	<Subheadline
		title="Built for makers, by makers"
		tagline="Code Carton is a one man company. One16 was created out of frustration with the current fraction calculators that exists on the the Apple ecosystem. The features and design were influenced by what I needed in a app while in the workshop."
	/>
</div>

<div class="text-center pt-20 px-10 md:max-w-2xl md:mx-auto my-32">
	<img src="images/app-icon.svg" alt="One16 App Icon" class="inline-block" />
	<Headline title="One16" tagline="A fraction calculator designed for woodworkers and makers." />
	<DownloadButton />
</div>

<ComingSoon />

<div class="text-center pt-20 px-10 md:max-w-2xl md:mx-auto my-32 text-white ">
	<div class="text-center mx-auto mb-10">
		<img src="favicon.png" alt="Code Carton Logo" class="inline-block" />
	</div>
	<a href="/one16/privacy" class="px-5 hover:text-purple-500">Privacy Policy</a>
	<a href="mailto:hello@codecarton.com" class="px-5 hover:text-purple-500">Contact Us</a>
	<a
		href="https://twitter.com/codecarton"
		target="_blank"
		rel="noreferrer"
		class="px-5 hover:text-purple-500">Twitter</a
	>
</div>
