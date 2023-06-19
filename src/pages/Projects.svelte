<script lang="ts">
	import type { ProjectType } from '../types/ProjectType';
	export let data: ProjectType;

	import Icon from '@iconify/svelte';

	let projects = data.sort(
		(a, b) => new Date(b.completedDate).valueOf() - new Date(a.completedDate).valueOf()
	);

	// Brings present work to front of the array
	for (let project of projects) {
		if (!project.completedDate) {
			let projectIndex = projects.indexOf(project);
			projects.splice(projectIndex, 1);
			projects.unshift(project);
		}
	}

	const technology = (data: [string]) => {
		return data.toString().replaceAll(',', ' | ');
	};
</script>

<h1 class="headerText w-screen py-5 flex items-center justify-center">PROJECTS</h1>
<div class="w-screen">
	<div class="flex flex-col h-screen md:flex-row">
		{#each projects as project}
			<div class="div-hover overflow-hidden">
				<div
					class="w-screen object-none h-full bg-center bg-no-repeat bg-cover
					md:w-full md:h-screen"
					style="background-image: url({project.image});"
				>
					<div
						class="project-details bg-dark-background bg-opacity-50 backdrop-blur-md transition-all"
					>
						<div
							class="w-screen h-full flex flex-col justify-center gap-5 text-dark-ow
							md:justify-end md:h-screen md:w-full"
						>
							<div class="m-10 flex flex-col gap-2">
								<h1 class="font-bold text-2xl lg:text-5xl md:text-4xl sm:text-3xl">
									{project.title}
								</h1>
								<p class="text-xs md:text-base sm:text-sm">{project.description}</p>
								<p class="text-xs md:text-base sm:text-sm">
									{technology(project.technology)}
								</p>
								<div class="flex gap-2 items-center">
									<a href={project.repo} target="_blank">
										<Icon icon="fe:github-alt" class="text-xs md:text-4xl sm:text-2xl" />
									</a>
									{#if project.url}
										<a href={project.url} target="_blank">
											<Icon
												icon="material-symbols:play-circle-rounded"
												class="text-xs md:text-4xl sm:text-2xl"
											/>
										</a>
									{/if}
								</div>
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
		width: 100%;
		height: 25%;
		transition: height 0.25s ease-in-out;
	}

	.div-hover:hover {
		height: 50%;
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

	@media (min-width: 768px) {
		.div-hover {
			width: 25%;
			height: 100vh;
			transition: width 0.25s ease-in-out;
		}

		.div-hover:hover {
			width: 50%;
			height: 100vh;
			clip-path: inset(0 0 0 0);
		}
	}
</style>
