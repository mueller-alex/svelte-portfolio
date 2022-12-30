<script>
	import { fade } from 'svelte/transition';
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
	let projectKey = 'leisurely';
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
	class="pointer-events-none fixed inset-0 -z-[49] h-screen w-screen bg-neutral-600 mix-blend-multiply"
	transition:fade
/>
<div class="mx-auto flex w-full max-w-screen-2xl flex-col space-y-8 px-6">
	<h1 class="w-full font-space text-5xl font-bold">{project.name}</h1>
	<p class="!mt-2 w-full text-2xl text-cobalt-100 opacity-70">Student Project</p>
	<h3 class="font-space text-4xl font-extrabold lowercase tracking-wide">Overview</h3>
	<div class="flex items-center gap-8 max-sm:flex-col">
		<ProjectInfo {project} />
		<p class="w-fit text-lg leading-relaxed lg:max-w-prose">
			In 2021, I was approached by a fellow UConn student who was looking to revolutionize the way
			we shop. He had come up with an innovative idea for an app that would take the traditional
			window shopping experience and make it mobile. The app, which he called "Leisurely," would
			gamify the process of looking for products, making it easier and more fun to find the items
			you love.
			<br /><br />
			Leisurely would aggregate online stores and allow users to browse a wide range of products, save
			them to a wishlist, and ultimately purchase them. The goal was to make shopping more efficient
			and enjoyable, and to help consumers find the products they want quickly and easily.
			<br /><br />
			I was thrilled to be brought on board to help develop the app and create a visual identity for
			the startup. Working closely with the founder, I crafted a sleek and modern design that would reflect
			the app's unique approach to shopping.
		</p>
		<p class="w-fit text-lg leading-relaxed lg:max-w-prose" />
	</div>
	<hr />
	<h3 class="font-space text-4xl font-bold lowercase leading-relaxed tracking-wide">Branding</h3>
	<div class="flex justify-between gap-8 max-sm:flex-col">
		<p class="w-fit text-lg leading-relaxed lg:max-w-prose">
			For the branding, I wanted to create something that would be simple, clean, and modern. I
			wanted to capture the essence of window shopping in the logo, so I came up with a design that
			was reminiscent of an awning you might see over a storefront. The outline-style logo was
			versatile and could be used at both small and large sizes. I started by creating the logo in
			black and white, and then experimented with a few different color combinations. However, when
			it came time to design the app's user interface, I decided to stick with a black and white
			color scheme. This helped to emphasize the products being showcased and gave the app a sleek,
			modern look.
		</p>
		<Card class="h-max w-full md:h-96">
			<div
				class="relative grid h-full w-full place-items-center overflow-clip rounded-xl border-[16px] border-black bg-white"
			>
				<img
					src="/projectassets/leisurely/logo.png"
					alt=""
					class="h-full w-full rounded-xl md:w-auto"
					loading="lazy"
				/>
			</div>
		</Card>
	</div>
	<h3 class="font-space text-4xl font-bold lowercase leading-relaxed tracking-wide">App Design</h3>
	<div class="flex justify-between gap-8 max-lg:flex-col">
		<p class="w-fit text-lg leading-relaxed lg:max-w-prose">
			When discussing the project with the client, he suggested a card-style interface that would
			allow users to easily browse through products. He suggested using a swipe left or right
			gesture to dismiss or save items to a wishlist, respectively. I thought this was a great idea,
			but decided to add a third option where users could swipe up to purchase a product directly
			from the app.
			<br /><br />
			In addition to the swipe gestures, I also incorporated a tap gesture that would allow users to
			view more information about a product, such as reviews, without having to leave the app. This would
			provide a seamless and convenient shopping experience for users.
			<br /><br />
			To create the design, I used Figma and the Material Design system. I focused on the design of the
			product card, which would feature images of the product, a star rating, a price, a description,
			and the store it was from. Once I had the card layout nailed down, I designed the rest of the app
			interface around it. I added buttons beneath the card as alternate triggers for the three actions,
			and then experimented with different looks until I settled on a bolder style that complemented
			the logo.
		</p>
		<div class="flex w-full items-center gap-4 max-sm:flex-col">
			<img
				src="/projectassets/leisurely/card.png"
				alt="Onboarding Flow"
				class="h-min w-full rounded-xl"
			/>
			<img src="/projectassets/leisurely/card2.png" alt="Onboarding Flow" class="h-min w-full" />
		</div>
	</div>
	<Card class="md:p-6">
		<img src="/projectassets/leisurely/screens.png" alt="Onboarding Flow" class="rounded-xl" />
	</Card>

	<Card class="aspect-video max-sm:hidden">
		<iframe
			loading="lazy"
			title="Landing Page Figma File"
			src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F3hZxdIKmSWdHoEKCBFbbNv%2FLeisurely-Prototype%3Fpage-id%3D0%253A1%26node-id%3D801%253A1580%26viewport%3D482%252C652%252C0.19%26scaling%3Dcontain%26starting-point-node-id%3D4%253A2239"
			allowfullscreen
			class="lazyload h-full w-full rounded-xl"
		/>
	</Card>
	<ArrowLink
		text="View prototype"
		rotate
		href="https://www.figma.com/proto/3hZxdIKmSWdHoEKCBFbbNv/Leisurely-Prototype?page-id=0%3A1&node-id=801%3A1580&viewport=482%2C652%2C0.19&scaling=contain&starting-point-node-id=4%3A2239&hide-ui=1"
	/>
	<MoreProjects hide={project.key} />
</div>

<style>
</style>
