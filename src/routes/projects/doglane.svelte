<script lang="ts">
	import ArrowLink from './../../components/arrow-link.svelte';
	import MoreProjects from '../../components/more-projects.svelte';
	import Card from '../../components/card.svelte';
	import ProjectInfo from '../../components/project-info.svelte';
	import { page } from '$app/stores';
	import ProjectCard from '../../components/project-card.svelte';
	import type { Project } from '../../projects';
	import { projects } from '../../projects';
	let projectKey = 'doglane';
	let project = projects.find((x) => x.key === projectKey);
	let innerWidth;
	let shownProjects = projects
		.filter((x) => x.hidden == false)
		.filter((x) => x.key != projectKey)
		.sort(() => Math.random() - 0.5)
		.slice(0, 3);
</script>

<svelte:head>
	<title>{project.name} | muellr</title>
</svelte:head>
<div class="mx-auto flex w-full max-w-screen-2xl flex-col space-y-8 px-6">
	<h1 class="w-full font-space text-5xl font-bold leading-tight">{project.name}</h1>
	<p class="!mt-2 w-full text-2xl text-cobalt-100 opacity-70">School Project</p>
	<h3 class="font-space text-4xl font-extrabold lowercase tracking-widest">Overview</h3>
	<div class="flex gap-8 max-sm:flex-col">
		<ProjectInfo {project} />
		<p class="max-w-prose self-center text-lg leading-relaxed">
			Dog Lane Café is a small restaurant located in Storrs, CT. They specialize in
			European/American style dishes and offer a width variety of option for breakfast, lunch, or
			dinner. For my junior year Design Lab course, we were tasked to rebrand Dog Lane Café and then
			design and prototype an app for their business.
		</p>
	</div>
	<h3 class="font-space text-4xl font-extrabold lowercase tracking-widest">Branding</h3>
	<div class="grid gap-8 lg:grid-cols-2">
		<p class="max-w-prose text-lg leading-relaxed">
			Seeing as they're located in a college town, I thought it was important that Dog Lane feel up
			to date with the scenery around them. For this reason, I went with a very clean sans-serif
			font for the logo and tagline. I dropped the Cafe from their branding as it felt unnecessary;
			additionally, they identify themselves more as a restaurant than a cafe, seeing the kinds of
			food they serve. To me, the original branding felt like they were a Starbucks competitor,
			pretty much only selling coffee and a small dish here and there, but in reality, they do serve
			a lot of actual entrees to the point where you could go there and have a full meal. For this
			reason, I thought it was important to make the logo feel more like the restaurants around the
			area to communicate that Dog Lane is also a restaurant. I thought the 'Come. Sit. Stay.'
			branding from their website was being underutilized as it directly invites you in, but isn't
			in their logo at all. I think this slogan is good to have in the large logo but could be
			omitted for a solid bottom at smaller sizes. For the entire rebranding, keeping everything
			look modern was my main goal, which is why for the color palette I went with very bright and
			saturated colors, while still keeping the 'foody' and 'natural' vibes with orange and green.
		</p>
		<Card class="h-fit">
			<img src="/projectassets/doglane/4square.png" alt="" class="w-full rounded-xl" />
		</Card>
		<Card class="h-fit">
			<img src="/projectassets/doglane/coffee.png" alt="" class="w-full rounded-xl" />
		</Card>
		<Card class="h-fit">
			<img src="/projectassets/doglane/cups.png" alt="" class="w-full rounded-xl" />
		</Card>
	</div>
	<ArrowLink
		href="https://www.behance.net/gallery/92823559/Dog-Lane-Rebranding"
		text="View brand case study"
		rotate
	/>
	<h3 class="font-space text-4xl font-extrabold lowercase tracking-widest">App Design</h3>
	<p class="max-w-prose text-lg leading-relaxed">
		For the app design, I leaned heavily on Google's Material Design guidelines, along with a touch
		of personal branding. This means I get the neat layouts described by the guidelines, alongside
		the branding that makes the app feel personal enough to make someone want to use it. Using these
		existing components with defined spacing helps increase productivity versus having to create
		these components by hand.
		<br />
		<br />
		Navigation can make or break an application. For my app, I've gone with a simple, three destination
		navigation bar with tabs leading to Home: a place for hours and the location of the restaurant alongside
		any news updates; Order: a place to view the menu and order food; and Rewards: a place to track the
		rewards you've gained by ordering at Dog Lane in the past (Paw Points). These three destinations
		all have very clear purposes that make navigation clean and easy to use.
	</p>
	<Card class="h-fit">
		<img src="/projectassets/doglane/3screens.png" alt="" class="w-full rounded-xl" />
	</Card>
	<Card class="aspect-video">
		<iframe
			width="560"
			height="315"
			src="https://www.youtube-nocookie.com/embed/P8P39CxlLUE"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			class="h-full w-full rounded-xl"
		/>
	</Card>
	<ArrowLink
		href="https://www.figma.com/proto/0dZ76zmUk4QeGMXnWU867p/Dog-Lane-App?page-id=15%3A0&node-id=15%3A1005&viewport=334%2C455%2C0.16&scaling=scale-down&starting-point-node-id=15%3A1&hide-ui=1"
		text="View prototype"
		rotate
	/>
	<MoreProjects hide={projectKey} />
</div>

<style>
</style>
