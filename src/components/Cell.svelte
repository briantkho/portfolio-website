<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { WorkElement } from '../types/WorkType';
	export let data: WorkElement;

	const { role, company, startDate, endDate, description, technology, location } = data;

	let isExpanded = false;
	let end = '';
	let techString = '';

	const start = `${new Date(startDate).toDateString().slice(3, 10)}, ${new Date(startDate)
		.toDateString()
		.slice(-4)}`;

	if (endDate) {
		end = `${new Date(endDate).toDateString().slice(3, 10)}, ${new Date(endDate)
			.toDateString()
			.slice(-4)}`;
	} else {
		end = 'Present';
	}

	for (let tech of technology) {
		techString += `${tech}, `;
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
			<h1 class="uppercase font-bold text-lg md:text-3xl sm:text-2xl">{role}</h1>
			<p class="font-bold text-xs md:text-base sm:text-sm">{start} - {end}</p>
		</div>
		<div class="flex justify-between items-center w-full">
			<p class="text-xs md:text-base sm:text-sm">{company} | {location}</p>
		</div>
	</div>
	{#if isExpanded}
		<div transition:slide class="flex flex-col gap-3 w-full text-xs md:text-base sm:text-sm">
			<div class="mx-6">
				{#each description as item}
					<p>- {item}</p>
				{/each}
			</div>
			<div>
				<p class="font-bold text-xs md:text-base sm:text-sm">Technology used:</p>
				<p class="text-xs md:text-base sm:text-sm">
					{techString.substring(0, techString.length - 2)}
				</p>
			</div>
		</div>
	{/if}
</div>
