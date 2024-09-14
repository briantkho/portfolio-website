<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { WorkElement } from '../types/WorkType';
	import type { LeadershipElement } from '../types/LeadershipType';
	export let data: WorkElement | LeadershipElement;

	let isExpanded = false;
	let end = '';
	let techString = '';

	const startMonth = new Date(data.startDate)
		.toLocaleString('default', { month: 'long' })
		.slice(0, 3);
	const startYear = new Date(data.startDate).getFullYear();
	const start = `${startMonth} ${startYear}`;

	if (data.endDate) {
		const endMonth = new Date(data.endDate)
			.toLocaleString('default', { month: 'long' })
			.slice(0, 3);
		const endYear = new Date(data.endDate).getFullYear();

		end = `${endMonth} ${endYear}`;
	} else {
		end = 'Present';
	}

	if (data.technology) {
		for (let tech of data.technology) {
			techString += `${tech}, `;
		}
	}

	const clickHandler = () => {
		isExpanded = !isExpanded;
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="w-full h-min glass-bg flex flex-col justify-between rounded-3xl p-5
	gap-2 hover:scale-[102%] transition-all duration-150 cursor-pointer"
	on:click={clickHandler}
>
	<div>
		<div class="flex flex-col justify-between items-start w-full">
			<h1 class="uppercase font-bold text-lg md:text-3xl sm:text-2xl">{data.role}</h1>
			<p class="font-bold text-xs md:text-base sm:text-sm">{start} - {end}</p>
		</div>
		<div class="flex justify-between items-center w-full">
			<p class="text-xs md:text-base sm:text-sm">{data.company} | {data.location}</p>
		</div>
	</div>
	{#if isExpanded}
		<div transition:slide class="flex flex-col gap-3 w-full text-xs md:text-base sm:text-sm">
			<div class="mx-6">
				{#each data.description as item}
					<p>- {item}</p>
				{/each}
			</div>
			{#if data.technology}
				<div>
					<p class="font-bold text-xs md:text-base sm:text-sm">Technology used:</p>
					<p class="text-xs md:text-base sm:text-sm">
						{techString.substring(0, techString.length - 2)}
					</p>
				</div>
			{/if}
		</div>
	{/if}
</div>
