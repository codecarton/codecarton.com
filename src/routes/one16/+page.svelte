<script lang="ts">
	import DownloadButton from '$lib/components/DownloadButton.svelte';
	import Headline from '$lib/components/Headline.svelte';
</script>

<div class="flex">
	<div class="feature">
		<img src="images/screenshots/initial-screen.png" alt="" class="max-w-sm" />
		<h2>Fractions, now in first class</h2>
		<h3>
			Create equations with fractions or decimals. One16 updates everything to fractions
			automatically.
		</h3>
	</div>
	<header class="md:text-center">
		<img src="images/app-icon.svg" alt="One16 App Icon" />
		<Headline title="One16" tagline="A fraction calculator designed for woodworkers and makers." />

		<DownloadButton />
	</header>
</div>

<style lang="postcss">
	img {
		@apply md:mx-auto;
	}
</style>
