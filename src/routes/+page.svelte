<script lang="ts">
	export let data;
	import Footer from '../components/Footer.svelte';
	import About from '../pages/About.svelte';
	import Landing from '../pages/Landing.svelte';
	import Leadership from '../pages/Leadership.svelte';
	import Projects from '../pages/Projects.svelte';
	import Work from '../pages/Work.svelte';

	const work = data.work;
	const projects = data.project;
	const about = data.about;
	const contact = data.contact;
	const leadership = data.leadership;
	console.log(data);
</script>

<Landing />
<Work data={work} />
<Projects data={projects} />
<Leadership data={leadership} />
<About data={about} />
<Footer data={contact} />
