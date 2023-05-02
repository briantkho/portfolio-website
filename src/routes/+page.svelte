<script lang="ts">
	export let data;
	import Landing from '../pages/Landing.svelte';
	import Work from '../pages/Work.svelte';

	const work = data.work;
	const project = data.project;
	const skill = data.skill;
	const contact = data.contact;
</script>

<Landing />
<Work data={work} />
