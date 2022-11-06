<script>
	import ArrowLink from './../../components/arrow-link.svelte';
	import Sourcery from './sourcery.svelte';
	import Button from '../../components/button.svelte';
	import Card from '../../components/card.svelte';
	import { page } from '$app/stores';
	import ProjectInfo from '../../components/project-info.svelte';
	import ProjectTile from '../../components/project-tile.svelte';
	import MoreProjects from '../../components/more-projects.svelte';
	import Icon from '@iconify/svelte';
	import { projects } from '../../projects';
	let projectKey = 'charlesvr';
	let project = projects.find((x) => x.key === projectKey);
	let innerWidth;
	let shownProjects = projects
		.filter((x) => x.hidden == false)
		.filter((x) => x.key != projectKey)
		.sort(() => Math.random() - 0.5)
		.slice(0, 3);
</script>

<div class="mx-auto flex w-full max-w-screen-2xl flex-col space-y-8 px-6">
	<h1 class="w-full font-space text-5xl font-bold">{project.name}</h1>
	<p class="!mt-2 w-full text-2xl text-cobalt-100 opacity-70">Greenhouse Studios</p>
	<h3 class="font-space text-4xl font-extrabold lowercase tracking-wide">Overview</h3>
	<div class="flex items-center gap-8 max-sm:flex-col">
		<ProjectInfo {project} />
		<p class="w-fit text-lg leading-relaxed lg:max-w-prose">
			Charles VR is a virtual reality reconstruction of the coronation of Holy Roman Emperor Charles
			V in Bologna, Italy, in February of 1530. Complete with direct access to the scholarly and
			archival sources that informed our choices, Charles VR offers enthusiasts of art,
			architecture, history, music, religion, and virtual reality as well as students and scholars
			of those disciplines a multi-modal window into an event of world-historical importance.
			<br />
			<br />
			I worked on CharlesVR as the sole developer for the showcase website. Initially, I was focused
			on fixing bugs and improving the user experience. However, after working with an old codebase for
			long enough, I took it upon myself to remake the entire website from scratch. I wanted to make
			the website more accessible and easier to use.
		</p>
	</div>
	<hr />
	<h3 class="font-space text-4xl font-bold lowercase leading-relaxed tracking-wide">Development</h3>
	<div class="grid gap-8 lg:grid-cols-2">
		<p class="max-w-prose text-lg leading-relaxed">
			When I joined the project, the website was built using vanilla HTML, CSS, and JavaScript.
			Being a relatively new project, the website was built quickly rather than being built with
			maintainability in mind. The website was also built with a desktop-first approach, which made
			it difficult for mobile users to navigate the website. Much of my work was spent fixing old
			bugs and adapting the site to be more responsive and easier to maintain. One of the changes I
			implemented was using Pug for templating. This allowed me to reuse code and improved the
			developer experience greatly. I also started converting the CSS to SASS to provide greater
			consistency for styling across pages, as the current CSS approach was effectively inline
			styling for each element.
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
			After fixing bugs and diagnosing CSS issues for a while, I took it upon myself to rebuild the
			site from scratch with a few goals in mind: consistent and responsive styling across all
			pages, and a greatly increased developer experience, allowing for much easier changes in the
			future. With these goals in mind, I chose to use Svelte and TailwindCSS. Svelte is a
			JavaScript framework with a far more 'vanilla' feel than something like React or Vue. In
			addition to just enjoying using Svelte personally, I knew that this 'vanilla' feel would make
			it easier for future student developers to work on the site in the future. Using Svelte
			allowed for far more consistency as well, as I could reuse components across pages, rather
			than having to reimplement the same code over and over again like I had to do with the old
			site. TailwindCSS was chosen for its ease of use and its ability to provide a consistent look
			across the site. I also used SvelteKit, which is a framework built on top of Svelte that
			allows for server-side rendering and other features that make it easier to deploy the site.
			<br />
			<br />
			As of November 2022, the new site is still in development and is yet to be deployed publicly.
		</p>
		<Card>
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
