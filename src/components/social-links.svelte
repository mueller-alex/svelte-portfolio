<script>
	export let flexDirection = 'row';
	import Icon from '@iconify/svelte';
	import Card from './card.svelte';
</script>

<Card class="flex gap-4 text-3xl flex-{flexDirection}">
	<a
		href="mailto:contact@almr.design"
		title="Email"
		class="grid place-items-center rounded-2xl p-[10px] transition-colors hover:bg-red-50 hover:text-red-900 focus:scale-[1.2] focus:outline-none dark:text-mueller-100"
	>
		<Icon icon="eva:at-fill" />
		<!-- <Icon icon={emailIcon} /> -->
	</a>
	<a
		href="https://www.linkedin.com/in/alexmueller392/"
		title="LinkedIn"
		class="grid place-items-center rounded-2xl p-[10px] transition-colors hover:bg-cyan-50 hover:text-[#0077b5] focus:scale-[1.2] focus:outline-none dark:text-mueller-100"
	>
		<Icon icon="eva:linkedin-fill" />
		<!-- <Icon icon={linkedinIcon} /> -->
	</a>
	<a
		href="https://github.com/mueller-alex"
		title="GitHub"
		class="grid place-items-center rounded-2xl p-[10px] transition-colors hover:bg-black/5 hover:text-black focus:scale-[1.2] focus:outline-none dark:text-mueller-100 hover:dark:bg-white"
	>
		<Icon icon="uim:github-alt" />
		<!-- <Icon icon={githubIcon} /> -->
	</a>
	<a
		href="https://www.behance.net/muelleralex"
		class="grid place-items-center rounded-2xl p-[10px] transition-colors hover:bg-blue-50 hover:text-[#1769ff] focus:scale-[1.2] focus:outline-none dark:text-mueller-100"
	>
		<Icon icon="ph:behance-logo-bold" />
		<!-- <Icon icon={behanceIcon} /> -->
	</a>
	<a
		href="https://twitter.com/almrdesign"
		title="Twitter"
		class="grid place-items-center rounded-2xl p-[10px] text-mueller-900 transition-colors hover:bg-sky-50 hover:text-[#1da1f2] focus:scale-[1.2] focus:outline-none dark:text-mueller-100"
	>
		<Icon icon="eva:twitter-fill" />
		<!-- <Icon icon={twitterIcon} /> -->
	</a>
</Card>
<!-- 
<div
	style:flex-direction={flexDirection}
	class="flex w-max max-w-full justify-between gap-2 rounded-[1.25rem] border-[1px] border-white/5 bg-mueller-10 p-3 text-[28px] leading-7 shadow-lg dark:bg-mueller-700 sm:gap-4"
/> -->
<!-- 
<style lang="sass">
    @use './static/colors/brand-colors.scss' as c
    @each $brand,$color in c.$brand-colors
        .#{$brand}-icon
            &:hover, &:focus
                background: $color
</style> -->
