<script>
	export let icon = 'fluent:arrow-right-12-filled';
	export let text;
	export let href;
	export let underline = false;
	export let rotate = false;
	export let target = '_blank';
</script>

<a
	{href}
	{target}
	class:underline
	class="group flex w-fit items-center gap-4 py-2 font-space text-2xl"
>
	{text}
	<div
		class="grid place-items-center rounded-full border-2 border-white/10 bg-white/10 p-2 backdrop-blur-lg transition-all duration-300 ease-in-out group-hover:bg-white group-hover:text-black group-active:scale-90"
		class:-rotate-45={rotate}
	>
		<iconify-icon {icon} height="24" />
	</div>
</a>

<style>
</style>
