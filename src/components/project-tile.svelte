<script>
	import Card from './card.svelte';
	import Icon from '@iconify/svelte';
	export let project;
</script>

<Card
	class="group relative flex aspect-square flex-col items-center justify-between overflow-clip rounded-[36px] p-6 !pb-0 transition-all duration-300 hover:border-white/[.15] active:translate-y-2 active:shadow-sm md:rounded-[48px] md:p-10"
	backgroundColor={project.backgroundColor}
	href="/projects/{project.key}"
	noBlur
>
	<div class="flex w-full items-center justify-between">
		<div
			class="origin-top-left text-white transition-all duration-300 ease-in-out group-hover:scale-110"
		>
			<h2 class="mb font-space text-2xl font-bold leading-snug tracking-wide md:text-3xl">
				{project.name}
			</h2>
			<h3 class="lowercase tracking-wider md:text-lg ">{project.role}</h3>
		</div>
		<div class="rounded-full shadow-lg shadow-black/30">
			<div
				class="z-10 grid place-items-center rounded-full border-2 border-white/10 bg-white/10 p-2 mix-blend-screen backdrop-blur-lg transition-all duration-300 ease-in-out group-hover:border-white/60 group-hover:bg-white group-hover:text-black group-active:scale-90  md:p-4"
			>
				<iconify-icon icon="mingcute:arrow-right-fill" height="28" />
			</div>
		</div>
	</div>
	<img
		src="/projectassets/{project.key}screen.png"
		alt=""
		class="h-auto w-full origin-bottom transition-transform duration-300 ease-in-out group-hover:scale-105"
	/>
</Card>
