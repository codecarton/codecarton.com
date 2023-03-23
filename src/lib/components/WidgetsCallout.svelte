<script lang="ts">
	import Subheadline from './Subheadline.svelte';
</script>

<div id="purple-wrapper" class="text-center my-32 pt-20 px-10">
	<div class="mb-20 mx-auto md:max-w-2xl">
		<Subheadline
			title="Widgets"
			tagline="Our phones are often doing double duty in the shop. Widgets allow you to view the latest answer easily on your lock screen or home screen so that you can get the information you need as quickly as possible without having to reopen the app."
		/>
	</div>
	<div class="mx-auto">
		<img src="/images/widget-group.svg" alt="iOS Widgets" class="inline-block" />

		<img
			src="/images/screenshots/lockscreen-widget.svg"
			alt="Lock Screen Widget"
			class="block mx-auto mt-16"
		/>
	</div>
</div>

<style lang="postcss">
	#purple-wrapper {
		background: #a21caf;
		/* background-image: conic-gradient(
			from 1.5708rad at 50% 50%,
			rgba(255, 255, 255, 0) 0%,
			rgba(0, 0, 0, 0.5) 100%
		); */
		background-image: radial-gradient(
			circle at 50% 1e-14%,
			rgba(255, 255, 255, 0) 0%,
			rgba(0, 0, 0, 0.5) 89%,
			rgba(0, 0, 0, 0.5) 89%
		);
		border-top: 1px solid #d66fe0;
	}
</style>
