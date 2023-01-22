<script>
	export let flexDirection = 'row';
	import Card from './card.svelte';
	export let classes = '';
	export { classes as class };
	export let noGlass;
	export let noBlur;
	let icons = [
		{
			icon: 'majesticons:mail',
			href: 'mailto:alex@muellr.xyz',
			title: 'Email',
			backgroundClass: 'hocus:bg-red-600/20',
			textClass: 'hocus:text-red-50'
		},
		{
			icon: 'eva:linkedin-fill',
			href: 'https://www.linkedin.com/in/alexmueller392/',
			title: 'LinkedIn',
			backgroundClass: 'hocus:bg-cyan-600/20',
			textClass: 'hocus:text-cyan-50'
		},
		{
			icon: 'mingcute:github-fill',
			href: 'https://github.com/mueller-alex',
			title: 'GitHub',
			backgroundClass: 'hocus:bg-purple-600/20',
			textClass: 'hocus:text-purple-50'
		},
		{
			icon: 'ph:behance-logo-bold',
			href: 'https://www.behance.net/muelleralex',
			title: 'Behance',
			backgroundClass: 'hocus:bg-blue-600/20',
			textClass: 'hocus:text-blue-50'
		},
		{
			icon: 'eva:twitter-fill',
			href: 'https://twitter.com/almrdesign',
			title: 'Twitter',
			backgroundClass: 'hocus:bg-sky-600/20',
			textClass: 'hocus:text-sky-50'
		}
	];
</script>

<Card {noGlass} {noBlur} class="flex text-3xl leading-none sm:gap-4 flex-{flexDirection} {classes}">
	{#each icons as icon}
		<a
			href={icon.href}
			title={icon.title}
			class="grid w-full place-items-center rounded-xl p-[10px] transition-colors duration-300 {icon.backgroundClass} {icon.textClass}"
		>
			<iconify-icon icon={icon.icon} />
		</a>
	{/each}
</Card>
