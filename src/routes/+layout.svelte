<script>
	import SocialLinks from '$c/social-links.svelte';
	import Footer from '$c/footer.svelte';
	import '../app.css';
	import Card from '$c/card.svelte';
	import Logo from '$c/logo.svelte';
	import { page } from '$app/stores';
	import { projects } from '../projects';
	let y = 0;
	let innerHeight = 0;
	let bounce = false;
	let vantaColor = '#374262';
	function scroll() {
		y = innerHeight - 96;
	}
	$: pageName = $page.url.pathname;
	$: {
		bounce = false;
		setTimeout(() => {
			pageName;
			bounce = y == 0;
		}, 5000);
		if (pageName.includes('/projects')) {
			const projectKey = pageName.split('/projects/')[1];
			vantaColor = projects.find((x) => x.key === projectKey).vantaColor;
		} else {
			vantaColor = '#374262';
		}
	}
</script>

<svelte:window bind:scrollY={y} bind:innerHeight />
<div
	class="pointer-events-none fixed inset-0 -z-[49] h-screen w-screen mix-blend-multiply transition-colors duration-500 ease-in-out"
	style:background={vantaColor}
/>
<div
	class="mx-auto flex w-full max-w-screen-3xl flex-col items-center p-8 px-6 md:h-40 md:flex-row md:justify-between"
>
	<a href="/">
		<Logo />
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
	<Card
		class="pointer-events-auto mx-auto flex w-full items-baseline justify-between !bg-black font-space font-medium lowercase tracking-wider shadow-black/30 backdrop-blur-lg backdrop-contrast-[1.1] transition-all duration-300 sm:gap-4 md:w-max md:max-w-xl md:text-xl xl:w-full
		{y > 0 ? 'shadow-2xl' : 'shadow-lg'}
		{y > 0 ? '!bg-opacity-30' : '!bg-opacity-10'}"
		as="nav"
	>
		<a
			class="flex w-full flex-col items-center justify-center rounded-xl bg-white bg-opacity-0 p-3 text-center transition-colors hover:bg-opacity-10 lg:px-6"
			class:!bg-opacity-10={pageName == '/'}
			href="/"
		>
			<iconify-icon icon="mingcute:home-4-fill" />
			Home
		</a>
		<a
			class="flex w-full flex-col items-center justify-center rounded-xl bg-white bg-opacity-0 p-3 text-center transition-colors hover:bg-opacity-10 lg:px-6"
			class:!bg-opacity-10={pageName === '/about'}
			href="/about"
		>
			<iconify-icon icon="mingcute:user-3-fill" />
			About
		</a>
		<a
			class="flex w-full flex-col items-center justify-center rounded-xl bg-white bg-opacity-0 p-3 text-center transition-colors hover:bg-opacity-10 lg:px-6"
			class:!bg-opacity-10={pageName === '/work' || pageName.includes('/projects')}
			href="/work"
		>
			<iconify-icon icon="mingcute:grid-fill" />
			work
		</a>
	</Card>
</div>
<slot />

<div
	class="fixed bottom-4 z-50 hidden w-full cursor-pointer justify-center text-center transition-opacity sm:flex"
	class:opacity-0={y > innerHeight / 12 || !bounce || !pageName.includes('/projects')}
	on:click={scroll}
	on:keypress={scroll}
>
	<Card class="grid animate-bounce-slow place-items-center text-2xl">
		<iconify-icon icon="pajamas:scroll-down" class=" " />
	</Card>
</div>

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
