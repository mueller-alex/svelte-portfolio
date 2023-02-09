<script lang="ts">
	import sourcery from '../../../lib/projects/sourcery';
	import ProjectPopulator from '$c/ProjectPopulator.svelte';
	import ProjectInfo from '$c/project-info.svelte';
	import MoreProjects from '$c/more-projects.svelte';
</script>

<svelte:head>
	<title>{sourcery.info.name} | muellr</title>
</svelte:head>
<div class="mx-auto flex w-full max-w-screen-2xl flex-col space-y-8 px-6">
	<h1 class="w-full font-space text-5xl font-bold">{sourcery.info.name}</h1>
	<p class="!mt-2 w-full text-2xl text-cobalt-100 opacity-70">{sourcery.info.subtitle}</p>
	<h3 class="font-space text-4xl font-extrabold lowercase tracking-wide">Overview</h3>
	<div class="flex items-center gap-8 max-sm:flex-col">
		<ProjectInfo project={sourcery} />
		<div class="space-y-4">
			{#each sourcery.info.overview as paragraph}
				<p class="w-fit text-lg leading-relaxed lg:max-w-prose">
					{paragraph}
				</p>
			{/each}
		</div>
	</div>
	<hr />
	<ProjectPopulator project={sourcery} />
	<MoreProjects hide={sourcery.id} />
</div>
