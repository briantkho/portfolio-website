<script lang="ts">
	import type { AboutType } from '../types/AboutType';
	export let data: AboutType;
</script>

<div class="w-screen flex flex-col justify-center gap-10 my-10 md:h-screen md:my-0">
	<h1 class="headerText flex items-center justify-center">ABOUT</h1>
	<div
		class="flex flex-col-reverse gap-5 items-center justify-between 2xl:mx-20 md:mx-5 md:flex-row sm:mx-10"
	>
		<p class="text-xs mx-10 lg:w-1/2 md:text-base md:mx-5 sm:text-sm">
			Hello! <br /><br /> I'm Brian, a graduate of the University of British Columbia with a major
			in Applied Biology and Computer Science and a Software Developer at Copperleaf (IFS).
			<br /><br />
			During my time in the technology space, I have had the pleasure of working as a software developer
			for companies in a wide variety of stages. In these roles, I learned a lot about product development
			and good programming practices, and made sure to apply these new skills to my arsenal! I aim to
			continue my path in software development and am interested in any roles that may help me on my
			journey.<br /><br />

			If you are interested in chatting about anything programming, Formula 1, or would like to work
			together, please do no hesitate to reach out to me. I would love to chat!
		</p>
		<img src={data[0].headShot} alt="headShot" class="rounded-full w-1/3 shadow-xl" />
	</div>
</div>
