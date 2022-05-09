<script>
	import Icon from '@iconify/svelte';
	import SocialLinks from './../components/social-links.svelte';
	import Footer from './../components/footer.svelte';
	import { base, assets } from '$app/paths';
	import '../app.css';
	import { fade, fly } from 'svelte/transition';
	import { dev } from '$app/env';
	import Card from './../components/card.svelte';
	let y = 0;
	let shrunk = false;
	let menu = false;
	function toggle() {
		menu = !menu;
	}
	$: {
		shrunk = y > 128;
	}
</script>

<svelte:window bind:scrollY={y} />
<div class=" overflow-clip text-cobalt-500 dark:text-cobalt-50">
	<nav
		class="
			{shrunk ? 'border-b-[1px]' : ''} 
			fixed top-0 z-50 h-32 w-full border-b-cobalt-900/5 bg-cobalt-50  bg-opacity-50 transition-all  dark:border-b-white/5 dark:bg-cobalt-800 dark:bg-opacity-0"
		class:shadow-xl={shrunk}
		class:h-24={shrunk}
		class:!bg-opacity-100={shrunk}
	>
		<div
			class="mx-auto flex h-full max-w-screen-2xl items-center justify-between px-6 transition-all"
		>
			<a href="/#" title="Home">
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
			<div class="hidden space-x-6 md:flex">
				<a
					href="/"
					class="flex items-center gap-2 rounded-lg p-4 pb-[14px] text-xl font-bold lowercase tracking-widest transition-colors hover:bg-cobalt-500/10 hover:dark:bg-white/10"
				>
					<span class="material-symbols-rounded"> home </span>
					Home
				</a>
				<!-- <a
					href="/about"
					class="flex items-center gap-2 rounded-lg p-4 pb-[14px] text-xl font-bold lowercase tracking-widest transition-colors hover:bg-cobalt-500/10 hover:dark:bg-white/10"
				>
					<span class="material-symbols-rounded"> face </span>
					About
				</a> -->
				<a
					href="mailto:alex@muellr.xyz"
					class="flex items-center gap-2 rounded-2xl bg-cobalt-500 p-4 text-xl font-bold lowercase tracking-widest  text-white transition-all hover:scale-105  active:translate-x-4 dark:bg-cobalt-50 dark:text-cobalt-500"
				>
					<div class="material-symbols-rounded">mail</div>
					<span>hire me!</span>
				</a>
			</div>
			<button
				class="relative z-20 grid aspect-square h-12 w-12 place-items-center md:hidden"
				on:click={() => {
					toggle();
					shrunk = true;
				}}
			>
				<div class="material-symbols-rounded w-8 text-3xl leading-none">menu</div>
			</button>
		</div>
	</nav>
	<div id="app-container" class="mx-auto w-full">
		<slot />
	</div>
</div>
{#if dev}
	<Card
		class="fixed bottom-4 right-4 flex items-center gap-2 rounded-full !bg-yellow-400 text-xl font-bold tracking-wider !text-black"
	>
		<span class="material-symbols-rounded"> construction </span>
		DEV
	</Card>
{/if}
{#if menu}
	<div
		class="fixed inset-4 top-auto z-20 flex flex-col rounded-2xl bg-white py-2 shadow dark:bg-cobalt-600 dark:text-cobalt-50"
		transition:fade={{ duration: 150 }}
		id="menu"
	>
		<a
			href="/"
			class="flex items-center gap-4 rounded-lg p-6 pb-[14px] text-xl font-bold lowercase tracking-widest transition-colors"
		>
			<span class="material-symbols-rounded"> home </span>
			home
		</a>
		<!-- <a
			href="/about"
			class="flex items-center gap-4 rounded-lg p-6 pb-[14px] text-xl font-bold lowercase tracking-widest transition-colors"
		>
			<span class="material-symbols-rounded"> face </span>
			About
		</a> -->
		<a
			href="mailto:alex@muellr.xyz"
			class="flex items-center gap-4 rounded-lg p-6 pb-[14px] text-xl font-bold lowercase tracking-widest transition-colors"
		>
			<span class="material-symbols-rounded"> work </span>
			hire me!
		</a>
	</div>
{/if}
{#if menu}
	<div
		class="fixed inset-0 z-10 bg-white/50 dark:bg-black/50"
		on:click={() => {
			toggle();
			shrunk = y > 128;
		}}
		transition:fade={{ duration: 150 }}
	/>
{/if}
<Footer />

<style lang="sass">
	@use './static/colors/ui-colors.scss' as u
	:global(:root)
		scrollbar-color: dark
		
	:global(#svelte), :global(body) 
		min-height: 100%
		display: grid
		grid-template-rows: 1fr auto
	
	:global(html) 
		height: 100%
		scroll-padding-top: 96px
		scroll-behavior: smooth
		scrollbar-width: thin
		scrollbar-gutter: stable
		scrollbar-color: transparent
		background-attachment: fixed
		// background-size: auto
		// background-size: 8px 8px
		// background-image: -webkit-repeating-radial-gradient( center center, #fff, #fff 1px, u.$light 1px, u.$light 100% )
		background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='50' height='50' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsl(224, 28%, 97%)'/><path d='M0 3a22 22 0 1 0 22 22c0-1.15-.17-2.24-.34-3.33-.36-.06-.74-.05-1.1-.12-.32-.07-.62-.21-.94-.29.23 1.21.38 2.46.38 3.74A20 20 0 1 1 0 5.01c1.28 0 2.53.15 3.74.37-.08-.32-.23-.62-.3-.95-.06-.35-.04-.74-.1-1.1C2.24 3.17 1.15 3 0 3Zm50 0a22 22 0 0 0-22 22c0 1.15.17 2.24.34 3.33.36.06.74.05 1.1.12.32.07.62.21.94.29A20.02 20.02 0 0 1 30 25 20 20 0 0 1 50 5.01 20 20 0 1 1 50 45a20.1 20.1 0 0 1-3.74-.38c.08.33.23.62.3.95.06.35.04.73.1 1.1 1.1.16 2.2.33 3.34.33a22 22 0 1 0 0-44ZM0 7a18 18 0 1 0 18 18c0-1.54-.25-3.01-.61-4.43-.31-.12-.65-.17-.95-.3-.52-.22-.98-.54-1.48-.8A15.87 15.87 0 0 1 16 25 16 16 0 1 1 0 9c1.95 0 3.8.4 5.53 1.04-.26-.5-.58-.95-.8-1.48-.13-.3-.18-.64-.3-.94A17.86 17.86 0 0 0 0 7Zm50 0a18 18 0 0 0-18 18c0 1.54.25 3.01.61 4.43.32.12.66.17.96.3.52.22.97.54 1.47.8A15.87 15.87 0 0 1 34 25a16 16 0 1 1 16 16c-1.95 0-3.8-.4-5.53-1.04.26.5.58.95.8 1.48.13.3.18.64.3.95 1.41.36 2.88.61 4.43.61a18 18 0 0 0 0-36ZM0 11a14 14 0 1 0 14 14 13.9 13.9 0 0 0-2.23-7.52c-.8-.61-1.61-1.21-2.32-1.93-.72-.7-1.32-1.52-1.93-2.33A13.9 13.9 0 0 0 0 11Zm50 0a14 14 0 0 0-14 14 13.9 13.9 0 0 0 2.23 7.52c.8.61 1.62 1.21 2.33 1.92s1.31 1.53 1.92 2.33A13.9 13.9 0 0 0 50 39a14 14 0 0 0 0-28ZM0 13.03A11.94 11.94 0 0 1 12 25a12 12 0 0 1-24 0A12 12 0 0 1 0 13.03Zm50 0A11.94 11.94 0 0 1 62 25a12 12 0 0 1-24 0 12 12 0 0 1 12-11.97ZM0 15a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm50 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM0 17a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm50 0a8 8 0 1 1 0 16 8 8 0 0 1 0-16zM0 19a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm50 0a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM0 21a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm50 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8z'  stroke-width='2' stroke='none' fill='hsl(224, 28%, 99%)'/><path d='M25-22a22 22 0 1 0 0 44c1.15 0 2.24-.17 3.33-.34.06-.36.05-.74.12-1.1.07-.32.21-.62.29-.94-1.21.23-2.46.38-3.74.38A20 20 0 1 1 45 0c0 1.28-.15 2.52-.38 3.74.33-.08.62-.23.95-.3.35-.06.73-.04 1.1-.1.16-1.1.33-2.19.33-3.34a22 22 0 0 0-22-22Zm0 4a18 18 0 1 0 0 36c1.54 0 3.01-.25 4.43-.61.12-.31.17-.65.3-.95.22-.52.54-.98.8-1.48A15.87 15.87 0 0 1 25 16 16 16 0 1 1 41 0c0 1.95-.4 3.8-1.04 5.53.5-.26.95-.58 1.48-.8.3-.13.64-.18.95-.3.36-1.41.61-2.88.61-4.43a18 18 0 0 0-18-18Zm0 4a14 14 0 0 0 0 28 13.9 13.9 0 0 0 7.52-2.23c.61-.8 1.21-1.61 1.92-2.32.71-.72 1.53-1.32 2.33-1.93A13.9 13.9 0 0 0 39 0a14 14 0 0 0-14-14Zm0 2.03A11.94 11.94 0 0 1 37 0a12 12 0 0 1-24 0 12 12 0 0 1 12-11.97ZM25-10a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 32c-1.15 0-2.24.17-3.33.34-.06.36-.05.74-.12 1.1-.07.33-.21.63-.3.95 1.22-.23 2.46-.38 3.75-.38A20 20 0 1 1 5 50c0-1.28.15-2.52.38-3.74-.33.08-.62.23-.95.3-.35.06-.73.04-1.1.1C3.17 47.77 3 48.85 3 50a22 22 0 1 0 22-22Zm0 4c-1.54 0-3.01.26-4.43.63-.12.3-.17.63-.3.93-.22.52-.54.98-.8 1.48A15.87 15.87 0 0 1 25 34 16 16 0 1 1 9 50c0-1.95.4-3.8 1.04-5.53-.5.26-.95.58-1.48.8-.3.13-.64.18-.95.3A17.84 17.84 0 0 0 7 50a18 18 0 1 0 18-18Zm0 4a13.9 13.9 0 0 0-7.52 2.23c-.61.8-1.21 1.62-1.93 2.33-.7.71-1.52 1.31-2.33 1.92A13.9 13.9 0 0 0 11 50a14 14 0 1 0 14-14Zm0 2.03A11.94 11.94 0 0 1 37 50a12 12 0 0 1-24 0 12 12 0 0 1 12-11.97ZM25 40a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z'  stroke-width='2' stroke='none' fill='hsl(224, 28%, 99%)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")
		@media (prefers-color-scheme: dark)
			background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='50' height='50' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsl(224, 28%, 17%)'/><path d='M0 3a22 22 0 1 0 22 22c0-1.15-.17-2.24-.34-3.33-.36-.06-.74-.05-1.1-.12-.32-.07-.62-.21-.94-.29.23 1.21.38 2.46.38 3.74A20 20 0 1 1 0 5.01c1.28 0 2.53.15 3.74.37-.08-.32-.23-.62-.3-.95-.06-.35-.04-.74-.1-1.1C2.24 3.17 1.15 3 0 3Zm50 0a22 22 0 0 0-22 22c0 1.15.17 2.24.34 3.33.36.06.74.05 1.1.12.32.07.62.21.94.29A20.02 20.02 0 0 1 30 25 20 20 0 0 1 50 5.01 20 20 0 1 1 50 45a20.1 20.1 0 0 1-3.74-.38c.08.33.23.62.3.95.06.35.04.73.1 1.1 1.1.16 2.2.33 3.34.33a22 22 0 1 0 0-44ZM0 7a18 18 0 1 0 18 18c0-1.54-.25-3.01-.61-4.43-.31-.12-.65-.17-.95-.3-.52-.22-.98-.54-1.48-.8A15.87 15.87 0 0 1 16 25 16 16 0 1 1 0 9c1.95 0 3.8.4 5.53 1.04-.26-.5-.58-.95-.8-1.48-.13-.3-.18-.64-.3-.94A17.86 17.86 0 0 0 0 7Zm50 0a18 18 0 0 0-18 18c0 1.54.25 3.01.61 4.43.32.12.66.17.96.3.52.22.97.54 1.47.8A15.87 15.87 0 0 1 34 25a16 16 0 1 1 16 16c-1.95 0-3.8-.4-5.53-1.04.26.5.58.95.8 1.48.13.3.18.64.3.95 1.41.36 2.88.61 4.43.61a18 18 0 0 0 0-36ZM0 11a14 14 0 1 0 14 14 13.9 13.9 0 0 0-2.23-7.52c-.8-.61-1.61-1.21-2.32-1.93-.72-.7-1.32-1.52-1.93-2.33A13.9 13.9 0 0 0 0 11Zm50 0a14 14 0 0 0-14 14 13.9 13.9 0 0 0 2.23 7.52c.8.61 1.62 1.21 2.33 1.92s1.31 1.53 1.92 2.33A13.9 13.9 0 0 0 50 39a14 14 0 0 0 0-28ZM0 13.03A11.94 11.94 0 0 1 12 25a12 12 0 0 1-24 0A12 12 0 0 1 0 13.03Zm50 0A11.94 11.94 0 0 1 62 25a12 12 0 0 1-24 0 12 12 0 0 1 12-11.97ZM0 15a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm50 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM0 17a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm50 0a8 8 0 1 1 0 16 8 8 0 0 1 0-16zM0 19a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm50 0a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM0 21a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm50 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8z'  stroke-width='2' stroke='none' fill='hsl(225, 30%, 15%)'/><path d='M25-22a22 22 0 1 0 0 44c1.15 0 2.24-.17 3.33-.34.06-.36.05-.74.12-1.1.07-.32.21-.62.29-.94-1.21.23-2.46.38-3.74.38A20 20 0 1 1 45 0c0 1.28-.15 2.52-.38 3.74.33-.08.62-.23.95-.3.35-.06.73-.04 1.1-.1.16-1.1.33-2.19.33-3.34a22 22 0 0 0-22-22Zm0 4a18 18 0 1 0 0 36c1.54 0 3.01-.25 4.43-.61.12-.31.17-.65.3-.95.22-.52.54-.98.8-1.48A15.87 15.87 0 0 1 25 16 16 16 0 1 1 41 0c0 1.95-.4 3.8-1.04 5.53.5-.26.95-.58 1.48-.8.3-.13.64-.18.95-.3.36-1.41.61-2.88.61-4.43a18 18 0 0 0-18-18Zm0 4a14 14 0 0 0 0 28 13.9 13.9 0 0 0 7.52-2.23c.61-.8 1.21-1.61 1.92-2.32.71-.72 1.53-1.32 2.33-1.93A13.9 13.9 0 0 0 39 0a14 14 0 0 0-14-14Zm0 2.03A11.94 11.94 0 0 1 37 0a12 12 0 0 1-24 0 12 12 0 0 1 12-11.97ZM25-10a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 32c-1.15 0-2.24.17-3.33.34-.06.36-.05.74-.12 1.1-.07.33-.21.63-.3.95 1.22-.23 2.46-.38 3.75-.38A20 20 0 1 1 5 50c0-1.28.15-2.52.38-3.74-.33.08-.62.23-.95.3-.35.06-.73.04-1.1.1C3.17 47.77 3 48.85 3 50a22 22 0 1 0 22-22Zm0 4c-1.54 0-3.01.26-4.43.63-.12.3-.17.63-.3.93-.22.52-.54.98-.8 1.48A15.87 15.87 0 0 1 25 34 16 16 0 1 1 9 50c0-1.95.4-3.8 1.04-5.53-.5.26-.95.58-1.48.8-.3.13-.64.18-.95.3A17.84 17.84 0 0 0 7 50a18 18 0 1 0 18-18Zm0 4a13.9 13.9 0 0 0-7.52 2.23c-.61.8-1.21 1.62-1.93 2.33-.7.71-1.52 1.31-2.33 1.92A13.9 13.9 0 0 0 11 50a14 14 0 1 0 14-14Zm0 2.03A11.94 11.94 0 0 1 37 50a12 12 0 0 1-24 0 12 12 0 0 1 12-11.97ZM25 40a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z'  stroke-width='2' stroke='none' fill='hsl(225, 30%, 15%)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")
	:global(body) 
		margin: 0
		font-weight: 600
		@media (prefers-color-scheme: dark)
			font-weight: 600

</style>
