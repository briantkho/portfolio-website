<script>
	import '../app.css';
	import Background from '../components/Background.svelte';
	import Navbar from '../components/Navbar.svelte';
	import theme from '../lib/stores/theme';

	$: themeDark = $theme === 'dark';
	$: currentTheme = themeDark ? 'dark' : '';
</script>

<div class={currentTheme}>
	<main
		class="dark:fill-dark-ow dark:text-dark-ow text-light-black transition-all duration-30000 mx-40 font-mono"
	>
		<Navbar />
		<slot />
		<Background />
	</main>
</div>
