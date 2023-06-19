<script lang="ts">
	import Cell from '../components/Cell.svelte';
	import type { WorkType } from '../types/WorkType';

	export let data: WorkType;

	let sortedWork = data.sort(
		(a, b) => new Date(b.endDate).valueOf() - new Date(a.endDate).valueOf()
	);

	// Brings unfinished projects to front of the array
	for (let work of sortedWork) {
		if (!work.endDate) {
			let workIndex = sortedWork.indexOf(work);
			sortedWork.splice(workIndex, 1);
			sortedWork.unshift(work);
		}
	}
</script>

<div id="work" class="flex justify-between items-center w-screen min-h-screen">
	<div
		class="w-full flex flex-col gap-3 mx-5 items-center
		lg:mx-20
		md:mx-10 md:flex-row
		sm:mx-5 sm:gap-5"
	>
		<h1 class="headerText justify-center items-center">WORK EXP</h1>
		<div class="w-full flex flex-col gap-5">
			{#each data as work}
				<Cell data={work} />
			{/each}
		</div>
	</div>
</div>
