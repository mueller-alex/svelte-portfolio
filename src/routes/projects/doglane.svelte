<script lang="ts">
	import { fade } from 'svelte/transition';
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
<div
	id="tint"
	class="pointer-events-none fixed inset-0 -z-[49] h-screen w-screen bg-[#774a32] mix-blend-multiply"
	transition:fade
/>
<div class="mx-auto flex w-full max-w-screen-2xl flex-col space-y-8 px-6">
	<h1 class="w-full font-space text-5xl font-bold leading-tight">{project.name}</h1>
	<p class="!mt-2 w-full text-2xl text-cobalt-100 opacity-70">School Project</p>
	<h3 class="font-space text-4xl font-extrabold lowercase tracking-widest">Overview</h3>
	<div class="flex gap-8 max-sm:flex-col">
		<ProjectInfo {project} />
		<p class="max-w-prose self-center text-lg leading-relaxed">
			Dog Lane Café is a small, locally-owned restaurant located in the town of Storrs, Connecticut.
			They are known for their European and American-style dishes, which are available for
			breakfast, lunch, and dinner. As part of my junior year Design Lab course, we were tasked with
			rebranding Dog Lane Café and designing and prototyping an app for the business. The goal of
			the rebranding project was to give the restaurant a fresh, modern look that would attract new
			customers and establish the restaurant as a go-to destination. The app was designed to enhance
			the customer experience and make it easier for people to find out about the restaurant, view
			menus and specials, make reservations, and place orders. Overall, the rebranding and app
			development project was an exciting opportunity for the students to put their design skills to
			the test.
		</p>
	</div>
	<h3 class="font-space text-4xl font-extrabold lowercase tracking-widest">Branding</h3>
	<div class="grid gap-8 lg:grid-cols-2">
		<p class="max-w-prose text-lg leading-relaxed">
			As a user experience designer, I wanted to ensure that the branding for Dog Lane felt
			up-to-date and in line with its college town surroundings. When I first looked at their
			branding, I felt that it was lacking in a number of areas. The font they were using for their
			logo and tagline was not particularly modern or engaging, and the inclusion of the word "Cafe"
			in their branding felt unnecessary and outdated.
			<br /><br />
			After conducting some research, I realized that they were much more than just a cafe. They offer
			a variety of entrees and can be considered a full-service restaurant. This led me to update their
			branding to better reflect this. I decided to use a clean sans-serif font for the logo and tagline,
			and dropped the "Cafe" from their branding altogether.
			<br /><br />
			In order to make the logo feel more in line with the other restaurants in the area, I gave it a
			more modern, sleek design. I also incorporated their "Come. Sit. Stay." branding from their website
			into the logo, as it directly invites customers in and adds a friendly, welcoming touch. For the
			color palette, I chose bright, saturated colors that still maintained the "foody" and "natural"
			vibes with orange and green.
			<br /><br />
			Overall, my goal was to create a modern, cohesive brand for Dog Lane that accurately reflected
			their offerings as a full-service restaurant. I believe that the updated branding will help them
			stand out in their college town and attract a wider range of customers.
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
		For the app design, I leaned heavily on Google's Material Design guidelines and incorporated
		elements of personal branding to create a cohesive, user-friendly experience. Using these
		existing components with defined spacing helped increase my productivity and allowed me to focus
		on other aspects of the design.
		<br /><br />
		Navigation is an essential component of any successful app, and I took care to create a simple, intuitive
		navigation bar for my design. The navigation bar features three destinations: Home, Order, and Rewards.
		The Home tab provides users with important information about the location and hours of the restaurant,
		as well as any news updates. This is a crucial component of the app, as it allows users to easily
		find and visit the restaurant in person.
		<br /><br />
		The Order tab is where users can view the menu and place orders. This is an important feature of
		the app, as it allows users to conveniently order food from the restaurant without having to visit
		in person. The menu is organized in a clear, easy-to-navigate manner, making it simple for users
		to find and order their favorite dishes.
		<br /><br />
		Finally, the Rewards tab is where users can track the rewards they've earned through their past orders
		at Dog Lane (Paw Points). This is a great way to incentivize repeat business and reward loyal customers.
		The rewards system is easy to use and allows users to quickly see how many rewards they've earned
		and what they can redeem them for.
		<br /><br />
		Overall, the navigation system I designed for the Dog Lane app is clean, intuitive, and easy to use.
		It provides users with quick access to all of the information and features they need, making their
		experience with the app enjoyable and convenient.
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
