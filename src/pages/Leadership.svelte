<script lang="ts">
	import type { LeadershipType } from '../types/LeadershipType';
	import Cell from '../components/Cell.svelte';
	export let data: LeadershipType;

	let sortedLeadership = data.sort(
		(a, b) => new Date(b.endDate).valueOf() - new Date(a.endDate).valueOf()
	);

	// Brings unfinished projects to front of the array
	for (let leadership of sortedLeadership) {
		if (!leadership.endDate) {
			let workIndex = sortedLeadership.indexOf(leadership);
			sortedLeadership.splice(workIndex, 1);
			sortedLeadership.unshift(leadership);
		}
	}
</script>

<div id="leadership" class="flex justify-between items-center w-screen min-h-screen">
	<div
		class="w-full flex flex-col gap-3 mx-5 items-center
		lg:mx-20
		md:mx-10 md:flex-row
		sm:mx-5 sm:gap-5"
	>
		<h1 class="headerText justify-center items-center">LEADERSHIP EXP</h1>
		<div class="w-full flex flex-col gap-5">
			{#each data as leadership}
				<Cell data={leadership} />
			{/each}
		</div>
	</div>
</div>
