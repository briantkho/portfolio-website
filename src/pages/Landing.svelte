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

<div class="flex w-full justify-center items-center flex-col gap-10 h-screen 2xl:gap-16 snap-start">
	<div class="flex flex-col items-center justify-center">
		<h1 class="headerText">BRIAN HO</h1>
		<div class="flex">
			<p class="text-base md:text-2xl sm:text-xl">I am a&nbsp;</p>
			{#if show}
				<GlitchText {wordArray} />
			{/if}
		</div>
	</div>
	<div class="flex flex-col items-center justify-center gap-5 2xl:gap-10">
		<p class="text-center mx-10 text-base md:text-2xl sm:text-lg sm:mx-0">
			Which pill will you pick to embark on your journey?
		</p>
		<div class="flex flex-col gap-5 sm:gap-10 sm:flex-row">
			<div class="flex flex-col items-center justify-center gap-2">
				<a
					class="hover-blue bg-[#55D7E7] text-base px-7 py-1 rounded-xl cursor-pointer hover:bg-[#3EACC6] transition-all duration-150 md:text-lg"
					href="#work"
				>
					Blue Pill
				</a>
				<p class="md:text-base text-sm">for the browsers</p>
			</div>
			<div class="flex flex-col items-center justify-center gap-2">
				<a
					class="bg-[#FF1F6F] hover:bg-[#DB1670] transition-all duration-150 text-base px-7 py-1 rounded-xl cursor-pointer md:text-lg"
					href="https://terminal.brianho.tech/"
				>
					Red Pill
				</a>
				<p class="md:text-base text-sm">for the enthusiasts</p>
			</div>
		</div>
	</div>
</div>

<style>
</style>
