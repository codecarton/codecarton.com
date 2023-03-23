<script lang="ts">
	export let title: String;
</script>

<h1>{title}</h1>

<style lang="postcss">
	h1 {
		font-size: theme(fontSize.7xl);
		font-weight: theme(fontWeight.bold);
		color: theme(colors.white);
	}
</style>
