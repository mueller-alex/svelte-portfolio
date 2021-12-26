<script>
import ProjectInfo, {Chip} from '../../components/project-info.svelte';

import ProjectRow from '../../components/project-row.svelte';
import {projects} from '../index.svelte'
let sourceryData = projects.filter(obj => obj.key === 'sourcery')[0];
// let skills = [
//     new Chip('uil:vuejs', '#4FC08D', 'Vue'),
//     new Chip('mdi:nuxt', '#4FC08D', 'Nuxt'),
//     new Chip('simple-icons:vuetify', '#1867c0', 'Vuetify'),
//     new Chip('feather-figma', '#F24E1E', 'Figma'),
// ]
let skills = 'Figma, Nuxt, Vue, Vuetify'
</script>
<svelte:head>
    <title>Sourcery | ALMR Design</title>
</svelte:head>
<ProjectRow project={sourceryData} noHover noLink noMargin/>
<ProjectInfo
    role="UX Designer/Developer"
    timeline="Feb 2020 - Current"
    {skills}
    link="https://sourceryapp.org/"
    linkText="Visit Sourcery"
    color={sourceryData.color}
    >
    <div class="flex flex-col items-center">
        <p class="max-w-prose my-4 leading-relaxed">
            Sourcery is a not-for-profit service that gives researchers access to documents that can't be found online by paying other researchers to find them. It aims to streamline the process that researchers go through by providing one simple platform that works at any collecting institution in our service area (currently New York City, Boston, and Storrs).
        </p>
        <p class="max-w-prose leading-relaxed">
            My role with Sourcery has been UI/UX design and development. I designed and then implemented a new onboarding design that allows users to specify whether they would like to become a Sourcerer (someone who finds documents for other researchers) initially, with the option to become a Sourcerer later. In addition to the login and onboarding screen, I am currently in the process of bringing a new design system to Sourcery, with work starting back up in August 2020.
        </p>
    </div>
</ProjectInfo>