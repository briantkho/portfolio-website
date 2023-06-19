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
			I am in my final year @ UBC pursuing a degree in Applied Biology & Computer Science. I find
			lots of joy and fulfillment from building things from the ground up, and seeing my ideas piece
			together. I believe that the pursuit of knowledge is a lifelong journey, and I am committed to
			continuously learning and staying up-to-date with the latest advancements in my field.<br
			/><br />

			I pride myself in being a great team member. I bring a combination of technical skills,
			adaptability, and a strong work ethic to every project I undertake. I thrive in collaborative
			environments where ideas are freely exchanged, and I actively seek opportunities to contribute
			my expertise while learning from others.<br /><br />

			Currently, I am a Software Developer Intern at ResponsiveAds Inc.<br /><br />

			Feel free to contact me at any of my socials; I’d love to chat!
		</p>
		<img src={data[0].headShot} alt="headShot" class="rounded-full w-1/3 shadow-xl" />
	</div>
</div>
