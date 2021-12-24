<script>
	import ProjectRow from './../components/project-row.svelte';
	import Footer from './../components/footer.svelte';
	import SocialLinks from './../components/social-links.svelte';
    import Profile from '../components/profile.svelte';
</script>
<script context="module">
    export const projects = [
        {
            key: 'sourcery',
            name: 'Sourcery',
            subtitle: 'UX Design',
            color: '#654EA3'
        },
        {
            key: 'charlesvr',
            name: 'CharlesV|R',
            subtitle: 'Front End Development',
            color: '#401221'
        },
        {
            key: 'dog-lane',
            name: 'Dog Lane Cafe',
            subtitle: 'Branding',
            color: '#F87C56'
        },
    ]

</script>
<Profile />
{#each projects as project}
    <ProjectRow {project}/>
{/each}