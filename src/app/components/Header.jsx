import { usePathname } from 'next/navigation';
import Breadcrumbs from './Breadcrumbs';

export default function Header() {
	const pathname = usePathname();
	const pathArr = pathname.split('/');
	return (
		pathname.startsWith('/dashboard') && (
			<header className='bg-white shadow'>
				<div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
					<Breadcrumbs pathArr={pathArr} />
				</div>
			</header>
		)
	);
}
