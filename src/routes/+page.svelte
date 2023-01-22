<script lang="ts">
	import ProjectTile from '$c/project-tile.svelte';
	import { projects } from '../projects';
	import Home from '$c/home.svelte';
	let shownProjects = projects.filter((x) => !x.hidden);
</script>

<svelte:head>
	<title>muellr</title>
</svelte:head>
<div class="mx-auto w-full max-w-screen-3xl px-6">
	<Home />

	<div
		class="mt-8 grid auto-rows-auto grid-cols-1 gap-8 md:grid-cols-[repeat(auto-fill,minmax(355px,1fr))]"
	>
		{#each shownProjects as project}
			<ProjectTile {project} />
		{/each}
	</div>
</div>
