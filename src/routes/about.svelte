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
		Hi there! My name is Alex Mueller and I have been working in the field of design and development
		since 2014, when I first started professionally in 2017. I have always been fascinated by the
		world of the web and the endless possibilities it offers.
		<br /> <br />
		When I first started out, I spent hours tinkering with CSS to see what I could create. It was then
		that I realized just how much I loved the web and the incredible potential it holds. From there,
		I started learning HTML and CSS together, and began creating my own small web pages.
		<br /> <br />
		One of the things that I love most about the web is the speed at which you can go from nothing to
		a fully functional website that can be accessed by anyone, anywhere in the world. It's truly amazing.
		<br /><br />
		But beyond that, I am particularly passionate about creating tools and products that are user-focused,
		rather than the other way around. I believe that the best products are those that help make people's
		lives easier, rather than getting in their way and hindering their progress.
		<br /><br />
		In my work, I strive to create tools and products that are not only functional, but also intuitive
		and user-friendly. I believe that by putting the needs of the user first, we can create truly remarkable
		products that can truly make a difference in people's lives.
	</p>
	<p class="max-w-prose text-lg leading-loose">
		I initially began my college education at the University of Connecticut, where I studied
		Computer Science. However, after just one and a half years, I realized that it was not the right
		fit for me. I decided to switch my major to Digital Media and Design, where the focus was on
		creating something more than just a command line program.
		<br /><br />
		After my first semester in this new major, I was offered a job at Greenhouse Studios by one of my
		professors. I was grateful for this opportunity and was able to work on some truly engaging projects,
		including
		<a href="/projects/sourcery" class="font-space font-medium text-sky-300 underline">Sourcery</a>
		and
		<a href="/work/charlesvr" class="font-space font-medium text-sky-300 underline">CharlesVR</a>.
		<br /><br />
		I graduated in 2022 with a Bachelor of Arts in Digital Media and Design, with a specialization in
		Web/Interactive Media. Throughout my time at the University of Connecticut, I was able to gain valuable
		experience and knowledge that have helped shape my career. I am excited to continue building upon
		this foundation and to see where my love for the web and design will take me.
	</p>
	<div class="max-w-prose text-lg">
		<h2 class="mb-2 text-center font-space text-4xl font-bold leading-loose">
			Now I'm looking for my next opportunity!
		</h2>
		<p class="text-lg leading-loose">
			I'm always looking for new and exciting opportunities to grow and learn. If you've been
			impressed by my work and want to chat about potential roles, I'd love to hear from you!
			<br /><br />
			I'm currently based in Hartford, CT, but I'm open to moving for the right opportunity. So if you
			think I could be a good fit for your team, please don't hesitate to contact me. I'm eager to explore
			new opportunities and see where my skills and experience can take me.
		</p>
	</div>
	<ArrowLink text="Check out my resume:" icon="mingcute:paper-fill" href="/resume.pdf" />
</div>
