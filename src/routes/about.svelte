<script>
	import ArrowLink from './../components/arrow-link.svelte';
	import Card from './../components/card.svelte';
	import AboutCard from './../components/about-card.svelte';
	import SocialLinks from './../components/social-links.svelte';
	import Profile from '../components/profile.svelte';
</script>

<svelte:head>
	<title>About | muellr.xyz</title>
</svelte:head>
<div class="mx-auto flex w-full max-w-screen-lg flex-col items-center gap-8 px-6">
	<Card class="overflow-clip p-0">
		<img src="/uconn.jpg" alt="" class="max-w-prose" />
	</Card>
	<h1 class="font-space text-6xl font-bold">
		<iconify-icon icon="ph:hand-waving-fill" class="origin-[70%_70%] animate-wave" inline />
		hi!
	</h1>
	<!-- <AboutCard class="max-w-prose" background="" /> -->
	<p class="max-w-prose text-lg leading-loose">
		My name's Alex Mueller and I've been doing both design and development since 2014 and started
		professionally in 2017. I started by tinkering with websites' CSS to see what I could do, and
		I've been hooked ever since. From there, I learned HTML in conjunction with CSS and started
		creating small web pages of my own. The speed at which you can go from nothing to a page someone
		anywhere in the world can experience is just one of the reasons I love the web so much. I
		especially love when the work I do can help make people's lives easier. Creating tools and
		products that work for the user rather than the other way around is one of my key philosophies.
		What good is a tool if it gets in your way, rather than accomplishing its key goal of helping
		you?
	</p>
	<p class="max-w-prose text-lg leading-loose">
		I started my education at the University of Connecticut, where I studied Computer Science and
		quickly realized that it was not for me. After a year and a half, I switched to a major in
		Digital Media and Design, where the curriculum focused on making something more than a command
		line program. After the first semester, one of my professors offered me a job at Greenhouse
		Studios, where I was fortunate enough to work on engaging projects such as
		<a href="/projects/sourcery" class="font-space font-medium text-sky-300 underline">Sourcery</a>
		and
		<a href="/work/charlesvr" class="font-space font-medium text-sky-300 underline">CharlesVR</a>. I
		graduated in 2022 with a B.A. in Digital Media and Design, specializing in Web/Interactive
		Media.
	</p>
	<div class="max-w-prose text-lg">
		<h2 class="mb-2 text-center font-space text-4xl font-bold leading-loose">
			Now I'm looking for my next opportunity!
		</h2>
		<p class="text-lg leading-loose">
			If my work resonates with you, shoot me an email or DM and I'd love to chat! I'm currently
			based in Hartford, CT, but I'm open to moving for the right opportunity.
		</p>
	</div>
	<ArrowLink text="Check out my resume:" icon="mingcute:paper-fill" href="/resume.pdf" />
</div>
