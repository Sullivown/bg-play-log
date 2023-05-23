const contentful = require('contentful');
const client = contentful.createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
	environment: 'master',
});

export function getLocationsForUser(user) {
	const data = client
		.getEntries({ 'fields.user': user, content_type: 'location' })
		.catch(console.error);

	return data;
}
