<script>
	import AboutCard from './about-card.svelte';
	import Card from './card.svelte';
	import Button from '../components/button.svelte';
	import SocialLinks from '../components/social-links.svelte';
	import Icon from '@iconify/svelte';
	import { fly, fade } from 'svelte/transition';
	let words = ['design', 'build', 'launch'];
	let index = 0;
	let word = words[index];
	let icons = ['mingcute:pen-fill', 'mingcute:tool-fill', 'mingcute:rocket-fill'];
	let icon = icons[index];
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
					<div class="absolute" transition:fly={{ x: -30, duration: 500 }}>
						<iconify-icon {icon} />
					</div>
				{/key}
				<br />
			</div>
			<span>let's</span>
			<div class="relative">
				{#key word}
					<span class="absolute" transition:fly={{ x: -30, duration: 500 }}>
						{word}
					</span>
				{/key}
				<br />
			</div>
			<div class="flex">something</div>
		</h1>
		<SocialLinks class="w-full md:w-max" />
	</div>
</div>

<style>
	h1 {
		text-shadow: 0px 4px 24px rgba(0, 0, 0, 0.45);
	}
</style>
