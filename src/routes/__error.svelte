<script context="module">
	import Icon from '@iconify/svelte';
	/** @type {import('@sveltejs/kit').Load} */
	export function load({ error, status }) {
		return {
			props: {
				title: `error ${status}`
			}
		};
	}
</script>

<script>
	export let title;
</script>

<div class="mx-auto grid w-full max-w-screen-3xl place-items-center p-6">
	<h1 class="mb-8 gap-2 text-4xl font-bold opacity-70 md:gap-6 md:text-8xl">
		{title}
	</h1>
	<a href="/" class="text-5xl font-bold underline md:text-8xl">go home.</a>
</div>
