<script>
	export let classes = '';
	export { classes as class };
	export let href = '';
	export let background = '';
	export let backgroundColor = '';
	export let color = '';
	export let corner = '3xl';
	export let noGlass = false;
	export let noBlur = false;
	export let target = '';
</script>

<svelte:element
	this={href ? 'a' : 'div'}
	{href}
	{target}
	style:background
	style:background-color={backgroundColor}
	style:color
	class:bg-glass={!noGlass}
	class:backdrop-blur-lg={!noBlur}
	class:backdrop-contrast-\[1.1\]={!noBlur}
	class="rounded-{corner} border border-white/[.125] bg-white/5 bg-glass p-3 text-cobalt-50 shadow-lg shadow-cobalt-900/50 {classes}"
>
	<slot />
</svelte:element>

<style>
</style>
