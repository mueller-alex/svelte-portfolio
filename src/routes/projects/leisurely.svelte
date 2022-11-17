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
	let projectKey = 'leisurely';
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
	<p class="!mt-2 w-full text-2xl text-cobalt-100 opacity-70">Student Project</p>
	<h3 class="font-space text-4xl font-extrabold lowercase tracking-wide">Overview</h3>
	<div class="flex items-center gap-8 max-sm:flex-col">
		<ProjectInfo {project} />
		<p class="w-fit text-lg leading-relaxed lg:max-w-prose">
			In 2021, I was approached by a fellow UConn student to help him design an app for a startup he
			was working on. The app's premise was to take the window shopping experience mobile. By
			gamifying looking for products, the app would make it easier to find products that you like
			and want to buy. The app would aggregate online stores and allow users to browse products,
			save them to a wishlist, and ultimately purchase them. I was brought in to help design the app
			and create branding for the startup.
		</p>
		<p class="w-fit text-lg leading-relaxed lg:max-w-prose" />
	</div>
	<hr />
	<h3 class="font-space text-4xl font-bold lowercase leading-relaxed tracking-wide">Branding</h3>
	<div class="flex justify-between gap-8 max-sm:flex-col">
		<p class="w-fit text-lg leading-relaxed lg:max-w-prose">
			For the branding, I wanted to create something simple, clean, and modern. With the idea of
			window shopping in mind, I created a logo reminiscent of an awning you might see over a
			storefront. As a simple outline, the logo worked at both small and larger sizes. I started in
			black and white and tried a couple of color combinations, but when working on the app's UI, I
			decided to keep the brand colors solely black and white. This helped emphasize the products
			being showcased.
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
			When discussing the project with the client, he suggested a card-style interface, that users
			could swipe left or right to browse through. If the user swiped left, the product would
			dismiss. If the user swiped right, the product would be saved to their wishlist. I decided to
			go with this idea, but also add a third option, where the user could swipe up to buy it.
			Additionally, a user could tap the product card to view more information about it, such as
			reviews. This would allow users to view more information about a product without having to
			leave the app.
			<br />
			<br />

			As with most of my designs, I created an interface using Figma and the Material Design system.
			I started focusing on the design of the card. I wanted it to contain images of the product, a
			star rating, a price, a description, and which store the product is from. After nailing the
			layout that I wanted, I then designed the rest of the app interface around it. I added buttons
			beneath the card as alternate triggers for the 3 actions. After several iterations, I started
			straying away from Material Design and went for a bolder look, like the logo.
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
