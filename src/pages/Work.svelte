<script lang="ts">
	import Cell from '../components/Cell.svelte';
	import type { WorkType } from '../types/WorkType';

	export let data: WorkType;

	const sortedWork = data.sort(
		(a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
	);
</script>

<div id="work" class="flex justify-between items-center w-screen h-screen">
	<div class="w-full mx-40 flex justify-between items-center">
		<h1 class="text-7xl font-bold w-min mr-20">WORK <br /> EXP</h1>
		<div class="w-full flex flex-col gap-5">
			{#each data as work}
				<Cell data={work} />
			{/each}
		</div>
	</div>
</div>
