<script lang="ts">
	import ProjectInfo from '../../components/project-info.svelte';
	import ProjectCard from '../../components/project-card.svelte';
	import type { Project } from '../../projects';
	import { projects } from '../../projects';
	import { page } from '$app/stores';
	let projectKey = $page.params.project;
	let project = projects.find((x) => x.key === projectKey);
</script>

<svelte:head>
	<title>{project.name} | ALMR Design</title>
</svelte:head>
<ProjectCard {project} noLink noMargin />
<ProjectInfo {project}>
	<div class="space-y-4" slot="overview">
		{#each project.overview as p}
			<p class="max-w-prose leading-relaxed">{p}</p>
		{/each}
	</div>
</ProjectInfo>
