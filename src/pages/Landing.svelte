<script lang="ts">
	import GlitchText from '../components/GlitchText.svelte';
	const wordArray = [
		'software developer',
		'full-stack developer',
		'designer',
		'critical thinker',
		'great collaborator',
		'motivated learner'
	];

	let show = false;

	setTimeout(() => {
		show = true;
	}, 300);
</script>

<div class="flex w-full justify-center items-center text-7xl flex-col gap-10 h-screen">
	<div class="flex flex-col items-center justify-center">
		<h1 class="font-bold">BRIAN HO</h1>
		<div class="flex">
			<p class="text-2xl">I am a&nbsp;</p>
			{#if show}
				<GlitchText {wordArray} />
			{/if}
		</div>
	</div>
	<div class="flex flex-col items-center justify-center gap-5">
		<p class="text-2xl">Which pill will you pick to embark on your journey?</p>
		<div class="flex gap-10">
			<div class="flex flex-col items-center justify-center gap-2">
				<!-- !!! Add animation -->
				<a class="bg-[#55D7E7] text-lg px-7 py-1 rounded-xl cursor-pointer" href="#work"
					>Blue Pill</a
				>
				<p class="text-sm">for the browsers</p>
			</div>
			<div class="flex flex-col items-center justify-center gap-2">
				<!-- !!! Add animation -->
				<a
					class="bg-[#FF1F6F] text-lg px-7 py-1 rounded-xl cursor-pointer"
					href="https://terminal.brianho.tech/">Red Pill</a
				>
				<p class="text-sm">for the enthusiasts</p>
			</div>
		</div>
	</div>
</div>
