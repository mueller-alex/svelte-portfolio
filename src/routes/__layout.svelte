<script>
	import Footer from './../components/footer.svelte';
    import { base, assets } from '$app/paths';
    import "../styles/tailwind-output.css";
    let y = 0
    let shrunk = false
    $: {
        shrunk = y > 0 ? true : false
    }
</script>
<svelte:window bind:scrollY={y}/>
<div>
    <nav
        class="flex w-full items-center justify-center h-32 sticky top-0 transition-all bg-transparent z-50"
        class:shrunk
        >
        <a href="/">
            <svg width="48" height="48" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M91.2209 109.136C90.4412 108.668 89.8553 107.936 89.5698 107.073L65.2842 33.6322C64.9573 32.6436 63.5603 32.6391 63.227 33.6255L38.4016 107.089C38.1133 107.942 37.5308 108.665 36.7584 109.128L5.81014 127.695C2.549 129.651 -1.2435 126.13 0.46685 122.734L61.0574 2.41476C62.4642 -0.378661 66.4567 -0.367443 67.8477 2.43384L127.627 122.823C129.313 126.219 125.526 129.716 122.274 127.765L91.2209 109.136Z" fill="currentColor"/>
            </svg></a>
    </nav>
    <div id="app-container" class="max-w-7xl mx-auto px-6">
        <slot></slot>
    </div>
</div>
<Footer/>
<style lang="sass">
    @use './static/colors/ui-colors.scss' as u
    :global(:root)
        scrollbar-color: dark
    
    .shrunk 
        height: 64px
        background: rgba(243, 243, 243, 0.8)
        @media (prefers-color-scheme: dark)
            background: hsla(200, 7%, 8%, .8)
        backdrop-filter: blur(20px) !important
    
    :global(html) 
        height: 100%
    
    :global(#svelte), :global(body) 
        min-height: 100%
        display: grid
        grid-template-rows: 1fr auto
    
    :global(html) 
        background-size: auto
        background-size: 8px 8px
        background-image: -webkit-repeating-radial-gradient( center center, #fff, #fff 1px, u.$light 1px, u.$light 100% )
        @media (prefers-color-scheme: dark)
            background-image: -webkit-repeating-radial-gradient(center center, #1c1f21, #1c1f21 1px, #212527 1px, #212527 100%)
    
    :global(body) 
        margin: 0
        @media (prefers-color-scheme: dark)
            color: white
    
</style>
<!-- <style lang="sass">
    
    nav 
        // width: 100%
        // display: grid
        // place-items: center
        // height: 128px
        // position: sticky
        // top: 0
        // transition: height .1s ease, background .1s ease
        // background: transparent
    
    .shrunk 
        height: 64px
        background: hsla(200, 7%, 8%, .8)
        backdrop-filter: blur(20px) !important

    svg 
        width: 48px
        height: 48px
        color: white
    
</style> -->