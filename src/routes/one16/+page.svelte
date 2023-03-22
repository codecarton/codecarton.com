<script lang="ts">
	import DownloadButton from '$lib/components/DownloadButton.svelte';
	import Headline from '$lib/components/Headline.svelte';
</script>

<header class="md:text-center">
	<img src="images/app-icon.svg" alt="One16 App Icon" />
	<Headline title="One16" tagline="A fraction calculator designed for woodworkers and makers." />

	<DownloadButton />
</header>

<div class="feature">
	<img src="images/Intro-iPhone.png" alt="" />
	<h2>Fractions, now in first class</h2>
	<h3>
		Create equations with fractions or decimals. One16 updates everything to fractions
		automatically.
	</h3>
</div>

<style lang="postcss">
	img {
		@apply md:mx-auto;
	}
</style>
