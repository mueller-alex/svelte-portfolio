<script>
	import Card from '../components/card.svelte';
	export let classes;
	export { classes as class };
</script>

<Card
	background="url('/uconnblur.jpg')"
	class="flex h-full w-full flex-col justify-center gap-3 border !bg-cover !bg-center !p-6 font-medium {classes}"
>
	<h2 class="font-space text-4xl font-black tracking-wide md:text-6xl">hi, i'm alex!</h2>
	<hr class="mt-2 opacity-20" />
	<p class="text-xl">i'm a UX engineer who loves to solve problems.</p>
	<p class="text-xl">i love design and development.</p>
	<p class="text-xl">my goal is to enrich people's lives through digital experiences.</p>
	<p class="text-xl">that's the point of all this technology, right?</p>
</Card>
