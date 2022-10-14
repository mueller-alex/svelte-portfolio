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
	<title>{project.name} | muellr</title>
</svelte:head>
<div class="h-32" />
<div class="mx-auto w-full max-w-screen-2xl">
	<ProjectCard {project} noLink />
	<ProjectInfo {project}>
		
	</ProjectInfo>
</div>
