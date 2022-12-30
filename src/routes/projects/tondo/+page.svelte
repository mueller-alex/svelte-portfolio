<script lang="ts">
	import { fade } from 'svelte/transition';
	import MoreProjects from '../../../components/more-projects.svelte';
	import Card from '../../../components/card.svelte';
	import ProjectInfo from '../../../components/project-info.svelte';
	import { page } from '$app/stores';
	import ProjectCard from '../../../components/project-card.svelte';
	import type { Project } from '../../../projects';
	import { projects } from '../../../projects';
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
<div
	id="tint"
	class="pointer-events-none fixed inset-0 -z-[49] h-screen w-screen bg-[#264475] mix-blend-multiply"
	transition:fade
/>
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
			Tondo is a personal project that I started in 2015. It's an icon pack for Android that is
			inspired by the Material Design guidelines, but has a unique twist - the icons are wrapped in
			an iOS-like squircle shape.
			<br /><br />
			I came up with the idea for Tondo after receiving positive feedback about my first icon pack, LollyDrop.
			LollyDrop was also based on the Material Design guidelines, and I wanted to build on that success
			with a new and unique icon pack.
			<br /><br />
			To create the icons for Tondo, I used Adobe Illustrator and a base template that I had created
			to make the process faster and more efficient. Over time, the squircle shape became more pronounced,
			and the quality of the icons improved as my skills grew.
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
		After taking a break from the Tondo project in 2016, I decided to restart it and begin working
		on new icons. This time, I chose to use Figma as my design tool, which allowed me to work more
		efficiently and quickly iterate on my designs.
		<br /><br />
		Over the years, I've steadily expanded Tondo's iconset to include over 200 icons. This has required
		a lot of hard work and dedication, but it's been a rewarding experience. I've been able to continue
		developing my skills as a designer, and I'm proud of the final product.
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
