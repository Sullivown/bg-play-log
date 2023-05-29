import { getLocationsForUser, getLocation } from '@/utils/apiCalls';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import React from 'react';

export async function getStaticParams() {
	const session = await getServerSession(authOptions);
	const locations = await getLocationsForUser(session.user.email);

	return locations.map((location) => ({
		id: location.sys.id,
	}));
}

export default async function LocationPage({ params }) {
	console.log(params);
	const { id } = params;
	const location = await getLocation({ locationId: id });

	return (
		<div className='mx-auto max-w-7xl p-4 sm:p-6 lg:p-8'>
			<h2>{location.fields.name}</h2>
			<p>{location.sys.id}</p>
		</div>
	);
}
