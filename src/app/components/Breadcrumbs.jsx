import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';

export default function Breadcrumbs({ pathArr }) {
	return (
		<nav className='flex' aria-label='Breadcrumb'>
			<ol className='inline-flex items-center justify-center space-x-1 md:space-x-3'>
				<li className='inline-flex items-center'>
					<Link
						href='/dashboard'
						className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
					>
						<ChevronDoubleRightIcon className='h-4 w-4 mr-2' />
						Dashboard
					</Link>
				</li>
				{pathArr.map((item, index) => {
					item = item[0]?.toUpperCase() + item.slice(1);
					if (index < 2) {
						return null;
					}
					if (index !== pathArr.length - 1) {
						return (
							<li key={item + '-bc'}>
								<div className='flex items-center'>
									<ChevronRightIcon className='h-4 w-4' />
									<Link
										href={pathArr
											.slice(0, index + 1)
											.join('/')}
										className='ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'
									>
										{item}
									</Link>
								</div>
							</li>
						);
					} else {
						return (
							<li key={item + '-bc'} aria-current='page'>
								<div className='flex items-center'>
									<ChevronRightIcon className='h-4 w-4 text-black-500' />
									<span className='ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400'>
										{item}
									</span>
								</div>
							</li>
						);
					}
				})}
			</ol>
		</nav>
	);
}
