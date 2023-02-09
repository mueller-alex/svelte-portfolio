<script lang="ts">
	import Button from './button.svelte';
	import IconChip from './icon-chip.svelte';
	import Icon from '@iconify/svelte';
	import type { Project, ProjectInfo } from 'src/lib/types/project.type';
	import Card from './card.svelte';
	export let project: Project;
</script>

<Card class="flex h-fit w-full flex-col items-stretch lg:w-max">
	<div class="flex w-full items-center gap-4 p-3">
		<iconify-icon icon="mingcute:idcard-fill" height="32" />
		<div class="">
			<p class="font-space text-sm font-medium uppercase tracking-widest opacity-70">Role</p>
			<p class="text-lg font-medium tracking-wider">{project.info.role}</p>
		</div>
	</div>
	<div class="flex w-full items-center gap-4 p-3">
		<iconify-icon icon="mingcute:calendar-fill" height="32" />
		<div class="">
			<p class="font-space text-sm font-medium uppercase tracking-widest opacity-70">Timeline</p>
			<p class="text-lg font-medium tracking-wider">{project.info.timeline}</p>
		</div>
	</div>
	<div class="flex w-full items-center gap-4 p-3">
		<iconify-icon icon="mingcute:flash-fill" height="32" />
		<div class="">
			<p class="font-space text-sm font-medium uppercase tracking-widest opacity-70">Tools</p>
			<p class=" text-lg font-medium tracking-wider">{project.info.tools}</p>
		</div>
	</div>
	<!-- <div class="flex w-full items-center gap-4 p-3">
		<iconify-icon icon="mingcute:link-2-line" height="32" />
		<div class="">
			<p class="font-space text-sm font-medium uppercase tracking-widest opacity-70">Link</p>
			<a class=" text-lg font-medium tracking-wider" href={project.link[0]}>{project.link[1]}</a>
		</div>
	</div> -->
	{#if project.info.link}
		<Card
			class="mt-2 w-full rounded-2xl transition-all hover:!bg-white hover:!text-black hover:shadow-cobalt-900"
			href={project.info.link[0]}
			backgroundColor={project.meta.backgroundColor}
			color={project.meta.textColor}
			target="_blank"
		>
			<p
				class="flex items-center justify-center gap-2 px-2 font-space text-xl font-bold uppercase tracking-[.15rem] "
			>
				{project.info.link[1]}
				<iconify-icon icon="mingcute:link-2-fill" flip="horizontal" />
			</p>
		</Card>
	{/if}
</Card>
