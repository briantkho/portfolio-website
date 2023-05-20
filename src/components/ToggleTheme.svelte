<script lang="ts">
	import Icon from '@iconify/svelte';
	import theme from '../lib/stores/theme';

	$: themeDark = $theme === 'dark';
</script>

<button
	on:click={() => {
		themeDark ? theme.set('') : theme.set('dark');
	}}
>
	<Icon icon="gg:dark-mode" class="w-5 h-auto lg:w-6" />
</button>
