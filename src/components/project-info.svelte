<script context="module">
	export class Chip {
		constructor(icon, color, text) {
			this.icon = icon;
			this.color = color;
			this.text = text;
		}
	}
</script>

<script>
	import Button from './button.svelte';
	import IconChip from './icon-chip.svelte';
	import Icon from '@iconify/svelte';
	export let link = '';
	export let linkText = '';
	export let color = '';
	export let role = '';
	export let skills = '';
	export let timeline = '';
	// function to lighten hex color by a percentage
	function lighten(color, percent) {
		var f = parseInt(color.slice(1), 16),
			t = percent < 0 ? 0 : 255,
			p = percent < 0 ? percent * -1 : percent,
			R = f >> 16,
			G = (f >> 8) & 0x00ff,
			B = f & 0x0000ff;
		return (
			'#' +
			(
				0x1000000 +
				(Math.round((t - R) * p) + R) * 0x10000 +
				(Math.round((t - G) * p) + G) * 0x100 +
				(Math.round((t - B) * p) + B)
			)
				.toString(16)
				.slice(1)
		);
	}
</script>

<h1 class="text-4xl uppercase font-extrabold px-4 text-center tracking-[.35rem] w-full my-8 ">
	Overview
</h1>
<div
	class="flex flex-col flex-wrap md:flex-row md:justify-between md:gap-8 py-8 space-y-3 md:space-y-0"
>
	<div id="role" class="flex flex-col items-center flex-1">
		<IconChip icon="mdi-clipboard-account" />
		<h6 class="text-md uppercase tracking-widest font-bold mt-1">Role</h6>
		<div>
			{role}
		</div>
	</div>
	<div id="timeline" class="flex flex-col items-center flex-1">
		<IconChip icon="mdi:calendar-range" />
		<h6 class="text-md uppercase tracking-widest font-bold mt-1">Timeline</h6>
		<div>
			{timeline}
		</div>
	</div>
	<div id="skills" class="flex flex-col items-center flex-1">
		<IconChip icon="mdi:code" />
		<h6 class="text-md uppercase tracking-widest font-bold mt-1">Skills Used</h6>
		<div>{skills}</div>
	</div>
	<!-- <div class="flex items-center gap-2 flex-wrap">
        {#each skills as skill}
        <IconChip icon={skill.icon} color={skill.color} text={skill.text}/>
        {/each}
    </div> -->
</div>
<slot />
{#if link}
	<div id="link" class="flex flex-col items-center mt-8">
		<Button text={linkText} href={link} rightIcon="ic:round-open-in-new" {color} />
	</div>
{/if}
