<script>
import ProjectInfo, {Chip} from '../../components/project-info.svelte';

import ProjectRow from '../../components/project-row.svelte';
import {projects} from '../index.svelte'
let sourceryData = projects.filter(obj => obj.key === 'sourcery')[0];
let skills = [new Chip('feather-figma', '#F24E1E', 'Figma')]
</script>
<svelte:head>
    <title>Sourcery | ALMR Design</title>
</svelte:head>
<ProjectRow project={sourceryData} noHover noLink/>
<div class="grid grid-cols-12">
    <div class="col-span-4">
        <ProjectInfo link="https://sourceryapp.org/" linkText="Sourcery" {skills} role="UX Designer/Developer"/>
    </div>
</div>