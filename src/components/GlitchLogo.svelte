<div class="relative w-8 lg:w-12 sm:w-10">
	<div class="stack" style="--stacks: 3;">
		<span style="--index: 0; white-space: nowrap;" class="text-mono"
			><svg
				viewBox="0 0 704 1056"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style="--index: 0;"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M173.379 177.411V0L524.169 172.73V277.407L704 366.753V791.093L171.766 1055.6V876.573L0 790.286V261.278L173.379 177.411ZM173.379 177.411V864.477L543.523 695.936V484.655L371.757 399.175V516.105L346.758 503.203V263.698L173.379 177.411Z"
					class="fill-dark-background dark:fill-dark-ow"
				/>
			</svg></span
		>
		<span style="--index: 1; white-space: nowrap;" class="text-mono"
			><svg
				viewBox="0 0 704 1056"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style="--index: 0;"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M173.379 177.411V0L524.169 172.73V277.407L704 366.753V791.093L171.766 1055.6V876.573L0 790.286V261.278L173.379 177.411ZM173.379 177.411V864.477L543.523 695.936V484.655L371.757 399.175V516.105L346.758 503.203V263.698L173.379 177.411Z"
					class="fill-dark-background dark:fill-dark-ow"
				/>
			</svg></span
		>
		<span style="--index: 2; white-space: nowrap;" class="text-mono"
			><svg
				viewBox="0 0 704 1056"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style="--index: 0;"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M173.379 177.411V0L524.169 172.73V277.407L704 366.753V791.093L171.766 1055.6V876.573L0 790.286V261.278L173.379 177.411ZM173.379 177.411V864.477L543.523 695.936V484.655L371.757 399.175V516.105L346.758 503.203V263.698L173.379 177.411Z"
					class="fill-dark-background dark:fill-dark-ow"
				/>
			</svg></span
		>
	</div>
</div>

<style lang="scss">
	.stack {
		display: grid;
		grid-template-columns: 1fr;
	}

	.stack span {
		font-weight: bold;
		grid-row-start: 1;
		grid-column-start: 1;
		font-size: 4rem;
		--stack-height: calc(100% / var(--stacks) - 1px);
		--inverse-index: calc(calc(var(--stacks) - 1) - var(--index));
		--clip-top: calc(var(--stack-height) * var(--index));
		--clip-bottom: calc(var(--stack-height) * var(--inverse-index));
		clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);
		animation: stack 340ms cubic-bezier(0.46, 0.29, 0, 1.24) 1 backwards calc(var(--index) * 120ms),
			glitch 2s ease infinite 2s alternate-reverse;
	}

	.stack span:nth-child(odd) {
		--glitch-translate: 8px;
	}
	.stack span:nth-child(even) {
		--glitch-translate: -8px;
	}

	@keyframes stack {
		0% {
			opacity: 0;
			transform: translateX(-50%);
			text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
		}
		60% {
			opacity: 0.5;
			transform: translateX(50%);
		}
		80% {
			transform: none;
			opacity: 1;
			text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
		}
		100% {
			text-shadow: none;
		}
	}

	@keyframes glitch {
		0% {
			text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
			transform: translate(var(--glitch-translate));
		}
		2% {
			text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
		}
		4%,
		100% {
			text-shadow: none;
			transform: none;
		}
	}
</style>
