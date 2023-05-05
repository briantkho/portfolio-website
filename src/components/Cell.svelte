<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { WorkElement } from '../types/WorkType';
	export let data: WorkElement;

	const { role, company, startDate, endDate, description, technology, location } = data;

	let isExpanded = false;
	let end = '';

	const start = `${startDate.slice(3, 10)}, ${startDate.slice(-4)}`;

	if (endDate) {
		end = `${endDate.slice(3, 10)}, ${endDate.slice(-4)}`;
	} else {
		end = 'Present';
	}

	const clickHandler = () => {
		isExpanded = !isExpanded;
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="w-full h-min glass-bg flex flex-col justify-between rounded-3xl p-5 gap-2 hover:scale-[102%] transition-all duration-150 cursor-pointer"
	on:click={clickHandler}
>
	<div>
		<div class="flex justify-between items-center w-full">
			<h1 class="uppercase font-bold text-3xl">{role}</h1>
			<p class="font-bold">{start} - {end}</p>
		</div>
		<div class="flex justify-between items-center w-full">
			<p>{company} | {location}</p>
		</div>
	</div>
	{#if isExpanded}
		<div transition:slide class="flex flex-col gap-3">
			<div class="mx-6">
				{#each description as item}
					<p>- {item}</p>
				{/each}
			</div>
			<div class="flex">
				<p>Technology used:&nbsp;</p>
				{#each technology as item}
					<p>{item},&nbsp;</p>
				{/each}
			</div>
		</div>
	{/if}
</div>
