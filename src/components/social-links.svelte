<script>
    export let flexDirection = 'row';
    import Icon from '@iconify/svelte';
</script>

<div
    id="social-icons"
    style="flex-direction: {flexDirection};"
    class="bg-mueller-50 dark:bg-mueller-800 text-[28px] leading-7 shadow-lg p-3 flex gap-2 rounded-full w-max">
    <a 
        href="mailto:contact@almr.design" 
        id="mail-icon" 
        class="text-mueller-900 dark:text-mueller-100 hover:text-mueller-100 inline-flex items-center justify-center min-w-[48px] h-12 rounded-full transition-colors focus:outline-none focus:scale-[1.2]">
        <Icon icon="mdi:email" />
    </a>
    <a 
        href="https://www.linkedin.com/in/alexmueller392/" 
        id="linkedin-icon" 
        class="text-mueller-900 dark:text-mueller-100 hover:text-mueller-100 inline-flex items-center justify-center min-w-[48px] h-12 rounded-full transition-colors focus:outline-none focus:scale-[1.2]">
        <Icon icon="mdi:linkedin" />
    </a>
    <a 
        href="https://github.com/mueller-alex" 
        id="github-icon" 
        class="text-mueller-900 dark:text-mueller-100 hover:text-mueller-100 inline-flex items-center justify-center min-w-[48px] h-12 rounded-full transition-colors focus:outline-none focus:scale-[1.2]">
        <Icon icon="mdi:github" />
    </a>
    <a 
        href="https://www.behance.net/muelleralex" 
        id="behance-icon" 
        class="text-mueller-900 dark:text-mueller-100 hover:text-mueller-100 inline-flex items-center justify-center min-w-[48px] h-12 rounded-full transition-colors focus:outline-none focus:scale-[1.2]">
        <Icon icon="mdi:behance" />
    </a>
    <a 
        href="https://twitter.com/almrdesign" 
        id="twitter-icon" 
        class="text-mueller-900 dark:text-mueller-100 hover:text-mueller-100 inline-flex items-center justify-center min-w-[48px] h-12 rounded-full transition-colors focus:outline-none focus:scale-[1.2]">
        <Icon icon="mdi:twitter" />
    </a>
</div>
<style lang="sass">
    @use './static/colors/brand-colors.scss' as c
    @each $brand,$color in c.$brand-colors
        ##{$brand}-icon
            // color: ui.$dark
            // @media (prefers-color-scheme: dark)
            //     color: ui.$light
            &:hover, &:focus
                // color: white
                background: $color
    // #social-icons
    //     display: flex
    //     margin-left: -12px
    //     font-size: 28px
    //     line-height: 28px
    //     background: white
    //     width: max-content
    //     padding: 12px
    //     gap: 8px
    //     border-radius: 100vh
    //     @media (prefers-color-scheme: dark)
    //         background: lighten(ui.$dark, 3) 
    //     box-shadow: s.$card-shadow
        
    //     @media screen and ( max-width: 720px )
    //         display: flex
    //         justify-content: center
    //         margin: 0 auto
</style>