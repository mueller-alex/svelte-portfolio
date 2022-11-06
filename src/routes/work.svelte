<script lang="ts">
	import ProjectRow from './../components/project-row.svelte';
	import Card from './../components/card.svelte';
	import ProjectTile from './../components/project-tile.svelte';
	// import Profile from './../components/profile.svelte';
	import SocialLinks from './../components/social-links.svelte';

	import Icon from '@iconify/svelte';
	import { fade, fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { projects } from '../projects';
	import Home from './../components/home.svelte';
	let shownProjects = projects.filter((x) => x.hidden == false);
	let designList = shownProjects.filter(
		(x) => x.projectType == 'design' || x.projectType == 'both'
	);
	let devList = shownProjects.filter((x) => x.projectType == 'dev' || x.projectType == 'both');
</script>

<div class="mx-auto w-full max-w-screen-3xl px-6">
	<div class="mt-8 grid auto-rows-auto grid-cols-1 gap-8 md:grid-cols-3">
		{#each shownProjects as project}
			<ProjectTile {project} />
		{/each}
	</div>
</div>
