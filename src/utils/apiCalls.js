const contentfulDelivery = require('contentful');
const contentfulManagement = require('contentful-management');

// Contenntful clients
const deliveryClient = contentfulDelivery.createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
	environment: 'master',
});

const managementClient = contentfulManagement.createClient({
	accessToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
});

export async function getLocationsForUser(user) {
	const data = await deliveryClient
		.getEntries({ 'fields.user': user, content_type: 'location' })
		.catch(console.error);
	return data;
}

export async function createLocationForUser({ data }) {
	'use server';
	const user = data.get('userId')?.valueOf();
	const locationName = data.get('name')?.valueOf();

	managementClient
		.getSpace(process.env.CONTENTFUL_SPACE_ID)
		.then((space) => space.getEnvironment('master'))
		.then((environment) =>
			environment.createEntry('location', {
				fields: {
					name: { 'en-US': locationName },
					user: { 'en-US': user },
				},
			})
		)
		.then((entry) => {
			entry.publish();
		})
		.catch(console.error);

	return;
}
