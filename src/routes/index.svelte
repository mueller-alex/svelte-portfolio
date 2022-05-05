<script lang="ts">
	import ProjectRow from './../components/project-row.svelte';
	import Card from './../components/card.svelte';
	import ProjectCard from './..//components/project-card.svelte';
	import SocialLinks from './../components/social-links.svelte';
	import Profile from '../components/profile.svelte';

	import Icon from '@iconify/svelte';
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { projects } from '../projects';
	import Home from '../components/home.svelte';
	let designList = projects.filter((x) => x.projectType == 'design' || x.projectType == 'both');
	let devList = projects.filter((x) => x.projectType == 'dev' || x.projectType == 'both');
</script>

<svelte:head>
	<title>muellr</title>
</svelte:head>
<div class="mx-auto max-w-screen-2xl px-6 md:pt-32">
	<Home />
	<Card
		class="my-12 flex w-max items-center gap-3 p-5 text-3xl font-extrabold uppercase tracking-[.35rem]"
	>
		<span class="material-symbols-rounded text-3xl"> code </span> Dev
	</Card>
</div>
{#each devList as project}
	<ProjectCard {project} />
{/each}

<!-- <div class="my-12 h-1 w-full rounded-full bg-stone-300 opacity-100 dark:bg-cobalt-900/80" /> -->
<div class="mx-auto max-w-screen-2xl px-6">
	<Card
		class="my-12 flex w-max items-center gap-3 p-5 text-3xl font-extrabold uppercase tracking-[.35rem]"
	>
		<span class="material-symbols-rounded text-3xl"> draw </span> Design
	</Card>
</div>

{#each designList as project}
	<ProjectCard {project} />
{/each}
