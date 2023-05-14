<script lang="ts">
	import type { ProjectType } from '../types/ProjectType';
	export let data: ProjectType;

	import Icon from '@iconify/svelte';

	const technology = (data: [string]) => {
		return data.toString().replaceAll(',', ' | ');
	};
</script>

<h1 class="text-7xl font-bold w-screen py-5 flex items-center justify-center">PROJECTS</h1>
<div class="w-screen h-screen">
	<div class="flex">
		{#each data as project}
			<div class="div-hover overflow-hidden">
				<div
					class="w-full object-none h-screen bg-center bg-no-repeat"
					style="background-image: url({project.image});"
				>
					<div
						class="project-details bg-dark-background bg-opacity-50 backdrop-blur-md transition-all"
					>
						<div class="w-full h-full p-12 flex flex-col justify-end gap-2 text-dark-ow">
							<h1 class="font-bold text-5xl">
								{project.title}
							</h1>
							<p>{project.summary}</p>
							<p>{technology(project.technology)}</p>
							<div class="flex gap-2 items-center">
								<a href={project.repo} target="_blank">
									<Icon icon="fe:github-alt" class="text-4xl" />
								</a>
								{#if project.url}
									<a href={project.url} target="_blank">
										<Icon icon="material-symbols:play-circle-rounded" class="text-4xl" />
									</a>
								{/if}
							</div>
						</div>
					</div>
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

	.div-hover:hover {
		width: 50%;
		clip-path: inset(0 0 0 0);
	}

	.div-hover:hover .project-details {
		opacity: 1;

		> h1 {
			opacity: 1;
		}
	}

	.div-hover:hover .blur-hover {
		opacity: 1;
		position: absolute;
		width: 40%;
		height: 100%;
		backdrop-filter: blur(10px);
	}

	.blur-hover {
		opacity: 0;
		transition: all 0.25s ease-in-out;
		overflow: hidden;
	}

	.project-details {
		width: 100%;
		height: 100%;
		opacity: 0;

		> div {
			> h1 {
				bottom: 0;
			}
		}
	}
</style>
