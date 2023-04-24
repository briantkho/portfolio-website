<script lang="ts">
	import GlitchLogo from './GlitchLogo.svelte';
	import ToggleTheme from './ToggleTheme.svelte';
</script>

<div class="flex justify-between items-center h-28">
	<GlitchLogo />
	<div class="flex justify-between items-center gap-10">
		<a>Blog</a>
		<a>Contact</a>
		<ToggleTheme />
	</div>
</div>
