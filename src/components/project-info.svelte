<script>
	import IconChip from './icon-chip.svelte';
    import Icon from "@iconify/svelte";
    export let link = ''
    export let role = ''
    export let linkText
    export let skills = [];
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

<div class="flex flex-col p-8 bg-mueller-50 dark:bg-mueller-800 rounded-3xl shadow-lg space-y-2">
    <h6 class="text-md uppercase tracking-widest font-bold">Role</h6>
    <div class="flex items-center">
        <IconChip icon='mdi-clipboard-account' color="#ffffff"/>
        <div class="ml-4">
            {role}
        </div>
    </div>
    <h6 class="text-md uppercase tracking-widest font-bold">Timeline</h6>
    <IconChip icon='mdi:clipboard-text-clock' color="#ffffff"/>
    <h6 class="text-md uppercase tracking-widest font-bold">Skills Used</h6>
    <div class="flex">
        {#each skills as skill}
        <IconChip icon={skill.icon} color={skill.color} text={skill.text}/>
        {/each}
    </div>
    {#if link}
    <h6 class="text-md uppercase tracking-widest font-bold">Visit</h6>
    <a href={link} class="flex items-center">
        <IconChip icon='mdi:open-in-new' color="#ffffff"/>
        <div class="ml-4 underline underline-offset-8">
            {linkText}
        </div>
    </a>
    {/if}
</div>