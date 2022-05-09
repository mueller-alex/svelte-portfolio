<script>
	import Button from '../components/button.svelte';
	import SocialLinks from '../components/social-links.svelte';
	import Icon from '@iconify/svelte';
	import { fly, fade } from 'svelte/transition';
	let words = ['design', 'build', 'launch'];
	let word = 'design';
	let index = 0;
	let icons = ['draw', 'construction', 'rocket_launch'];
	let icon = 'draw';
	setInterval(() => {
		// increase index by 1 and loop
		index = (index + 1) % words.length;
		word = words[index];
		icon = icons[index];
	}, 4000);
</script>

<div class="flex min-h-[40vh] w-full items-center 2xl:relative">
	<div
		class="mx-auto flex w-full flex-col items-stretch justify-center md:grid md:grid-cols-[8fr_3fr] md:items-center md:gap-x-4"
	>
		<div class="mt-48 flex flex-col items-start justify-center gap-6 md:m-0">
			<h1 class="flex flex-col text-5xl font-extrabold lowercase leading-tight tracking-widest">
				<div class="relative">
					{#key word}
						<!-- <span
							class=""
							in:fly={{ x: 50, duration: 1000, delay: 250 }}
							out:fly={{ x: -50, duration: 1000, delay: 250 }}
						>
							{word}
						</span> -->
						<span
							class="material-symbols-rounded absolute text-5xl leading-none"
							transition:fly={{ x: -30, duration: 500 }}
						>
							{icon}
						</span>
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
			<SocialLinks />
			<!-- <Button text="View Resume" classes="mt-4"/> -->
		</div>
		<!-- <div
			class="absolute -right-32 -top-16 -z-10 order-first ml-auto opacity-60 md:relative md:right-0 md:order-last md:py-16"
		>
			<img
				src="/flash.jpg"
				alt=""
				id="pfp"
				class="wobble aspect-square w-full object-cover outline outline-[32px] outline-mueller-100 saturate-[.9] dark:outline-mueller-900 md:origin-right md:scale-[1.75]"
				in:fade={{ intro: true, duration: 1000 }}
			/>
		</div> -->
	</div>
	<div class="pointer-events-none inset-0 w-full ">
		<div
			class="absolute -right-16 top-0 -z-10 order-first ml-auto aspect-square h-[60vw] max-h-[750px] min-h-[400px] opacity-90 transition-all sm:right-0 md:order-last 2xl:-top-32 "
		>
			<img
				src="/uconn.jpg"
				alt=""
				id="pfp"
				class="wobble w-full rounded-bl-[5rem] border-[1px] border-white/[.14] object-cover  mix-blend-multiply saturate-[0.9] transition-all  md:origin-right 2xl:rounded-b-[5rem]"
				in:fly={{ intro: true, x: 10 }}
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
