import Link from 'next/link';

export default function Hero() {
	return (
		<div className='w-screen min-h-full bg-white'>
			<div className='flex flex-row px-6 pt-14 lg:px-8'>
				<div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 '>
					<div className='hidden sm:mb-8 sm:flex sm:justify-flex-start'>
						<div className='rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
							Check out our latest features.{' '}
							<Link
								href='#'
								className='font-semibold text-indigo-600'
							>
								<span className='inset-0' aria-hidden='true' />
								Read more <span aria-hidden='true'>&rarr;</span>
							</Link>
						</div>
					</div>
					<div className='text-left'>
						<h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
							Track your plays
						</h1>
						<p className='mt-6 text-lg leading-8 text-gray-600'>
							Track your boardgame plays with info such as the
							date, number of players and location. View and
							search your play history.
						</p>
						<div className='mt-10 flex items-center justify-flex-start gap-x-6'>
							<Link
								href='#'
								className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
							>
								Get started
							</Link>
							<Link
								href='#'
								className='text-sm font-semibold leading-6 text-gray-900'
							>
								Learn more <span aria-hidden='true'>→</span>
							</Link>
						</div>
					</div>
				</div>
				<div className='hidden sm:flex ml-auto w-1/2 py-32 sm:py-48 lg:py-56'>
					<div className='grow w-500 h-500 bg-black text-white text-center'>
						This will be an image of the app
					</div>
				</div>
			</div>
		</div>
	);
}
