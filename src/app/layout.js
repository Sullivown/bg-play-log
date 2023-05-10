'use client';

import './globals.css';
import Provider from './provider';
import Navigation from './components/Navigation';
import Header from './components/Header';

export default function RootLayout({ children }) {
	return (
		<html lang='en' className='h-full bg-gray-100'>
			<body className='h-full'>
				<Provider>
					<div className='min-h-full'>
						<Navigation />
						<Header />
						<main className='flex'>
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
