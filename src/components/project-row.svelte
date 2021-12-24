<script>
    export let project;
    export let noMargin = false;
    export let noHover = false;
    export let noLink = false;
    // function to convert hex code to equivalent color with 20% opacity
    function convertColor(hex, opacity) {
        hex = hex.replace('#', '');
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);

        let result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
        return result;
    }
    let shadowColor = convertColor(project.color, 20)
</script>
{#if !noLink}
<a id="{project.key}" href="/projects/{project.key}" class:hover:scale-105={!noHover} class:group={!noHover} class="shadow-lg min-h-[35vh] flex flex-col md:grid md:grid-cols-[8fr_7fr] rounded-lg md:rounded-3xl transition-transform shadow-mueller-900" class:my-8={!noMargin} style={`background-color: ${project.color}; --tw-shadow-color: ${shadowColor}`}>
    <div class="flex flex-col justify-center items-center md:items-start md:ml-16 text-white py-16">
        <h1 class="text-5xl group-hover:scale-[1.15] group-hover:after:opacity-100 after:opacity-0 after:content-['_❱'] origin-bottom-left transition-transform after:transition-[opacity] uppercase font-extrabold pt-8 pb-4 text-center">{project.name}</h1>
        <h2 class="text-3xl font-semibold opacity-80 group-hover:scale-[1.1] origin-top-left transition-transform text-center">{project.subtitle}</h2>
    </div>
    <div class="flex items-end md:pt-8 px-8 md:pr-16">
        <img src="../{project.key}.png" alt="{project.name}" class="group-hover:scale-[1.05] origin-bottom transition-transform">
    </div>
</a>
{:else}
<div id="{project.key}" href="/projects/{project.key}" class:hover:scale-[1.03]={!noHover} class:group={!noHover} class="shadow-lg min-h-[35vh] flex flex-col md:grid md:grid-cols-[8fr_7fr] rounded-lg md:rounded-3xl transition-transform shadow-mueller-900" class:my-8={!noMargin} style={`background-color: ${project.color}; --tw-shadow-color: ${shadowColor}`}>
    <div class="flex flex-col justify-center items-center md:items-start md:ml-16 text-white py-16">
        <h1 class="text-5xl group-hover:scale-[1.15] group-hover:after:opacity-100 after:opacity-0 after:content-['_→'] origin-bottom-left transition-transform after:transition-[opacity] uppercase font-extrabold pt-8 pb-4 text-center">{project.name}</h1>
        <h2 class="text-3xl font-semibold opacity-80 group-hover:scale-[1.1] origin-top-left transition-transform text-center">{project.subtitle}</h2>
    </div>
    <div class="flex items-end md:pt-8 px-8 md:pr-16">
        <img src="../{project.key}.png" alt="{project.name}" class="group-hover:scale-[1.05] origin-bottom transition-transform">
    </div>
</div>
{/if}