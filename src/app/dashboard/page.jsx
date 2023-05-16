import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';

import { getLocationsForUser } from '@/utils/apiCalls';

export default async function Dashboard() {
	const session = await getServerSession(authOptions);

	const data = await getLocationsForUser(session.user.email);

	return (
		<div>
			<h1>Dashboard</h1>
			<div>
				<ul>
					{data.items.map((location) => (
						<li key={location.sys.id}>
							{location.fields.name} - {location.sys.id}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
