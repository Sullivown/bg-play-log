import { getLocationsForUser } from '@/utils/apiCalls';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]/route';

export default async function LocationsPage() {
	const session = await getServerSession(authOptions);
	const data = await getLocationsForUser(session.user.email);
	return (
		<>
			<div className='mx-auto max-w-7xl p-4 sm:p-6 lg:p-8'>
				<div>Locations Page</div>
				<ul>
					{data.items.map((location) => (
						<li key={location.sys.id}>
							{location.fields.name} - {location.sys.id}
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
