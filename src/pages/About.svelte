<script lang="ts">
	import type { AboutType } from '../types/AboutType';
	export let data: AboutType;
</script>

<div class="w-screen h-screen flex flex-col justify-center gap-10">
	<h1 class="text-7xl font-bold flex items-center justify-center">ABOUT</h1>
	<div class="flex items-center justify-between mx-20">
		<p class="w-1/2">
			I am in my final year @ UBC pursuing a degree in Applied Biology & Computer Science. This
			unique combination has allowed me to explore my passion for the natural world and the endless
			possibilities of technology.<br /><br />

			I find lots of joy and fulfillment from building things from the ground up, and seeing my
			ideas piece together. I believe that the pursuit of knowledge is a lifelong journey, and I am
			committed to continuously learning and staying up-to-date with the latest advancements in my
			field.<br /><br />

			I pride myself in being a great team member, I bring a combination of technical skills,
			adaptability, and a strong work ethic to every project I undertake. I thrive in collaborative
			environments where ideas are freely exchanged, and I actively seek opportunities to contribute
			my expertise while learning from others.<br /><br />

			Currently, I am a Software Developer Intern at ResponsiveAds Inc.<br /><br />

			Feel free to contact me at any of my socials; I’d love to chat!
		</p>
		<img src={data[0].headshot} alt="headshot" class="rounded-full w-1/3" />
	</div>
</div>
