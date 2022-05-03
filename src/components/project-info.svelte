<script lang="ts">
	import Button from './button.svelte';
	import IconChip from './icon-chip.svelte';
	import Icon from '@iconify/svelte';
	import type { Project } from '../projects';
	import Card from './card.svelte';
	export let project: Project;
</script>

<h1 class="my-8 flex w-full gap-3 text-4xl font-extrabold uppercase tracking-[.35rem]">
	<span class="material-symbols-rounded text-4xl"> description </span> Overview
</h1>
<div class="flex w-full grid-cols-10 flex-col gap-8 md:grid">
	<div class="col-span-3 flex w-full flex-col items-center gap-4">
		<Card class="flex w-full items-center gap-3 p-4 pr-5">
			<span class="material-symbols-rounded text-[32px]"> account_circle </span>
			<div class="">
				<p class="text-sm font-bold uppercase tracking-widest opacity-70">Role</p>
				<p class="text-lg font-medium tracking-wider">{project.role}</p>
			</div>
		</Card>
		<Card class="flex w-full items-center gap-3 p-4 pr-5">
			<span class="material-symbols-rounded text-[32px]"> date_range </span>
			<div class="">
				<p class="text-sm font-bold uppercase tracking-widest opacity-70">Timeline</p>
				<p class="text-lg font-medium tracking-wider">{project.timeline}</p>
			</div>
		</Card>
		<Card class="flex w-full items-center gap-3 p-4 pr-5">
			<span class="material-symbols-rounded text-[32px]"> hardware </span>
			<div class="">
				<p class="text-sm font-bold uppercase tracking-widest opacity-70">Skills</p>
				<p class="text-lg font-medium tracking-wider">{project.skills}</p>
			</div>
		</Card>
		{#if project.link}
			<Card
				class="transition-transform hover:scale-105"
				href={project.link[0]}
				background={project.backgroundColor}
				color={project.textColor}
			>
				<p
					class="flex items-center gap-3 px-2 text-lg font-bold uppercase tracking-[.15rem] text-white "
				>
					{project.link[1]}
					<span class="material-symbols-rounded text-3xl"> open_in_new </span>
				</p>
			</Card>
		{/if}
	</div>
	<div class="col-span-7">
		<slot name="overview" />
	</div>
</div>
{#if project.link && false}
	<h1 class="my-8 w-full px-4 text-center text-4xl font-extrabold uppercase tracking-[.35rem]">
		Preview
	</h1>
	<iframe
		src={project.link[0]}
		frameborder="0"
		class="aspect-video w-full rounded-2xl border-[1px] border-white/5 shadow-lg"
		title={project.name}
	/>
	<div id="link" class="mt-8 flex flex-col items-center">
		<Button
			href={project.link[0]}
			text={project.link[1]}
			rightIcon="open_in_new"
			background={project.backgroundColor}
			color={project.textColor}
			padding="3"
		/>
	</div>
{/if}
{#if $$slots.background}
	<h1 class="my-8 w-full px-4 text-center text-4xl font-extrabold uppercase tracking-[.35rem]">
		Background
	</h1>
	<slot name="background" />
{/if}
{#if $$slots.gallery}
	<slot name="gallery" />
{/if}
