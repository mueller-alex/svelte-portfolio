<script>
	import Footer from './../components/footer.svelte';
	import { base, assets } from '$app/paths';
	import '../app.css';
	let y = 0;
	let shrunk = false;
	$: {
		shrunk = y > 0 ? true : false;
	}
</script>

<svelte:window bind:scrollY={y} />
<div>
	<nav class="w-full h-32 sticky top-0 transition-all bg-transparent z-50" class:shrunk>
		<div class="flex max-w-7xl mx-auto px-6 items-center justify-between h-full transition-all">
			<a href="/">
				<svg
					class="transition-all"
					width="48"
					height="48"
					viewBox="0 0 129 129"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M91.2209 109.136C90.4412 108.668 89.8553 107.936 89.5698 107.073L65.2842 33.6322C64.9573 32.6436 63.5603 32.6391 63.227 33.6255L38.4016 107.089C38.1133 107.942 37.5308 108.665 36.7584 109.128L5.81014 127.695C2.549 129.651 -1.2435 126.13 0.46685 122.734L61.0574 2.41476C62.4642 -0.378661 66.4567 -0.367443 67.8477 2.43384L127.627 122.823C129.313 126.219 125.526 129.716 122.274 127.765L91.2209 109.136Z"
						fill="currentColor"
					/>
				</svg>
			</a>
			<div class="space-x-3">
				<a
					href="/#sourcery"
					class="font-bold uppercase tracking-widest text-xl p-4 pb-[14px] hover:dark:bg-white/10 rounded-lg transition-colors"
				>
					Work
				</a>
				<a
					href="/about"
					class="font-bold uppercase tracking-widest text-xl p-4 pb-[14px] hover:dark:bg-white/10 rounded-lg transition-colors"
				>
					About
				</a>
			</div>
		</div>
	</nav>
	<div id="app-container" class="max-w-7xl mx-auto px-6">
		<slot />
	</div>
</div>
<Footer />

<style lang="sass">
	@use './static/colors/ui-colors.scss' as u
	:global(:root)
		scrollbar-color: dark
	
	.shrunk 
		height: 64px
		background: rgba(255, 255, 255, 0.95)
		@media (prefers-color-scheme: dark)
			background: hsla(200, 7%, 8%, 1)
		backdrop-filter: blur(20px) !important
		svg
			height: 32px
			width: 32px
	
	:global(#svelte), :global(body) 
		min-height: 100%
		display: grid
		grid-template-rows: 1fr auto
	
	:global(html) 
		height: 100%
		scroll-padding-top: 96px
		background-size: auto
		background-size: 8px 8px
		background-image: -webkit-repeating-radial-gradient( center center, #fff, #fff 1px, u.$light 1px, u.$light 100% )
		@media (prefers-color-scheme: dark)
			background-image: -webkit-repeating-radial-gradient(center center, #1c1f21, #1c1f21 1px, #212527 1px, #212527 100%)
	
	:global(body) 
		margin: 0
		@media (prefers-color-scheme: dark)
			color: white

</style>
