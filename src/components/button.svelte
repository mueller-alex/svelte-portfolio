<script>
	import Icon from '@iconify/svelte';
	export let leftIcon = '';
	export let rightIcon = '';
	export let textSize = 24;
	export let text;
	export let href;
	export let background;
	export let color;
	export let padding = '3';
	export let classes;
	export { classes as class };
	let margin;
	// function to set margin based on which if the left icon is present and if the right
	$: {
		if (leftIcon && rightIcon) {
			margin = 'mx-2';
		} else if (leftIcon) {
			margin = 'ml-2 mr-1';
		} else if (rightIcon) {
			margin = 'ml-1 mr-2';
		} else {
			margin = 'mx-0';
		}
	}
</script>

<a
	{href}
	class="p-{padding} flex rounded-[.75rem] border border-white/10 bg-mueller-50 transition-transform hover:scale-105 dark:bg-mueller-800 {classes}"
	style:background
	style:color
>
	<iconify-icon icon={leftIcon} height={textSize} />
	<div class="font-bold uppercase tracking-[.15rem] {margin} text-[{textSize}px]">{text}</div>
	<iconify-icon icon={rightIcon} height={textSize} />
</a>
