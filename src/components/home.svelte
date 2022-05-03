<script>
	import Button from '../components/button.svelte';
	import SocialLinks from '../components/social-links.svelte';
	export let noSocials = false;
	import Icon from '@iconify/svelte';
</script>

<div class="flex min-h-[40vh] max-w-full items-center ">
	<div
		class="mx-auto flex w-full flex-col items-center justify-center md:grid md:grid-cols-[3fr_2fr] md:items-center md:gap-x-4"
	>
		<div class="flex flex-col items-center justify-center md:block">
			<h1
				class="text-center text-5xl font-extrabold lowercase leading-snug tracking-widest md:text-left"
			>
				<span class="material-symbols-rounded text-5xl leading-none">
					<div class="animate-[bounce_7s_ease_infinite_reverse]">
						<div class="translate-y-3 -rotate-45">
							<Icon icon="uis:rocket" />
						</div>
						<!-- <div class="-rotate-45  drop-shadow">rocket_launch</div> -->
					</div>
				</span>
				<br class="sm:hidden" />let's ship something!
			</h1>
			<p
				class="my-6 max-w-[min(100%,45ch)] text-center text-xl font-medium leading-relaxed md:text-left"
			>
				I'm a UX engineer. I love taking apps from an idea to a fully fleshed out project.
			</p>
			{#if !noSocials}
				<SocialLinks />
			{/if}
			<!-- <Button text="View Resume" classes="mt-4"/> -->
		</div>
		<div class="order-first ml-auto max-w-[80%] pb-4 md:order-last md:max-w-[100%] md:p-0 md:py-16">
			<img
				src="../flash.jpg"
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
		mask-image: url(../blob.svg)
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
