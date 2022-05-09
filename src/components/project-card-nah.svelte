<script lang="ts">
	import { fly } from 'svelte/transition';
	export let noLink = false;
	export let solid = false;
	export let classes;
	export { classes as class };
	import type { Project } from '../projects';
	export let project: Project;
</script>

<div class="relative w-full">
	<div
		class="absolute inset-0 opacity-75 mix-blend-multiply dark:mix-blend-screen"
		style:background-color={project.backgroundColor}
		class:solid
	/>
	<div
		class="absolute inset-0 opacity-60"
		style:background-color={project.backgroundColor}
		class:solid
	/>
	<svelte:element
		this={noLink ? 'div' : 'a'}
		id={project.key}
		href="/projects/{project.key}"
		class:group={!noLink}
		class="blob-1 relative mx-auto box-content flex min-h-[30vh] w-full max-w-screen-2xl flex-col justify-end text-white transition-all md:flex-row {classes}"
		style:color={project.textColor}
	>
		<div
			class="blob-1 flex w-full flex-col items-center justify-center pt-4 pb-8 md:ml-16 md:items-start md:py-8 "
		>
			{#if noLink}
				<h1
					class="px-4 text-center text-3xl font-extrabold uppercase tracking-wider group-hover:scale-[1.15] md:px-0 md:py-4 md:text-left md:text-5xl"
				>
					{@html project.name}
				</h1>
			{:else}
				<h1
					class="text-3xl md:text-5xl group-hover:scale-[1.15] group-hover:after:opacity-100 after:opacity-0 md:after:content-['_->'] md:origin-bottom-left transition-transform after:transition-[opacity] uppercase font-extrabold tracking-wider text-center md:text-left px-4 md:px-0 md:py-4"
				>
					{@html project.name}
				</h1>
			{/if}
			<h2
				class="text-xl font-semibold tracking-wide opacity-90 transition-transform group-hover:scale-[1.1] md:origin-top-left md:text-3xl"
			>
				{project.subtitle}
			</h2>
		</div>
		<div class="order-first flex w-full justify-end md:order-last ">
			<img
				src="../projects/{project.key}.png"
				alt=""
				loading="lazy"
				class="w-auto max-w-full object-cover p-16 transition-transform group-hover:scale-105 md:origin-right md:p-32"
			/>
		</div>
	</svelte:element>
</div>

<style>
	/* .blob-1 {
		mask-image: url(../blob.svg);
		mask-size: 200% 120%;
		mask-position: center;
		overflow: visible;
	} */
	.solid {
		mix-blend-mode: normal !important;
	}
</style>
