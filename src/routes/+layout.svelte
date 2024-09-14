<script lang="ts">
	import '../app.css';
	import Background from '../components/Background.svelte';
	import Navbar from '../components/Navbar.svelte';
	import theme from '../lib/stores/theme';

	$: themeDark = $theme === 'dark';
	$: currentTheme = themeDark ? 'dark' : '';
</script>

<div class={currentTheme}>
	<main
		class="dark:fill-dark-ow dark:text-dark-ow text-light-black transition-all duration-30000 font-mono overflow-hidden"
	>
		<Navbar />
		<slot />
		<Background />
	</main>
</div>

<style lang="scss">
	.revealPage {
		position: absolute;
		animation: 1s ease-in-out slideInFromLeft;
		animation-fill-mode: forwards;
		animation-delay: 2s;

		> p {
			animation: 0.5s ease-in fadeIn;
			animation-fill-mode: forwards;
			animation-delay: 0.5s;
		}
	}

	@keyframes slideInFromLeft {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
