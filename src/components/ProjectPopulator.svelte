<script lang="ts">
	import ArrowLink from '$c/arrow-link.svelte';
	import Card from '$c/card.svelte';
	import type { Project } from '../lib/types/project.type';
	export let project: Project;
</script>

{#each project.page as section}
	<h3 class="font-space text-5xl font-bold lowercase leading-relaxed tracking-wide">
		{section.title}
	</h3>
	{#each section.nodes as node}
		{#if node.key === 'text'}
			{#each node.content as paragraph}
				<p class="max-w-prose text-lg leading-relaxed">{paragraph}</p>
			{/each}
		{:else if node.key === 'image' && !node.grid}
			{#if node.caption}
				<h3 class="font-space text-2xl lowercase tracking-wide">{node.caption}</h3>
			{/if}
			{#each node.content as image}
				<Card class="p-6 h-fit">
					<img src={image.src} alt={image.alt} class="rounded-lg" />
				</Card>
			{/each}
		{:else if node.key === 'image'}
			{#if node.caption}
				<h3 class="font-space text-2xl lowercase tracking-wide">{node.caption}</h3>
			{/if}
			<div class="grid gap-8 lg:grid-cols-2">
				{#each node.content as image}
					<Card class="p-6 h-fit">
						<img src={image.src} alt={image.alt} class="rounded-lg" />
					</Card>
				{/each}
			</div>
		{:else if node.key === 'text-image'}
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
				{#each node.content as pair}
					<div class="space-y-8">
						{#each pair.paragraphs as paragraph}
							<p class="max-w-prose text-lg leading-relaxed">
								{paragraph}
							</p>
						{/each}
					</div>
					<Card class="p-6 h-fit">
						<img src={pair.image.src} alt={pair.image.alt} class="rounded-lg" />
					</Card>
				{/each}
			</div>
		{:else if node.key === 'iframe'}
			{#if node.caption}
				<h3 class="font-space text-2xl lowercase tracking-wide">{node.caption}</h3>
			{/if}
			{#each node.content as iframe}
				<Card class="aspect-[9/16] sm:aspect-video">
					<iframe
						loading="lazy"
						title={iframe.title}
						src={iframe.src}
						allowfullscreen={iframe.allowFullScreen}
						class="lazyload h-full w-full rounded-xl"
					/>
				</Card>
			{/each}
		{:else if node.key === 'link'}
			{#each node.content as link}
				<ArrowLink href={link.url} text={link.text} rotate={link.rotate} icon={link.icon} />
			{/each}
		{/if}
	{/each}
{/each}
