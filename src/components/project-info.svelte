<script lang="ts">
	import Button from './button.svelte';
	import IconChip from './icon-chip.svelte';
	import Icon from '@iconify/svelte';
	import type { Project } from '../projects';
	import Card from './card.svelte';
	export let project: Project;
</script>

<Card class="flex h-fit w-full flex-col items-stretch lg:w-max">
	<div class="flex w-full items-center gap-4 p-3">
		<iconify-icon icon="majesticons:user-box-line" height="32" />
		<div class="">
			<p class="font-space text-sm font-medium uppercase tracking-widest opacity-70">Role</p>
			<p class="text-lg font-medium tracking-wider">{project.role}</p>
		</div>
	</div>
	<div class="flex w-full items-center gap-4 p-3">
		<iconify-icon icon="majesticons:calendar" height="32" />
		<div class="">
			<p class="font-space text-sm font-medium uppercase tracking-widest opacity-70">Timeline</p>
			<p class="text-lg font-medium tracking-wider">{project.timeline}</p>
		</div>
	</div>
	<div class="flex w-full items-center gap-4 p-3">
		<iconify-icon icon="majesticons:lightning-bolt-line" height="32" />
		<div class="">
			<p class="font-space text-sm font-medium uppercase tracking-widest opacity-70">Tools</p>
			<p class=" text-lg font-medium tracking-wider">{project.skills}</p>
		</div>
	</div>
	{#if project.link}
		<Card
			class="mt-2 w-full rounded-2xl transition-all hover:!bg-white hover:!text-black hover:shadow-cobalt-900"
			href={project.link[0]}
			backgroundColor={project.backgroundColor}
			color={project.textColor}
			target="_blank"
		>
			<p
				class="flex items-center justify-center gap-2 px-2 font-space text-lg font-bold uppercase tracking-[.15rem] "
			>
				{project.link[1]}
				<iconify-icon icon="ic:round-open-in-new" height="28" />
			</p>
		</Card>
	{/if}
</Card>
