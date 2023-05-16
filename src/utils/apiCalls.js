const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN;

export async function getLocationsForUser(user) {
	const res = await fetch(
		`https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&content_type=location&fields.user=${user}`
	);

	// Handle errors
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}
