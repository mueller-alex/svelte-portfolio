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
	export let as = 'div';
</script>

<svelte:element
	this={href ? 'a' : as}
	{href}
	{target}
	style:background
	style:background-color={backgroundColor}
	style:color
	class:bg-glass={!noGlass}
	class:backdrop-blur-lg={!noBlur}
	class="rounded-{corner} border-2 border-white/10 bg-white/5 bg-glass p-3 text-cobalt-50 shadow-2xl shadow-black/70  {classes}"
>
	<slot />
</svelte:element>

<style>
</style>
