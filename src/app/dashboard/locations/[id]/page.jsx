import { getLocationsForUser, getLocation } from '@/utils/apiCalls';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import React from 'react';
import { compress } from '../../../../../next.config';

export async function getStaticParams() {
	const locations = await getLocationsForUser;

	return locations.map((location) => ({
		slug: location.sys.id,
	}));
}

export default async function LocationPage({ params }) {
	const session = await getServerSession(authOptions);
	const { id } = params;
	console.log(params);
	const location = await getLocation({ locationId: id });

	return (
		<div className='mx-auto max-w-7xl p-4 sm:p-6 lg:p-8'>
			<h2>{location.fields.name}</h2>
			<p>{location.sys.id}</p>
		</div>
	);
}
