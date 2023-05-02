import { error } from '@sveltejs/kit';

const url = 'http://localhost:8080';

export async function load({ fetch }) {
	const getData = async () => {
		const workRes = await fetch(`${url}/work`);
		const workData = await workRes.json();

		const projectRes = await fetch(`${url}/project`);
		const projectData = await projectRes.json();

		const skillRes = await fetch(`${url}/skill`);
		const skillData = await skillRes.json();

		const contactRes = await fetch(`${url}/contact`);
		const contactData = await contactRes.json();

		return { work: workData, project: projectData, skill: skillData, contact: contactData };
	};

	const data = await getData();

	if (data) return data;

	error(404, 'Not found');
}
