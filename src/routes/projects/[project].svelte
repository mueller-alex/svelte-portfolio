<script lang="ts">
	import Card from './../../components/card.svelte';
	import ProjectInfo from '../../components/project-info.svelte';
	import { page } from '$app/stores';
	import ProjectCard from '../../components/project-card.svelte';
	import type { Project } from '../../projects';
	import { projects } from '../../projects';
	let projectKey = $page.params.project;
	let project = projects.find((x) => x.key === projectKey);
</script>

<svelte:head>
	<title>{project.name} | muellr</title>
</svelte:head>
<div class="mx-auto flex w-full max-w-screen-2xl flex-col space-y-8 px-6">
	<h1 class="w-full font-space text-5xl font-bold">{project.name}</h1>
	<p class="!mt-2 w-full text-2xl text-cobalt-100 opacity-70">Greenhouse Studios</p>
	<h3 class="font-space text-4xl font-extrabold uppercase tracking-widest">Overview</h3>
	<div class="flex gap-8 max-sm:flex-col">
		<ProjectInfo {project} />
		<p class="max-w-prose self-center text-lg leading-relaxed">
			Sourcery is a not-for-profit service that gives researchers access to documents that can't be
			found online by paying other researchers <span class="font-space">(Sourcerers)</span>
			to find them. It aims to streamline the process that researchers go through by providing a simple
			platform that works at any collecting institution in the service area (New York City, Boston, and
			Storrs, with expansion plans).
			<br />
			<br />
			I joined the Sourcery team in February 2020, and after familiarizing myself with the codebase,
			I was tasked with designing and implementing several new features. I also helped migrate the application
			from an older deprecated component library to a newer one. These changes both made the app easier
			to build and visually more pleasing.
		</p>
	</div>
	<h3 class="font-space text-4xl font-bold uppercase leading-relaxed tracking-widest">
		Onboarding Flow
	</h3>
	<p class="max-w-prose text-lg leading-relaxed">
		One of my first features to work on was a new onboarding flow for new users. In Sourcery, there
		are two types of users: Researchers and Sourcerers. This distinction was required in the backend
		and was mostly used to determine if a user needed a payment method on file or not. To tackle
		this issue, I started by making several high-fidelity mockups in Figma. After figuring out
		generally how I wanted the flow to operate, I then started to focus more on the presentation of
		certain details, such as informing the user of the difference between the two roles, or if they
		would need payment information. I eventually landed on the design below with some collaboration
		with the design lead on the project. I then implemented the design in the app using our
		JavaScript framework of choice, Vue, alongside our component library, Vuetify.
		<br />
		<br />
		After the start of the COVID-19 pandemic, Sourcery pivoted to a free payment model, and this onboarding
		flow is no longer active.
	</p>
	<p class="max-w-prose text-lg leading-relaxed" />
	<Card class="p-6" backgroundColor="#161023">
		<img src="/projectassets/sourcery/loginflow.png" alt="Onboarding Flow" class="rounded-xl" />
	</Card>
	<Card class="aspect-[9/16] md:aspect-video">
		<iframe
			title="Login Flow Mockups"
			src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9KJ8KYMuOhGVi9uBQngBBK%2FSourcery-Designs%3Fnode-id%3D132%253A346"
			class="h-full w-full rounded-xl"
			allowfullscreen
		/>
	</Card>
	<h3 class="font-space text-4xl font-extrabold uppercase tracking-widest">
		Workshop Landing Page
	</h3>
	<p class="max-w-prose text-lg leading-relaxed">During 2020, Greenhouse Studios</p>

	<Card>
		<img src="/projectassets/sourcery/finalopage.png" alt="" class="rounded-xl" />
	</Card>
	<Card class="aspect-[9/16] md:aspect-video">
		<iframe
			style="border: 1px solid rgba(0, 0, 0, 0.1);"
			title="Organization Pages Figma File"
			src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9KJ8KYMuOhGVi9uBQngBBK%2FSourcery-Designs%3Fnode-id%3D1443%253A1947"
			allowfullscreen
			class=" h-full w-full rounded-xl"
		/>
	</Card>
	<h3 class="font-space text-4xl font-extrabold uppercase tracking-widest">Organization Pages</h3>
	<p class="max-w-prose text-lg leading-relaxed">During our pivot to a</p>

	<Card>
		<img src="/projectassets/sourcery/finalopage.png" alt="" class="rounded-xl" />
	</Card>
	<Card class="aspect-[9/16] md:aspect-video">
		<iframe
			style="border: 1px solid rgba(0, 0, 0, 0.1);"
			title="Organization Pages Figma File"
			src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9KJ8KYMuOhGVi9uBQngBBK%2FSourcery-Designs%3Fnode-id%3D1443%253A1947"
			allowfullscreen
			class=" h-full w-full rounded-xl"
		/>
	</Card>
</div>

<style>
</style>
