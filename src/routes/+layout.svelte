<!-- <script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script> -->
<svelte:head>
	<title>One16 - A fraction first calculator designed for makers.</title>
</svelte:head>
<div>
	<slot />
</div>

<style>
	:global(body) {
		background-image: url('/images/tape-lines.svg');
		background-repeat: no-repeat;
		background-position: top center;
		background-color: #0b0b0b;
		padding-top: 150px;
		padding: 150px 20px 20px;
	}

	:global(h1) {
		/* TODO: Update this to support other fonts, if not installed */
		font-family: SFProDisplay-Bold;
		font-size: 64px;
		color: #ffffff;
		text-align: center;
		margin-bottom: 0;
		margin-top: 10px;
	}

	:global(h2) {
		font-family: SFProDisplay-Bold;
		font-size: 45px;
		color: #ffffff;
		text-align: center;
		background: linear-gradient(to top left, #ffffff45 0%, #ffffff 60%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	:global(h3) {
		font-family: SFPro-Light;
		font-weight: 100;
		font-size: 25px;
		color: #ffffff;
		text-align: center;
		margin-top: 0%;
	}
</style>
