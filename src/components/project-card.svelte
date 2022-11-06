<script lang="ts">
	export let noMargin = false;
	export let noLink = false;
	import type { Project } from '../projects';
	export let project: Project;
</script>

<svelte:element
	this={noLink ? 'div' : 'a'}
	id={project.key}
	href="/projects/{project.key}"
	class:hover:shadow-xl={!noLink}
	class:hover:translate-x-2={!noLink}
	class:group={!noLink}
	class="blob-1 flex min-h-[15vh] w-full flex-col justify-end rounded-3xl border border-white/[.10] border-opacity-10 text-white shadow-md transition-all duration-300 hover:shadow-black/20 md:flex-row md:rounded-[56px]"
	class:my-12={!noMargin}
	style:color={project.textColor}
	style:background-color={project.backgroundColor}
>
	<div
		class="blob-1 flex w-full flex-col items-center justify-center pt-4 pb-8 md:ml-16 md:items-start md:py-8 "
	>
		{#if noLink}
			<h1
				class="px-4 text-center text-3xl font-extrabold uppercase tracking-wider duration-300 group-hover:scale-[1.15] md:px-0 md:py-4 md:text-left md:text-5xl"
			>
				{@html project.name}
			</h1>
		{:else}
			<h1
				class="text-3xl md:text-5xl group-hover:scale-[1.15] group-hover:after:opacity-100 after:opacity-0 md:after:content-['_→'] md:origin-bottom-left transition-transform after:transition-[opacity] uppercase font-extrabold tracking-wider text-center md:text-left px-4 md:px-0 md:py-4 duration-300"
			>
				{@html project.name}
			</h1>
		{/if}
		<h2
			class="text-xl font-semibold tracking-wide opacity-90 transition-transform duration-300 group-hover:scale-[1.1] md:origin-top-left md:text-3xl"
		>
			{project.subtitle}
		</h2>
	</div>
	<div class="order-first flex max-h-full justify-center md:order-last ">
		<img
			src="../projects/{project.key}.png"
			alt=""
			loading="lazy"
			class="max-h-full w-auto origin-right object-cover py-4 px-16 md:p-16"
		/>
	</div>
</svelte:element>

<style>
	/* .blob-1 {
		mask-image: url(../blob.svg);
		mask-size: 200% 120%;
		mask-position: center;
		overflow: visible;
	} */
</style>
