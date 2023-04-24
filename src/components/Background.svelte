<script lang="ts">
	let cursorPosition = { x: 0, y: 0 };

	const circleSize = 400;

	const handleMouseMove = (e: any) => {
		cursorPosition.x = e.clientX - circleSize / 2;
		cursorPosition.y = e.clientY - circleSize / 2;
	};
</script>

<div
	class="w-screen h-screen absolute dark:bg-dark-background bg-light-background top-0 left-0 -z-50 transition-all duration-300 overflow-hidden"
	on:mousemove={handleMouseMove}
>
	<section class="w-screen h-screen absolute bg-[#55BCD2] mix-blend-overlay" />
	<section class="w-screen h-screen absolute bg-dark-background mix-blend-overlay" />
	<section
		class="bg-[#5EB1FF] aspect-square absolute rounded-full duration-700 top-1/4 left-3/4 blur-3xl opacity-20 ease-linear"
		style="transform: translate({cursorPosition.x}px, {cursorPosition.y}px); height: {circleSize +
			150}px"
	/>
	<section
		class="bg-[#FF0099] absolute aspect-square rounded-full duration-1000 blur-3xl opacity-10 bottom-0 -left-1/4 ease-in-out"
		style="transform: translate({cursorPosition.x}px, {cursorPosition.y}px); height: {circleSize +
			500}px;"
	/>
	<section
		class="bg-[#3EF4DF] aspect-square absolute rounded-full duration-500 right-2/4 bottom-2/4 blur-3xl opacity-20"
		style="transform: translate({cursorPosition.x +
			100}px, {cursorPosition.y}px); height: {circleSize + 100}px"
	/>
</div>
