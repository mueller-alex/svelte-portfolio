<script>
	export let flexDirection = 'row';
	import Icon from '@iconify/svelte';
	import Card from './card.svelte';
	export let classes = '';
	export { classes as class };
	export let noGlass;
	export let noBlur;
</script>

<Card {noGlass} {noBlur} class="flex text-3xl leading-none sm:gap-4 flex-{flexDirection} {classes}">
	<a
		href="mailto:alex@muellr.xyz"
		title="Email"
		class="grid w-full place-items-center rounded-2xl p-[10px] text-mueller-100 transition-colors duration-300 hover:bg-red-50 hover:text-red-900 focus:scale-[1.2] focus:outline-none"
	>
		<iconify-icon icon="majesticons:mail" />
		<!-- <iconify-icon icon={emailIcon} /> -->
	</a>
	<a
		href="https://www.linkedin.com/in/alexmueller392/"
		title="LinkedIn"
		class="grid w-full place-items-center rounded-2xl p-[10px] text-mueller-100 transition-colors duration-300 hover:bg-cyan-50 hover:text-[#0077b5] focus:scale-[1.2] focus:outline-none"
	>
		<iconify-icon icon="eva:linkedin-fill" />
		<!-- <iconify-icon icon={linkedinIcon} /> -->
	</a>
	<a
		href="https://github.com/mueller-alex"
		title="GitHub"
		class="grid w-full place-items-center rounded-2xl p-[10px] text-mueller-100 drop-shadow transition-colors duration-300 hover:bg-black/5 hover:bg-white hover:text-black focus:scale-[1.2] focus:outline-none"
	>
		<iconify-icon icon="uim:github-alt" />
		<!-- <iconify-icon icon={githubIcon} /> -->
	</a>
	<a
		href="https://www.behance.net/muelleralex"
		class="grid w-full place-items-center rounded-2xl p-[10px] text-mueller-100 transition-colors duration-300 hover:bg-blue-50 hover:text-[#1769ff] focus:scale-[1.2] focus:outline-none"
	>
		<iconify-icon icon="ph:behance-logo-bold" />
		<!-- <iconify-icon icon={behanceIcon} /> -->
	</a>
	<a
		href="https://twitter.com/almrdesign"
		title="Twitter"
		class="relative grid w-full place-items-center rounded-2xl p-[10px]  text-mueller-100 transition-colors duration-300 hover:bg-sky-50 hover:text-[#1da1f2] focus:scale-[1.2] focus:outline-none"
	>
		<iconify-icon icon="eva:twitter-fill" />
		<!-- <iconify-icon icon={twitterIcon} /> -->
	</a>
</Card>
<!-- 
<div
	style:flex-direction={flexDirection}
	class="flex w-max max-w-full justify-between gap-2 rounded-[1.25rem] border border-white/5 bg-mueller-10 p-3 text-[28px] leading-7 shadow-lg bg-mueller-700 sm:gap-4"
/> -->

<!-- 
<style lang="sass">
    @use './static/colors/brand-colors.scss' as c
    @each $brand,$color in c.$brand-colors
        .#{$brand}-icon
            &:hover, &:focus
                background: $color
</style> -->
