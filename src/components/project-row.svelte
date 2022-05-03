<script>
	export let project;
	export let noMargin = false;
	export let noHover = false;
	export let noLink = false;
	const hasTextColor = false;
	// function to convert hex code to equivalent color with 20% opacity
	function convertColor(hex, opacity) {
		hex = hex.replace('#', '');
		let r = parseInt(hex.substring(0, 2), 16);
		let g = parseInt(hex.substring(2, 4), 16);
		let b = parseInt(hex.substring(4, 6), 16);

		let result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
		return result;
	}
	let shadowColor = convertColor(project.textColor, 20);
</script>

{#if !noLink}
	<a
		id={project.key}
		href="/projects/{project.key}"
		class:hover:scale-105={!noHover}
		class:group={!noHover}
		class="flex min-h-[35vh] max-w-full flex-col rounded-lg border-t-2 border-white/[.14] shadow-lg shadow-mueller-900 transition-transform md:grid md:grid-cols-[8fr_7fr] md:rounded-3xl"
		class:my-8={!noMargin}
		style={`background-color: ${project.backgroundColor}; --tw-shadow-color: ${shadowColor}`}
	>
		<div
			class="flex flex-col items-center justify-center py-16 text-white md:ml-16 md:items-start"
			style={project.textColor ? `color: ${project.textColor}` : ''}
		>
			<h1
				class="pt-8 pb-4 text-3xl font-bold uppercase tracking-wider transition-transform after:opacity-0 after:transition-[opacity] group-hover:scale-[1.15] group-hover:after:opacity-100 md:origin-bottom-left md:text-5xl md:after:content-['_->']"
			>
				{@html project.name}
			</h1>
			<h2
				class="text-xl font-semibold tracking-wide opacity-80 transition-transform group-hover:scale-[1.1] md:origin-top-left md:text-3xl"
			>
				{project.subtitle}
			</h2>
		</div>
		<div class="flex items-end px-8 md:pt-8 md:pr-16">
			<img
				src="../{project.key}.png"
				alt={project.name}
				class="origin-bottom transition-transform group-hover:scale-[1.05]"
			/>
		</div>
	</a>
{:else}
	<div
		id={project.key}
		href="/projects/{project.key}"
		class="shadow-lg min-h-[35vh] flex flex-col md:grid md:grid-cols-[8fr_7fr] rounded-lg md:rounded-3xl shadow-mueller-900 border-t-2 border-white/[.14]"
		class:my-8={!noMargin}
		style={`background-color: ${project.color}; --tw-shadow-color: ${shadowColor}`}
	>
		<div
			class="flex flex-col justify-center items-center md:items-start md:ml-16 text-white py-16 md:p-0"
		>
			<h1 class="text-3xl md:text-5xl uppercase font-bold tracking-wider pt-8 pb-4 md:pt-0">
				{project.name}
			</h1>
			<h2 class="text-xl md:text-3xl tracking-wide font-semibold opacity-80">
				{project.subtitle}
			</h2>
		</div>
		<div class="flex items-end md:pt-8 px-8 md:pr-16">
			<img
				src="../{project.key}.png"
				alt={project.name}
				class="group-hover:scale-[1.05] origin-bottom transition-transform"
			/>
		</div>
	</div>
{/if}
