import { error } from '@sveltejs/kit';

export async function load({ fetch, request }) {
	const getWork = async () => {
		const res = await fetch('http://localhost:8080/work');
		const data = await res.json();

		return data;
	};

	const data = await getWork();

	if (data) {
		console.log(data);
		return { data };
	}

	error(404, 'Not found');
}
