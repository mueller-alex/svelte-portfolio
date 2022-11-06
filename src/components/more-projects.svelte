<script>
	import ArrowLink from './arrow-link.svelte';
	import ProjectTile from './project-tile.svelte';
	import Icon from '@iconify/svelte';
	import { projects } from './../projects.ts';
	export let hide;
	let shownProjects = projects
		.filter((x) => x.hidden == false)
		.filter((x) => x.key != hide)
		.sort(() => Math.random() - 0.5)
		.slice(0, 3);
</script>

<hr />
<ArrowLink href="/work" text="View all projects" target="" />
<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
	{#each shownProjects as project}
		<ProjectTile {project} />
	{/each}
</div>
