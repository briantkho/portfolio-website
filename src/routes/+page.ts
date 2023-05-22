import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const ssr = false;

const url = 'https://www.api.brianho.tech';

export const load = (async ({ fetch }) => {
	const getData = async () => {
		const workRes = await fetch(`${url}/work`);
		const workData = await workRes.json();

		const projectRes = await fetch(`${url}/project`);
		const projectData = await projectRes.json();

		const contactRes = await fetch(`${url}/contact`);
		const contactData = await contactRes.json();

		const aboutRes = await fetch(`${url}/about`);
		const aboutData = await aboutRes.json();

		return {
			work: workData,
			project: projectData,
			contact: contactData,
			about: aboutData
		};
	};

	const data = await getData();

	if (data) return data;

	error(404, 'Not found');
}) satisfies PageLoad;
