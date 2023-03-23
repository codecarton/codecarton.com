<script lang="ts">
	import H2 from './H2.svelte';
	import Tagline from './Tagline.svelte';

	export let title: String;
	export let tagline: String;
</script>

<div class="mt-5 mb-10">
	<H2 {title} />
	<Tagline {tagline} />
</div>
