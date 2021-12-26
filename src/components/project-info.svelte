<script>
	import Button from './button.svelte';
	import IconChip from './icon-chip.svelte';
    import Icon from "@iconify/svelte";
    export let link = ''
    export let linkText = ''
    export let color = ''
    export let role = ''
    export let skills = '';
    export let timeline = ''
</script>
<script context="module">
    export class Chip {
        constructor(icon, color, text) {
            this.icon = icon;
            this.color = color;
            this.text = text;
        }
    }
</script>

<h1 class="text-4xl uppercase font-extrabold px-4 text-center tracking-wider w-full my-8">Overview</h1>
<div class="flex flex-col flex-wrap md:flex-row md:justify-evenly md:gap-8 p-6 space-y-3 md:space-y-0">
    <div id="role" class="flex flex-col items-center flex-1">
        <IconChip icon='mdi-clipboard-account' {color}/>
        <h6 class="text-md uppercase tracking-widest font-bold mt-1">Role</h6>
        <div>
            {role}
        </div>
    </div>
    <div id="timeline" class="flex flex-col items-center flex-1">
        <IconChip icon='mdi:clipboard-text-clock' {color}/>
        <h6 class="text-md uppercase tracking-widest font-bold mt-1">Timeline</h6>
        <div>
            {timeline}
        </div>
    </div>
    <div id="skills" class="flex flex-col items-center flex-1">
        <IconChip icon='grommet-icons:technology' {color}/>
        <h6 class="text-md uppercase tracking-widest font-bold mt-1">Skills Used</h6>
        <div>{skills}</div>
    </div>
    <!-- <div class="flex items-center gap-2 flex-wrap">
        {#each skills as skill}
        <IconChip icon={skill.icon} color={skill.color} text={skill.text}/>
        {/each}
    </div> -->
</div>
<slot></slot>
{#if link}
<div id="link" class="flex flex-col items-center mt-8">
    <Button text={linkText} href={link} rightIcon="mdi:open-in-new" {color}/>
</div>
{/if}