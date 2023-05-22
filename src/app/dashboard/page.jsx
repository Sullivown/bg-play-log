import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function Dashboard() {
	const session = await getServerSession(authOptions);

	if (session) {
		return (
			<div className='mx-auto max-w-7xl p-4 sm:p-6 lg:p-8'>
				<h1>Dashboard</h1>
			</div>
		);
	}
	return (
		<div>
			<h1>You must be logged in to view this page</h1>
		</div>
	);
}
