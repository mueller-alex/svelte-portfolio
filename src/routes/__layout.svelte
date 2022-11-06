<script>
	import Icon from '@iconify/svelte';
	import SocialLinks from './../components/social-links.svelte';
	import Footer from './../components/footer.svelte';
	import { base, assets } from '$app/paths';
	import '../app.css';
	import { fade, fly } from 'svelte/transition';
	import { dev } from '$app/env';
	import Card from './../components/card.svelte';
	import { page } from '$app/stores';
	import About from './about.svelte';
</script>

<div
	class="mx-auto flex w-full max-w-screen-3xl flex-col items-center p-8 px-6 md:h-40 md:flex-row md:justify-between"
>
	<a href="/">
		<svg
			class="transition-all"
			width="48"
			height="48"
			viewBox="0 0 129 129"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M91.2209 109.136C90.4412 108.668 89.8553 107.936 89.5698 107.073L65.2842 33.6322C64.9573 32.6436 63.5603 32.6391 63.227 33.6255L38.4016 107.089C38.1133 107.942 37.5308 108.665 36.7584 109.128L5.81014 127.695C2.549 129.651 -1.2435 126.13 0.46685 122.734L61.0574 2.41476C62.4642 -0.378661 66.4567 -0.367443 67.8477 2.43384L127.627 122.823C129.313 126.219 125.526 129.716 122.274 127.765L91.2209 109.136Z"
				fill="currentColor"
			/>
		</svg>
	</a>
	<SocialLinks
		noGlass
		noBlur
		flexDirection="row-reverse"
		class="hidden origin-right scale-90 border-0 !bg-transparent px-0 !shadow-none max-lg:!gap-0 md:flex"
	/>
</div>
<div
	class="pointer-events-none fixed bottom-0 z-50 grid h-32 w-full place-items-center px-2 md:top-0 md:h-40"
>
	<nav
		class="pointer-events-auto mx-auto flex w-full items-baseline justify-between rounded-3xl border-2 border-white/5 bg-black/40 bg-glass bg-[length:150px] p-3 font-space font-medium lowercase tracking-wider shadow-xl shadow-black/60 backdrop-blur-lg backdrop-contrast-[1.1] transition-all sm:gap-4 md:w-max md:max-w-xl md:text-xl xl:w-full"
	>
		<a
			class="flex w-full flex-col items-center justify-center  rounded-xl bg-white bg-opacity-0 p-3 text-center transition-colors hover:bg-opacity-10 lg:px-6"
			class:bg-opacity-10={$page.url.pathname === '/'}
			href="/"
		>
			<iconify-icon icon="majesticons:home-line" />
			Home
		</a>
		<a
			class="flex w-full flex-col items-center justify-center  rounded-xl bg-white bg-opacity-0 p-3 text-center transition-colors hover:bg-opacity-10 lg:px-6"
			class:bg-opacity-10={$page.url.pathname === '/about'}
			href="/about"
		>
			<iconify-icon icon="majesticons:user-box-line" />
			About
		</a>
		<a
			class="flex w-full flex-col items-center justify-center  rounded-xl bg-white bg-opacity-0 p-3 text-center transition-colors hover:bg-opacity-10 lg:px-6"
			class:bg-opacity-10={$page.url.pathname === '/work' ||
				$page.url.pathname.includes('/projects')}
			href="/work"
		>
			<iconify-icon icon="majesticons:edit-pen-4-line" />
			work
		</a>
	</nav>
</div>
<slot />

<Footer />

<style lang="sass">
	:global(:root)
		scrollbar-color: dark
	:global(html) 
		height: 100%
		scroll-padding-top: 96px
		scroll-behavior: smooth
		scrollbar-width: thin
		scrollbar-gutter: stable
		scrollbar-color: transparent
	:global(body) 
		margin: 0
		font-weight: 600


</style>
