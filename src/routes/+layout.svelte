<script lang="ts">
	import '../app.css';
</script>

<svelte:head>
	<title>One16 - A fraction first calculator designed for makers.</title>
</svelte:head>
<div class="max-w-5xl mx-auto">
	<slot />
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.neutral.900);
		background-image: url('/images/tape-lines.svg');
		background-repeat: no-repeat;
		background-position: top center;
		padding-top: 150px;
	}

	:global(h1) {
		font-size: theme(fontSize.8xl);
	}
</style>
