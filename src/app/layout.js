'use client';

import './globals.css';
import Provider from './provider';
import Navigation from './components/Navigation';

export default function RootLayout({ children }) {
	return (
		<html lang='en' className='h-full bg-gray-100'>
			<body className='h-full'>
				<Provider>
					<div className='min-h-full'>
						<Navigation />
						<header className='bg-white shadow'>
							<div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
								<h1 className='text-3xl font-bold tracking-tight text-gray-900'>
									Dashboard
								</h1>
							</div>
						</header>
						<main>
							<div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
								{children}
							</div>
						</main>
					</div>
				</Provider>
			</body>
		</html>
	);
}
