<script>
	export let classes = '';
	export { classes as class };
	export let href = '';
	export let background = '';
	export let color = '';
</script>

<svelte:element
	this={href ? 'a' : 'div'}
	{href}
	style:background
	style:color
	class="shadow-cobalt-500 w-max rounded-3xl border-[1px] border-white/5 bg-white p-3 shadow-lg dark:bg-cobalt-700 dark:text-cobalt-50 dark:shadow-cobalt-900/50 {classes}"
>
	<slot />
</svelte:element>

<style>
</style>
