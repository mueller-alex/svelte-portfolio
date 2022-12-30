<script>
	import ArrowLink from '../../../components/arrow-link.svelte';
	import Card from '../../../components/card.svelte';
	import ProjectInfo from '../../../components/project-info.svelte';
	import MoreProjects from '../../../components/more-projects.svelte';
	import { projects } from '../../../projects';
	import { fade } from 'svelte/transition';
	let projectKey = 'charlesvr';
	let project = projects.find((x) => x.key === projectKey);
</script>

<svelte:head>
	<title>{project.name} | muellr</title>
</svelte:head>
<div
	id="tint"
	class="pointer-events-none fixed inset-0 -z-[49] h-screen w-screen bg-[#401221] mix-blend-multiply"
	transition:fade
/>
<div class="mx-auto flex w-full max-w-screen-2xl flex-col space-y-8 px-6">
	<h1 class="w-full font-space text-5xl font-bold">{project.name}</h1>
	<p class="!mt-2 w-full text-2xl text-cobalt-100 opacity-70">Greenhouse Studios</p>
	<h3 class="font-space text-4xl font-extrabold lowercase tracking-wide">Overview</h3>
	<div class="flex gap-8 max-sm:flex-col">
		<ProjectInfo {project} />
		<p class="w-fit text-lg leading-relaxed lg:max-w-prose">
			Charles VR is a virtual reality reconstruction of the coronation of Holy Roman Emperor Charles
			V in Bologna, Italy, in February of 1530. Complete with direct access to the scholarly and
			archival sources that informed our choices, Charles VR offers enthusiasts of art,
			architecture, history, music, religion, and virtual reality as well as students and scholars
			of those disciplines a multi-modal window into an event of world-historical importance.
			<br />
			<br />
			As the sole developer of the Charles VR showcase website, I was responsible for improving its overall
			functionality and user experience. Initially, my focus was on resolving existing bugs and enhancing
			the user experience. However, after working with the old codebase for some time, I decided to rebuild
			the website from scratch.
			<br /><br />
			This allowed me to create a more accessible and user-friendly platform, which was my primary goal.
			In addition to improving the website's functionality, I was also able to modernize the codebase,
			making it easier to maintain and update in the future. Overall, my efforts helped to enhance the
			user experience and position the website as a valuable resource for enthusiasts and scholars alike.
		</p>
	</div>
	<hr />
	<h3 class="font-space text-4xl font-bold lowercase leading-relaxed tracking-wide">Development</h3>
	<div class="grid gap-8 lg:grid-cols-2">
		<p class="max-w-prose text-lg leading-relaxed">
			As a member of the team, I was tasked with improving the website's overall functionality and
			user experience. When I joined the project, the website was built using basic HTML, CSS, and
			JavaScript, and it was clear that speed of development had been prioritized over
			maintainability and mobile accessibility.
			<br /><br />
			I worked on resolving existing bugs and enhancing the website's responsiveness, making it easier
			for users to navigate on mobile devices. To improve the developer experience and facilitate code
			reuse, I introduced Pug for templating and converted the CSS to SASS. This not only helped to ensure
			consistent styling across the site, but also made it easier to maintain and update in the future.
			Overall, my contributions helped to modernize the website and make it more user-friendly.
		</p>
		<Card class="h-fit">
			<img src="/projectassets/charlesvr/oldsite.png" alt="" class="rounded-xl" />
		</Card>
	</div>
	<ArrowLink
		href="https://greenhousestudios.github.io/charlesvr/chapter/1.html"
		text="View the current site"
		rotate
	/>
	<h3 class="font-space text-4xl font-bold lowercase leading-relaxed tracking-wide">
		Svelte Remake
	</h3>
	<div class="grid gap-8 lg:grid-cols-2">
		<p class="max-w-prose text-lg leading-relaxed">
			In an effort to improve the website's functionality and user experience, I decided to rebuild
			the site from the ground up using Svelte and TailwindCSS. My primary goals were to create a
			more consistent and responsive design, and to enhance the developer experience to make future
			updates and changes easier to implement.
			<br /><br />
			Svelte was a natural choice for me because of its "vanilla" feel and ease of use, which I believed
			would make it more accessible to future student developers. Its component-based structure also
			allowed me to reuse code across pages, providing greater consistency and making the development
			process more efficient. TailwindCSS was selected for its ability to create a cohesive design and
			its simplicity, which made it easy to work with. I also utilized SvelteKit, which enabled server-side
			rendering and other features that facilitated deployment.
			<br /><br />
			As of November 2022, the new site is still under development and has not yet been launched. However,
			I am confident that the improvements I have made will result in a significantly improved user experience
			and make the website easier to maintain in the future.
		</p>
		<Card class="h-fit">
			<img src="/projectassets/charlesvr/newsite.png" alt="" class="rounded-xl" />
		</Card>
	</div>
	<ArrowLink
		href="https://6245e6c0926b6c00088d9ab4--charlesvr2.netlify.app/"
		text="View the new site"
		rotate
	/>
	<MoreProjects hide="charlesvr" />
</div>

<style>
</style>
