<script lang="ts">
	const handleMouseMove = (
		e: MouseEvent & {
			currentTarget: EventTarget & HTMLDivElement;
		}
	) => {
		const { clientX, clientY } = e;

		e.currentTarget.animate(
			{
				left: `${clientX}px`,
				top: `${clientY}px`
			},
			{ duration: 3000, fill: 'forwards' }
		);
	};
</script>

<div
	class="w-screen h-screen fixed dark:bg-dark-background bg-light-background top-0 left-0 transition-all duration-300 overflow-hidden -z-10"
>
	<div
		id="blob"
		class="opacity-75 dark:opacity-50"
		on:mousemove={(e) => {
			handleMouseMove(e);
		}}
	/>
</div>

<style lang="scss">
	#blob {
		height: 500px;
		aspect-ratio: 1;
		position: absolute;
		border-radius: 50%;
		background: linear-gradient(to right, #5eb1ff, #ff0099);
		left: 50%;
		top: 50%;
		translate: -50% -50%;
		animation: rotate 10s infinite;
		filter: blur(100px);
	}

	@keyframes rotate {
		from {
			rotate: 0deg;
		}

		50% {
			scale: 1 1.5;
		}

		to {
			rotate: 360deg;
		}
	}
</style>
