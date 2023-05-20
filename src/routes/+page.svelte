<script lang="ts">
	export let data;
	import Footer from '../components/Footer.svelte';
	import About from '../pages/About.svelte';
	import Landing from '../pages/Landing.svelte';
	import Projects from '../pages/Projects.svelte';
	import Work from '../pages/Work.svelte';

	const work = data.work;
	const projects = data.project;
	const about = data.about;
	// const skill = data.skill;
	const contact = data.contact;
</script>

<Landing />
<Work data={work} />
<Projects data={projects} />
<About data={about} />
<Footer data={contact} />
