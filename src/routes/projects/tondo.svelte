<script lang="ts">
	import MoreProjects from './../../components/more-projects.svelte';
	import Card from '../../components/card.svelte';
	import ProjectInfo from '../../components/project-info.svelte';
	import { page } from '$app/stores';
	import ProjectCard from '../../components/project-card.svelte';
	import type { Project } from '../../projects';
	import { projects } from '../../projects';
	let projectKey = 'tondo';
	let project = projects.find((x) => x.key === projectKey);
	let innerWidth;
	let shownProjects = projects
		.filter((x) => x.hidden == false)
		.filter((x) => x.key != 'sourcery')
		.sort(() => Math.random() - 0.5)
		.slice(0, 3);
</script>

<svelte:head>
	<title>{project.name} | muellr</title>
</svelte:head>
<div class="mx-auto flex w-full max-w-screen-2xl flex-col space-y-8 px-6">
	<!-- <Card class="grid grid-cols-2 gap-4 rounded-[42px] p-5 sm:grid-cols-4 md:p-6 xl:rounded-[56px]">
		{#each Array(8) as _, index}
			<img
				src="/projectassets/tondo/icon{index + 1}.png"
				alt="Tondo Icon"
				class="transition-transform hover:scale-105"
			/>
		{/each}
	</Card> -->
	<h1 class="w-full font-space text-5xl font-bold">{project.name}</h1>
	<p class="!mt-2 w-full text-2xl text-cobalt-100 opacity-70">Personal Project</p>
	<h3 class="font-space text-4xl font-extrabold lowercase tracking-widest">Overview</h3>
	<div class="flex gap-8 max-sm:flex-col">
		<ProjectInfo {project} />
		<p class="max-w-prose self-center text-lg leading-relaxed">
			Tondo is a a personal project that I started in 2015. It's an icon pack for Android inspired
			by the Material Design guidelines, but wrapped inside an iOS-like squircle. I created Tondo
			after receiving positive feedback about my first icon pack, LollyDrop, which also used the
			then-newly introduced Material Design guidelines. I used Adobe Illustrator along with a base
			template that I had created in order to make icons quicker. Overtime, the squircle got a bit
			more squircle-y, and the quality of the icons increased as my skills did.
		</p>
	</div>
	<h3 class="font-space text-4xl font-extrabold lowercase tracking-widest">Early Designs (2015)</h3>
	<Card
		class="grid grid-cols-2 place-items-center rounded-[42px] p-2 sm:grid-cols-4 md:grid-cols-8 md:p-3 xl:rounded-[56px]"
	>
		{#each Array(8) as _, index}
			<img
				src="/projectassets/tondo/early ({index + 1}).png"
				alt="Tondo Icon"
				class="transition-transform hover:scale-105"
			/>
		{/each}
	</Card>
	<h3 class="font-space text-4xl font-extrabold lowercase tracking-widest">
		Transition to Squircle (2016)
	</h3>
	<Card
		class="grid grid-cols-2 place-items-center rounded-[42px] p-2 sm:grid-cols-4 md:grid-cols-8 md:p-3 xl:rounded-[56px]"
	>
		{#each Array(8) as _, index}
			<img
				src="/projectassets/tondo/squircle ({index + 1}).png"
				alt="Tondo Icon"
				class="transition-transform hover:scale-105"
			/>
		{/each}
	</Card>
	<h3 class="font-space text-4xl font-extrabold lowercase tracking-widest">Tondo Renewed (2017)</h3>
	<p class="max-w-prose text-lg leading-relaxed">
		After taking a break in 2016, I restarted the Tondo project, now working in Figma. Over the
		years, I've expanded Tondo's iconset to around 200 icons.
	</p>
	<Card class="overflow-clip p-0">
		<img src="/projectassets/tondo/tondopres.png" alt="Onboarding Flow" class="w-full" />
	</Card>
	<Card
		class="grid grid-cols-2 gap-4 rounded-[42px] p-5 sm:grid-cols-4 md:grid-cols-8 md:p-6 xl:rounded-[56px]"
	>
		{#each Array(16) as _, index}
			<img
				src="/projectassets/tondo/icon{index + 1}.png"
				alt="Tondo Icon"
				class="transition-transform hover:scale-105"
			/>
		{/each}
	</Card>
	<Card class="aspect-[9/16] sm:aspect-video">
		<iframe
			title="All Tondo Renewed Icons"
			src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FZ2jiLu1etSYHdHKEpVrIXi%2FAll-Icons%3Fnode-id%3D0%253A1"
			allowfullscreen
			class=" h-full w-full rounded-xl"
		/>
	</Card>
	<MoreProjects hide="tondo" />
</div>

<style>
</style>
