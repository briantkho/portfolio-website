<div class="relative w-10">
	<svg viewBox="0 0 704 1056" fill="none" xmlns="http://www.w3.org/2000/svg" class="">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M173.379 177.411V0L524.169 172.73V277.407L704 366.753V791.093L171.766 1055.6V876.573L0 790.286V261.278L173.379 177.411ZM173.379 177.411V864.477L543.523 695.936V484.655L371.757 399.175V516.105L346.758 503.203V263.698L173.379 177.411Z"
			class="fill-dark-background dark:fill-dark-ow"
		/>
	</svg>
	{#each Array(2) as _, index (index)}
		<svg
			viewBox="0 0 704 1056"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="imageStyles [&:nth-child(2)]:fillBlue"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M173.379 177.411V0L524.169 172.73V277.407L704 366.753V791.093L171.766 1055.6V876.573L0 790.286V261.278L173.379 177.411ZM173.379 177.411V864.477L543.523 695.936V484.655L371.757 399.175V516.105L346.758 503.203V263.698L173.379 177.411Z"
				class="fill-dark-background dark:fill-dark-ow"
			/>
		</svg>
	{/each}
</div>

<style lang="scss">
	.imageStyles {
		position: absolute;
		top: 0;
		left: 0;

		&:nth-child(2),
		&:nth-child(3) {
			clip: rect(0, 0, 0, 0);
		}
		&:nth-child(2) {
			left: -2px;
			animation: svg-glitch-effect 2s infinite linear alternate-reverse;
		}
		&:nth-child(3) {
			fill: #f5f5f5;
			left: 2px;
			animation: svg-glitch-effect 3s infinite linear alternate-reverse;
		}
	}

	$steps: 20;

	@keyframes svg-glitch-effect {
		@for $i from 0 through $steps {
			#{percentage($i*(calc(1 / $steps)))} {
				clip: rect(random(95) + px, 1000px, random(50) + px, 0);
			}
		}
	}
</style>
