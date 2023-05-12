<script lang="ts">
	import type { ProjectType } from '../types/ProjectType';
	export let data: ProjectType;

	const imageRatio = 1 / data.length;
</script>

<h1 class="text-7xl font-bold w-screen py-5 flex items-center justify-center">PROJECTS</h1>
<div class="w-screen h-screen">
	<div class="flex">
		{#each data as project}
			<div class="div-hover overflow-hidden">
				<h1 class="absolute z-10">{project.title}</h1>
				<div class="w-full overflow-hidden">
					<div class="blur-hover bg-dark-background bg-opacity-25" />
					<img src={project.image} alt={project.title} class="w-full object-none h-screen" />
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.div-hover {
		width: 25%;
		transition: width 0.25s ease-in-out;
	}

	h1 {
		opacity: 0;
		transition: all 0.25s ease-in-out;
	}
	.div-hover:hover h1 {
		opacity: 1;
	}

	.div-hover:hover {
		width: 40%;
		cursor: pointer;
		clip-path: inset(0 0 0 0);
	}

	.blur-hover {
		opacity: 0;
		transition: all 0.25s ease-in-out;
		overflow: hidden;
	}

	.div-hover:hover .blur-hover {
		opacity: 1;
		position: absolute;
		width: 40%;
		height: 100%;
		backdrop-filter: blur(10px);
	}
</style>
