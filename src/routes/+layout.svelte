<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>One16 - A fraction first calculator designed for makers.</title>
</svelte:head>

<slot />
{#if $page.url.pathname != '/one16/privacy'}
	<style lang="postcss">
		:global(html) {
			background-color: theme(colors.neutral.900);
			background-image: url('/images/tape-lines.svg');
			background-repeat: no-repeat;
			background-position: top center;
			padding-top: 150px;
		}
	</style>
{/if}
