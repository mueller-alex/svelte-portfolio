<script>
	import Icon from '@iconify/svelte';
	export let leftIcon;
	export let rightIcon;
	export let text;
	export let href;
	export let color;
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
	class={'flex p-2 bg-mueller-50 dark:bg-mueller-800 w-max ring-8 ring-mueller-100 dark:ring-mueller-900 rounded-lg uppercase font-bold tracking-[.15rem] hover:-translate-y-1 transition-transform ' +
		classes}
	{href}
	style={color ? `background: ${color}; color: white` : ''}
>
	<Icon icon={leftIcon} />
	<div class={margin}>{text}</div>
	<Icon icon={rightIcon} height="24" width="24" />
</a>
