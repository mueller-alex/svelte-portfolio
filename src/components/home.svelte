<script>
	import AboutCard from './about-card.svelte';
	import Card from './card.svelte';
	import Button from '../components/button.svelte';
	import SocialLinks from '../components/social-links.svelte';
	import Icon from '@iconify/svelte';
	import { fly, fade } from 'svelte/transition';
	let words = ['design', 'build', 'launch'];
	let word = 'design';
	let index = 0;
	let icons = ['ic:round-design-services', 'ic:round-construction', 'ic:round-rocket-launch'];
	let icon = 'ic:round-design-services';
	setInterval(() => {
		// increase index by 1 and loop
		index = (index + 1) % words.length;
		word = words[index];
		icon = icons[index];
	}, 4000);
</script>

<div class="grid w-full grid-cols-1 grid-rows-2 items-center gap-8 md:grid-cols-2 md:grid-rows-1">
	<AboutCard class="md:order-last" />
	<div class="flex w-full flex-col items-start justify-center gap-6">
		<h1
			class="flex flex-col font-space text-5xl font-extrabold lowercase leading-tight tracking-widest"
		>
			<div class="relative">
				{#key word}
					<!-- <span
							class=""
							in:fly={{ x: 50, duration: 1000, delay: 250 }}
							out:fly={{ x: -50, duration: 1000, delay: 250 }}
						>
							{word}
						</span> -->
					<div class="absolute" transition:fly={{ x: -30, duration: 500 }}>
						<iconify-icon {icon} />
					</div>
				{/key}
				<br />
			</div>
			<span>let's</span>
			<div class="relative">
				{#key word}
					<!-- <span
							class=""
							in:fly={{ x: 50, duration: 500, delay: 250 }}
							out:fly={{ x: -50, duration: 500, delay: 250 }}
						>
							{word}
						</span> -->
					<span class="absolute" transition:fly={{ x: -30, duration: 500 }}>
						{word}
					</span>
				{/key}
				<br />
			</div>
			<div class="flex">
				something
				<!-- <span class="inline-block animate-[bounce_3s_ease_infinite_reverse]">.</span>
					<span class="inline-block animate-[bounce_3s_250ms_ease_infinite]">.</span>
					<span class="inline-block animate-[bounce_3s_500ms_ease_infinite]">.</span> -->
			</div>
		</h1>
		<!-- <p class="my-6 max-w-[min(100%,45ch)] text-xl font-medium leading-relaxed">
				I'm a UX engineer. I love taking apps from an idea to a fully fleshed out project.
			</p> -->
		<SocialLinks class="w-full md:w-max" />
		<!-- <Button text="View Resume" classes="mt-4"/> -->
	</div>
</div>

<!-- <img
	src="../pfpsmall.jpg"
	alt=""
	id="pfp"
	class="absolute -right-96 -top-48 opacity-40 mix-blend-hard-light outline outline-[32px] outline-mueller-100 grayscale dark:outline-mueller-900 "
/> -->
<style lang="sass">
	// #pfp 
	// 	mask-image: url(/blob.svg)
	// 	mask-size: 121%
	// 	mask-position: center
	.wobble
		// animation: wobble 3s infinite ease-in-out alternate
	@keyframes wobble 
		0%, 100% 
			transform: translate3d(0, 0, 0)
		50%
			transform: translate3d(-2px, 2px, 0) scale(.99)
</style>
