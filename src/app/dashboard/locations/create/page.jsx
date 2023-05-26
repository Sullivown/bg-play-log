import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import LocationForm from '@/components/location/LocationForm';
import { createLocationForUser } from '@/utils/apiCalls';

export default async function addLocationPage() {
	const session = await getServerSession(authOptions);

	return (
		<div className='mx-auto max-w-7xl p-4 sm:p-6 lg:p-8'>
			<h1 className='mb-5'>Add Location</h1>
			<LocationForm
				userId={session.user.email}
				createLocationForUser={createLocationForUser}
			/>
		</div>
	);
}
