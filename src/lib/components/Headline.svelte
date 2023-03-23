<script lang="ts">
	import Title from './Title.svelte';
	import Tagline from './Tagline.svelte';

	export let title: String;
	export let tagline: String;
</script>

<div class="mt-5 mb-10">
	<Title {title} />
	<Tagline {tagline} />
</div>
