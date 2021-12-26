<script>
	import Button from '../components/button.svelte';
    import SocialLinks from '../components/social-links.svelte';
</script>
<div class="min-h-[40vh] flex items-center">
    <div class="flex flex-col justify-center items-center md:grid md:grid-cols-[2fr_1fr] md:items-center md:gap-x-4 max-w-7xl mx-auto">
        <div class="flex flex-col justify-center items-center md:block">
            <h1 class="text-5xl uppercase font-extrabold tracking-wider text-center md:text-left leading-snug"><div id="waving" class="inline-block">👋</div> <br class="md:hidden"> Hi, I'm Alex!</h1>
            <p class="text-center md:text-left text-xl font-medium my-6 max-w-[45ch] leading-relaxed">I'm a UX designer and developer. I love taking apps from an idea, to a design, to a fully fleshed out project.</p>
            <SocialLinks />
            <!-- <Button text="View Resume" classes="mt-4"/> -->
        </div>
        <div class="order-first md:order-last py-16 md:p-0 mx-auto max-w-[80%] md:max-w-none">
            <img src="../pfpsmall.jpg" alt="Alex Mueller" id="pfp" class="rounded-full outline outline-[32px] outline-mueller-100 dark:outline-mueller-900">
        </div>
    </div>
</div>
<style lang="sass">
    @keyframes wave 
        0% 
            transform: rotate(  0.0deg)
        
        10% 
            transform: rotate(-20.0deg)
        
        20% 
            transform: rotate( 20.0deg)
        
        30% 
            transform: rotate(-20.0deg)
        
        40% 
            transform: rotate(  9.0deg)
        
        50% 
            transform: rotate(  0.0deg)
        
        100% 
            transform: rotate(  0.0deg)
    #waving 
        @media ( prefers-reduced-motion: no-preference ) 
            animation-name: wave
            animation-duration: 3.5s
            animation-iteration-count: infinite
            transform-origin: 70% 70%
    
</style>