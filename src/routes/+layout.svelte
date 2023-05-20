<script lang="ts">
	import '../app.css';
	import Background from '../components/Background.svelte';
	import Navbar from '../components/Navbar.svelte';
	import theme from '../lib/stores/theme';

	$: themeDark = $theme === 'dark';
	$: currentTheme = themeDark ? 'dark' : '';
</script>

<div class={currentTheme}>
	<div
		class="revealPage w-screen h-screen bg-dark-background z-40 shadow-lg top-0 left-0 transition-all"
	>
		<p class="z-50 text-dark-ow opacity-0 flex justify-center items-center h-full headerText">
			WELCOME.
		</p>
	</div>
	<main
		class="dark:fill-dark-ow dark:text-dark-ow text-light-black transition-all duration-30000 font-mono"
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
