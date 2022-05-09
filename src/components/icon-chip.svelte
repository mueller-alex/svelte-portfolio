<script>
	import Icon from '@iconify/svelte';
	export let icon;
	export let text = '';
	// text = 'Figma'
	export let color;
	function convertColor(hex, opacity) {
		if (!hex) return;
		hex = hex.replace('#', '');
		let r = parseInt(hex.substring(0, 2), 16);
		let g = parseInt(hex.substring(2, 4), 16);
		let b = parseInt(hex.substring(4, 6), 16);

		let result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
		return result;
	}
	let bgColor = convertColor(color, 10);
</script>

{#if color}
	<div
		class="flex items-center p-3 w-max rounded-full border-2 border-white/[.07]"
		style={`background-color: ${bgColor}`}
	>
		<Icon {icon} width="24" height="24" {color} />
		{#if text}
			<div class="text-base ml-2 mr-1" style={'color: ' + color}>
				{text}
			</div>
		{/if}
		<slot />
	</div>
{:else}
	<div
		class="p-3 w-max rounded-full bg-opacity-5 bg-mueller-900 dark:bg-mueller-50 dark:bg-opacity-10 border-2 border-white/[.07]"
	>
		<div class="text-mueller-900 dark:text-mueller-50 flex items-center">
			<Icon {icon} width="24" height="24" color="currentColor" />
			{#if text}
				<div class="text-base ml-2 mr-1">
					{text}
				</div>
			{/if}
			<slot />
		</div>
	</div>
{/if}
