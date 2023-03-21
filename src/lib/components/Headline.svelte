<script lang="ts">
	import Tagline from './Tagline.svelte';

	export let title: String;
	export let tagline: String;
</script>

<div>
	<h1 class="text-6xl text-white font-bold">{title}</h1>
	<Tagline {tagline} />
</div>

<style lang="postcss">
	h1 {
		margin-bottom: 18px;
	}

	div {
		margin: 20px 0 40px;
	}
</style>
