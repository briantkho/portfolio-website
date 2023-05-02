<script lang="ts">
	export let data;
	import Cell from '../components/Cell.svelte';

	console.log(data);
</script>

<div id="work" class="flex justify-between items-center w-screen h-screen">
	<div class="w-full mx-40 flex justify-between items-center">
		<h1 class="text-7xl font-bold w-min mr-20">WORK <br /> EXP</h1>
		<div class="w-full flex flex-col gap-5">
			<Cell />
		</div>
	</div>
</div>
