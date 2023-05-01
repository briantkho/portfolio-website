<script lang="ts">
	import GlitchLogo from './GlitchLogo.svelte';
	import ToggleTheme from './ToggleTheme.svelte';
</script>

<div class="absolute w-screen">
	<div class="flex justify-between items-center h-24 mx-40">
		<GlitchLogo />
		<div class="flex justify-between items-center gap-10">
			<!-- <a>Blog</a>
			<a>Contact</a> -->
			<ToggleTheme />
		</div>
	</div>
</div>
