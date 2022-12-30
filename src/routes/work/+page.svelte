<script lang="ts">
	import ProjectRow from '../../components/project-row.svelte';
	import Card from '../../components/card.svelte';
	import ProjectTile from '../../components/project-tile.svelte';
	// import Profile from './../components/profile.svelte';
	import SocialLinks from '../../components/social-links.svelte';

	import Icon from '@iconify/svelte';
	import { fade, fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { projects } from '../../projects';
	import Home from '../../components/home.svelte';
	let shownProjects = projects.filter((x) => x.hidden == false);
	let designList = shownProjects.filter(
		(x) => x.projectType == 'design' || x.projectType == 'both'
	);
	let devList = shownProjects.filter((x) => x.projectType == 'dev' || x.projectType == 'both');
</script>

<svelte:head>
	<title>Work | muellr.xyz</title>
</svelte:head>
<div class="mx-auto w-full max-w-screen-lg px-6">
	<h1 class="font-space text-6xl font-bold">
		<!-- <iconify-icon icon="mingcute:grid-fill" inline /> -->
		my work
	</h1>
	<div class="mt-8 grid auto-rows-auto grid-cols-1 gap-8 md:grid-cols-2">
		{#each shownProjects as project}
			<ProjectTile {project} />
		{/each}
	</div>
</div>
