<script>
	import Button from '../components/button.svelte';
	import SocialLinks from '../components/social-links.svelte';
	export let noSocials = false;
	import Icon from '@iconify/svelte';
</script>

<div class="flex min-h-[40vh] w-screen  max-w-full items-center">
	<div
		class="mx-auto flex max-w-full flex-col items-center justify-center md:grid md:grid-cols-[3fr_2fr] md:items-center md:gap-x-4"
	>
		<div class="flex flex-col items-center justify-center md:block">
			<h1
				class="text-center text-5xl font-extrabold lowercase leading-snug tracking-widest md:text-left"
			>
				<!-- <div id="waving" class="inline-block">
					<Icon icon="twemoji:call-me-hand" hFlip={true} />
				</div> -->
				<div id="waving" class="inline-block">👋</div>
				<br class="md:hidden" /> Hi, I'm Alex!
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
		<div class="order-first mx-auto max-w-[80%] pb-4 md:order-last md:max-w-[100%] md:p-0 md:py-16">
			<img
				src="../pfpsmall.jpg"
				alt=""
				id="pfp"
				class="outline outline-[32px] outline-mueller-100 dark:outline-mueller-900"
			/>
		</div>
	</div>
</div>

<style lang="sass">
	@keyframes wave 
		0% 
			transform: rotate(  0.0deg)
		
		10% 
			transform: rotate(-20.0deg)
		
		20% 
			transform: rotate( 20.0deg)
		
		30% 
			transform: rotate(-20.0deg)
		
		40% 
			transform: rotate(  9.0deg)
		
		50% 
			transform: rotate(  0.0deg)
		
		100% 
			transform: rotate(  0.0deg)
	#waving 
		@media ( prefers-reduced-motion: no-preference ) 
			animation-name: wave
			animation-duration: 3.5s
			animation-iteration-count: infinite
			transform-origin: 70% 70%
	#pfp 
		mask-image: url(../blob.svg)
		mask-size: 115%
		mask-position: center
</style>
