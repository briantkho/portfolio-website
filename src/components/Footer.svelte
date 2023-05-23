<script lang="ts">
	import type { ContactType } from '../types/ContactType';
	import Icon from '@iconify/svelte';
	export let data: ContactType;

	const contact = data[0];
</script>

<div
	class="w-screen flex flex-col justify-center items-center
    h-32 border-t border-dark-background border-opacity-50 gap-2
    dark:border-dark-ow dark:border-opacity-50 snap-start"
>
	<p class="lg:text-lg md:text-base sm:text-sm text-xs">By Brian Ho</p>
	<div class="flex gap-2 justify-center lg:text-2xl sm:text-xl">
		<a href={contact.github} target="_blank" class="hover:opacity-40 transition-all duration-200"
			><Icon icon="mdi:github" /></a
		>
		<a href={contact.linkedin} target="_blank" class="hover:opacity-40 transition-all duration-200"
			><Icon icon="uil:linkedin" /></a
		>
		<a href={contact.resume} target="_blank" class="hover:opacity-40 transition-all duration-200"
			><Icon icon="mdi:resume" /></a
		>
		<a href={contact.emailLink} target="_blank" class="hover:opacity-40 transition-all duration-200"
			><Icon icon="ic:round-email" /></a
		>
	</div>
</div>
