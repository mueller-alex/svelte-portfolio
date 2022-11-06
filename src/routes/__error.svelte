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

<h1 class="mb-8 flex items-center gap-2 text-4xl font-bold opacity-70 md:gap-6 md:text-8xl">
	{title}
	<!-- {#if statusCode === 404}
		<p class="text-3xl my-8 inline-flex gap-2 items-center">
			{'<-'} page probably under construction <iconify-icon icon="ic:round-construction" />
		</p>
	{/if} -->
</h1>
<a href="/" class="text-5xl font-bold underline md:text-8xl">go home.</a>
