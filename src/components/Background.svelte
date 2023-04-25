<script lang="ts">
	let cursorPosition = { x: 0, y: 0 };

	const circleSize = 400;

	const handleMouseMove = (e: any) => {
		cursorPosition.x = e.clientX - circleSize / 2;
		cursorPosition.y = e.clientY - circleSize / 2;
	};
	// style="transform: translate({cursorPosition.x}px, {cursorPosition.y}px); height: {circleSize +
	// 	150}px"

	// style="transform: translate({cursorPosition.x}px, {cursorPosition.y}px);"

	// style="transform: translate({cursorPosition.x +
	// 100}px, {cursorPosition.y}px); height: {circleSize + 100}px"
</script>

<html lang="">
	<div
		class="w-screen h-screen absolute dark:bg-dark-background bg-light-background top-0 left-0 -z-50 transition-all duration-300 overflow-hidden"
		on:mousemove={handleMouseMove}
	>
		<!-- <section class="w-screen h-screen absolute bg-[#55BCD2] mix-blend-overlay" /> -->
		<section
			class="w-screen h-screen absolute bg-dark-background z-10 bg-blend-overlay opacity-80"
		/>
		<section class="bg-[#122392] aspect-video absolute rounded-full blur-3xl w-1/3 top-0 left-0" />
		<section
			class="bg-[#a90926] absolute aspect-video rounded-full blur-3xl w-full -bottom-3/4 rotate-12"
		/>
		<section
			class="bg-[#DB00FF] absolute aspect-square rounded-full blur-3xl w-1/3 -top-1/4 right-0 opacity-75"
		/>
		<section
			class="bg-[#3EF4DF] aspect-square absolute rounded-full blur-3xl w-2/6 right-0 -bottom-1/4 opacity-40"
		/>
	</div>
</html>
