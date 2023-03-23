<script lang="ts">
	export let title: String;
</script>

<h2>{title}</h2>

<style lang="postcss">
	h2 {
		font-size: theme(fontSize.5xl);
		background: linear-gradient(to top left, #ffffff45 0%, #ffffff 60%);
		-webkit-background-clip: text;
		background-clip: text;
		font-weight: theme(fontWeight.bold);
		-webkit-text-fill-color: transparent;
	}
</style>
