<script lang="ts">
	let cursorPosition = { x: 0, y: 0 };

	const handleMouseMove = (e: MouseEvent) => {
		// e.bubbles();
		cursorPosition.x = e.clientX;
		cursorPosition.y = e.clientY;
	};

	// style="transform: translate({cursorPosition.x}px, {cursorPosition.y}px);"

	// style="transform: translate({cursorPosition.x +
	// 100}px, {cursorPosition.y}px); height: {circleSize + 100}px"
</script>

<html lang="">
	<div
		class="w-screen h-screen absolute dark:bg-dark-background bg-light-background top-0 left-0 transition-all duration-300 overflow-hidden -z-50"
		on:mousemove={handleMouseMove}
	>
		<!-- <section
			id="blob"
			class="duration-300 ease-linear"
			style="transform: translate({cursorPosition.x - 250}px, {cursorPosition.y - 250}px);"
		/>
		<div class="absolute w-full h-full backdrop-blur-3xl" /> -->
	</div>
</html>

<style lang="scss">
	#blob {
		position: absolute;
		background-color: white;
		height: 500px;
		aspect-ratio: 1;
		border-radius: 50%;
		background: linear-gradient(to right, #5eb1ff, #ff0099);
		opacity: 50%;
		animation: rotate 10s infinite;
	}

	@keyframes rotate {
		// from {
		// 	transform: rotate(0deg);
		// }

		50% {
			scale: 1 1.5;
		}

		// to {
		// 	transform: rotate(360deg);
		// }
	}
</style>
