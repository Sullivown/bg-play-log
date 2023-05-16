import { client } from '../../utils/contentfulClient';

export default async function Dashboard() {
	console.log(client);
	const data = await getData();
	console.log(data);
	return (
		<div>
			<h1>Dashboard</h1>
			<div></div>
		</div>
	);
}

export async function getData() {
	const res = await client.getEntries();

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}

	return res.json(data);
}
