<script>
	import Button from '../components/button.svelte';
	import SocialLinks from '../components/social-links.svelte';
	export let noSocials = false;
	import Icon from '@iconify/svelte';
	import { fly, fade } from 'svelte/transition';
	let words = ['build', 'code', 'ship', 'design'];
	let word = 'build';
	let icons = ['build', 'code', 'rocket_launch', 'draw'];
	let icon = 'build';
	setInterval(() => {
		// increase index by 1 and loop
		let index = Math.floor(Math.random() * words.length);
		word === words[index] ? (index = (index + 1) % words.length) : (word = words[index]);
		icon === icons[index] ? (index = (index + 1) % icons.length) : (icon = icons[index]);
		word = words[index];
		icon = icons[index];
	}, 4000);
</script>

<div class="flex min-h-[40vh] max-w-full items-center ">
	<div
		class="mx-auto flex w-full flex-col items-center justify-center md:grid md:grid-cols-[3fr_2fr] md:items-center md:gap-x-4"
	>
		<div class="flex flex-col items-start justify-center md:block">
			<h1 class="flex flex-col text-5xl font-extrabold lowercase leading-tight tracking-widest">
				<!-- <span class="material-symbols-rounded text-5xl leading-none">
					<div class="animate-[bounce_7s_ease_infinite_reverse]">
						<div class="translate-y-3 -rotate-45">
							<Icon icon="uis:rocket" />
							<!-- <div class="-rotate-45  drop-shadow">rocket_launch</div> 
						</div>
					</div>
				</span> -->
				{#key word}
					<span
						class="material-symbols-rounded text-5xl leading-none"
						in:fly={{ x: -20, duration: 1000 }}
					>
						{icon}
					</span>
				{/key}
				<span>let's</span>
				{#key word}
					<span class="" in:fly={{ x: -20, duration: 1000, delay: 250 }}>
						{word}
					</span>
				{/key}
				<span>something</span>
			</h1>
			<p class="my-6 max-w-[min(100%,45ch)] text-xl font-medium leading-relaxed">
				I'm a UX engineer. I love taking apps from an idea to a fully fleshed out project.
			</p>
			{#if !noSocials}
				<SocialLinks />
			{/if}
			<!-- <Button text="View Resume" classes="mt-4"/> -->
		</div>
		<div
			class="order-first mx-auto max-w-[80%] pb-4 md:order-last md:mr-0 md:max-w-[100%] md:p-0 md:py-16"
		>
			<img
				src="/flash.jpg"
				alt=""
				id="pfp"
				class="wobble aspect-square w-full object-cover outline outline-[32px] outline-mueller-100 dark:outline-mueller-900 "
			/>
		</div>
	</div>
</div>

<!-- <img
	src="../pfpsmall.jpg"
	alt=""
	id="pfp"
	class="absolute -right-96 -top-48 opacity-40 mix-blend-hard-light outline outline-[32px] outline-mueller-100 grayscale dark:outline-mueller-900 "
/> -->
<style lang="sass">
	#pfp 
		mask-image: url(/blob.svg)
		mask-size: 115%
		mask-position: center
	.wobble
		// animation: wobble 3s infinite ease-in-out alternate
	@keyframes wobble 
		0%, 100% 
			transform: translate3d(0, 0, 0)
		50%
			transform: translate3d(-2px, 2px, 0) scale(.99)
</style>
