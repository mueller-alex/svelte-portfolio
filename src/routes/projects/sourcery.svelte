<script>
	import ArrowLink from '../../components/arrow-link.svelte';

	import Sourcery from './sourcery.svelte';
	import Button from './../../components/button.svelte';
	import Card from './../../components/card.svelte';
	import { page } from '$app/stores';
	import ProjectInfo from '../../components/project-info.svelte';
	import ProjectTile from '../../components/project-tile.svelte';
	import MoreProjects from '../../components/more-projects.svelte';
	import Icon from '@iconify/svelte';
	import { projects } from '../../projects';
	let projectKey = 'sourcery';
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
	<h1 class="w-full font-space text-5xl font-bold">Sourcery</h1>
	<p class="!mt-2 w-full text-2xl text-cobalt-100 opacity-70">Greenhouse Studios</p>
	<h3 class="font-space text-4xl font-extrabold lowercase tracking-wide">Overview</h3>
	<div class="flex items-center gap-8 max-sm:flex-col">
		<ProjectInfo {project} />
		<p class="w-fit text-lg leading-relaxed lg:max-w-prose">
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
	<hr />
	<h3 class="font-space text-4xl font-bold lowercase leading-relaxed tracking-wide">
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
	<!-- <Card class="relative aspect-[9/16] sm:aspect-video">
		<iframe
			title="Login Flow Mockups"
			loading="lazy"
			src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9KJ8KYMuOhGVi9uBQngBBK%2FSourcery-Designs%3Fnode-id%3D132%253A346"
			class="h-full w-full rounded-xl"
			allowfullscreen
		/>
		<Card
			class="absolute left-6 top-6 flex h-12 items-center rounded-xl  bg-black/80 p-4 font-space lowercase backdrop-blur"
		>
			Click and drag
		</Card>
	</Card> -->

	<h3 class="font-space text-4xl font-extrabold lowercase tracking-wide">
		Landing and About Pages
	</h3>

	<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
		<p class="max-w-prose text-lg leading-relaxed">
			When I joined the team, the landing page was a simple page with a few links to the login and
			signup pages. It contained some illustrations and videos but had not been updated since the
			project initially launched many months prior, where little to no attention was paid to
			styling.
			<br />
			<br />
			Being a fresh pair of eyes, the team wanted a complete redesign of the landing page. With a list
			of requirements, I started by making a few mockups in Figma. I took inspiration from other small
			business landing pages, opting for a modern, professional feel to reflect the brand. With AutoLayout
			and components in Figma, I was able to quickly iterate on the design and come up with an initial
			draft I was happy with.
		</p>
		<Card class="h-fit">
			<img src="/projectassets/sourcery/landing1.png" alt="" class="rounded-xl" loading="lazy" />
		</Card>
		<p class="max-w-prose self-center text-lg leading-relaxed">
			After initially trying out icons for the highlighted features, I decided that illustrations
			would help to make the featureset more apparent at a glance, and sourced some illustrations
			from <a href="https://undraw.co" class="font-space underline">undraw.co</a> alongside some new
			copy.
			<br />
			<br />
			After a few rounds of feedback, I was able to finalize the design and implement it in the app.
		</p>
		<Card class="h-fit">
			<img src="/projectassets/sourcery/landing2.png" alt="" class="rounded-xl" loading="lazy" />
		</Card>
		<p class="max-w-prose text-lg leading-relaxed">
			After the landing page was finished, I ported the about page that was currently located in the
			app's interface to a public page so that you could get an idea for what Sourcery was without
			having to create an account first. The about page consisted of several questions and answers
			contained in dropdowns.
		</p>
		<Card class="h-fit">
			<img src="/projectassets/sourcery/about1.png" alt="" class="rounded-xl" loading="lazy" />
		</Card>
	</div>
	<h3 class="font-space text-2xl lowercase tracking-wide">Final mockup (scroll!)</h3>
	<Card class="aspect-video overflow-scroll">
		<img src="/projectassets/sourcery/landingfinal.png" alt="" class="w-full rounded-xl" />
	</Card>

	<h3 class="font-space text-4xl font-extrabold lowercase tracking-wide">Workshop Landing Page</h3>
	<p class="max-w-prose text-lg leading-relaxed">
		During 2020, Greenhouse Studios staff and the Northeastern University Library hosted a free
		virtual workshop series discussing remote access to archives and special collections, and any
		potential challenges or opportunities during COVID-19 lockdowns.
	</p>

	<Card>
		<img src="/projectassets/sourcery/workshopfinal.png" alt="" class="rounded-xl" />
	</Card>
	<ArrowLink
		href="https://workshops.sourceryapp.org/"
		text="view final site"
		underline={false}
		rotate
	/>
	<h3 class="font-space text-4xl font-extrabold lowercase tracking-wide">Organization Pages</h3>
	<p class="max-w-prose text-lg leading-relaxed">
		As Sourcery expanded to new regions and institutions, our partnered organizations needed to have
		home pages they could link to that would allow a user to request a document from any of their
		repositories. The page should include a banner image representing the organization, any relevant
		information, and a list of repositories. After playing around with some different styles, I
		landed on one that fit well with the rest of the application and accomplished all the goals we
		had set out for it.
	</p>
	<Card>
		<img src="/projectassets/sourcery/finalopage.png" alt="" class="rounded-xl" />
	</Card>
	<h3 class="font-space text-2xl lowercase tracking-wide">Iterations</h3>
	<Card class="aspect-[9/16] sm:aspect-video">
		<iframe
			loading="lazy"
			title="Organization Pages Figma File"
			src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9KJ8KYMuOhGVi9uBQngBBK%2FSourcery-Designs%3Fnode-id%3D1443%253A1947"
			allowfullscreen
			class="lazyload h-full w-full rounded-xl"
		/>
	</Card>
	<MoreProjects hide="sourcery" />
</div>

<style>
</style>
