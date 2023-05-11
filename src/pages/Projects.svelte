<script lang="ts">
	import type { ProjectType } from '../types/ProjectType';
	export let data: ProjectType;

	const imageRatio = 1 / data.length;
</script>

<h1 class="text-7xl font-bold w-screen py-5 flex items-center justify-center">PROJECTS</h1>
<div class="w-screen h-screen flex">
	{#each data as project}
		<div class="w-full h-full flex">
			<img
				src={project.image}
				alt={project.title}
				class="object-none h-screen w-[{imageRatio}] cursor-pointer hover:w-[133%]"
			/>
			<!-- !!! expand width on hover -->
		</div>
		<!-- <div class="w-full h-full backdrop-blur-md sticky" /> -->
		<!-- <div class="w-screen h-screen overflow-hidden">
			<h1 class="absolute">{project.title}</h1>
			<div class="flex items-center justify-center">
				<img
					src={project.image}
					alt={project.title}
					class="object-none w-screen h-screen aspect-video max-w-none"
				/>
			</div>
		</div> -->
	{/each}
</div>
