import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const ssr = false;

const url = 'http://localhost:8080';

export const load = (async ({ fetch }) => {
	const getData = async () => {
		const workRes = await fetch(`${url}/work`);
		const workData = await workRes.json();

		const projectRes = await fetch(`${url}/projects`);
		const projectData = await projectRes.json();

		// const skillRes = await fetch(`${url}/skills`);
		// const skillData = await skillRes.json();

		const contactRes = await fetch(`${url}/contact`);
		const contactData = await contactRes.json();

		const aboutRes = await fetch(`${url}/about`);
		const aboutData = await aboutRes.json();

		return {
			work: workData,
			project: projectData,
			// skill: skillData,
			contact: contactData,
			about: aboutData
		};
	};

	const data = await getData();

	if (data) return data;
	console.log(data);

	error(404, 'Not found');
}) satisfies PageLoad;
