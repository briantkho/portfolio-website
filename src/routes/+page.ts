import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const ssr = false;

const url = 'https://api.brianho.tech';

export const load = (async ({ fetch }) => {
	const getData = async () => {
		const getWork = async () => {
			const workRes = await fetch(`${url}/work`);
			return await workRes.json();
		};

		const getProject = async () => {
			const projectRes = await fetch(`${url}/project`);
			return await projectRes.json();
		};

		const getContact = async () => {
			const contactRes = await fetch(`${url}/contact`);
			return await contactRes.json();
		};

		const getAbout = async () => {
			const aboutRes = await fetch(`${url}/about`);
			return await aboutRes.json();
		};

		const getLeadership = async () => {
			const leadershipRes = await fetch(`${url}/leadership`);
			return await leadershipRes.json();
		};

		return {
			work: getWork(),
			project: getProject(),
			contact: getContact(),
			about: getAbout(),
			leadership: getLeadership()
		};
	};

	const data = await getData();

	if (data) return data;

	error(404, 'Not found');
}) satisfies PageLoad;
