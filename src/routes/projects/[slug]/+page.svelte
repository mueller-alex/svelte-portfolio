<script>
	import projects from '$lib/projects';
	import ProjectPopulator from '$c/ProjectPopulator.svelte';
	import ProjectInfo from '$c/project-info.svelte';
	import MoreProjects from '$c/more-projects.svelte';
	export let data;
	$: project = projects.find((project) => project.id === data.slug);
	$: if (!project) {
		throw new Error(`No project found with slug ${data.slug}`);
	}
</script>

<svelte:head>
	<title>{project.info.name} | muellr</title>
</svelte:head>
<div class="mx-auto flex w-full max-w-screen-2xl flex-col space-y-8 px-6">
	<h1 class="w-full font-space text-5xl font-bold">{project.info.name}</h1>
	<p class="!mt-2 w-full text-2xl text-cobalt-100 opacity-70">{project.info.subtitle}</p>
	<h3 class="font-space text-4xl font-extrabold lowercase tracking-wide">Overview</h3>
	<div class="flex items-center gap-8 max-sm:flex-col">
		<ProjectInfo {project} />
		<div class="space-y-4">
			{#each project.info.overview as paragraph}
				<p class="w-fit text-lg leading-relaxed lg:max-w-prose">
					{paragraph}
				</p>
			{/each}
		</div>
	</div>
	<hr />
	<ProjectPopulator {project} />
	<MoreProjects hide={project.id} />
</div>
