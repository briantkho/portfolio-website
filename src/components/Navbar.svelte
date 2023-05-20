<script lang="ts">
	import GlitchLogo from './GlitchLogo.svelte';
	import ToggleTheme from './ToggleTheme.svelte';
</script>

<div class="absolute w-screen">
	<div class="flex justify-between items-center h-24 mx-10 2xl:h-44 lg:h-36 md:mx-40 sm:mx-20">
		<GlitchLogo />
		<div class="flex justify-between items-center gap-10">
			<ToggleTheme />
		</div>
	</div>
</div>
