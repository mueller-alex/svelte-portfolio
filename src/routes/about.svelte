<script>
	import AboutCard from './../components/about-card.svelte';

	import SocialLinks from './../components/social-links.svelte';
	import Profile from '../components/profile.svelte';
	import Card from '../components/card.svelte';
</script>

<svelte:head>
	<title>About | muellr.xyz</title>
</svelte:head>
<div class="mx-auto grid w-full max-w-screen-3xl place-items-stretch gap-8 px-6 md:grid-cols-2">
	<AboutCard class="" />
	<Card class="w-fit space-y-2 p-4">
		<h2 class="font-space text-2xl lowercase leading-none">More about me</h2>
		<hr />
		<p class="max-w-prose leading-loose">
			My name's Alex Mueller and I'm based outside of Hartford, CT. I've been doing both design and
			development since 2014 and started professionally in 2017. I started off by tinkering with
			websites' CSS to see what I could do, and I've been hooked ever since.
		</p>
	</Card>
	<Card class="w-fit space-y-2 p-4">
		<h2 class="font-space text-2xl lowercase leading-none">education</h2>
		<hr />
		<p class="max-w-prose leading-loose">
			I started my education at the University of Connecticut, where I studied Computer Science and
			quickly realized that computer science was not for me. After a year and a half, I switched to
			a major in Digital Media and Design, where the cirriculum was far more focused on making
			something more than a command line program. After the first semester, one of my professors
			offered me a job at Greenhouse Studios I graduated in 2022 with a B.A. in Digital Media and
			Design.
		</p>
	</Card>
</div>
