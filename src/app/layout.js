'use client';

import './globals.css';
import Provider from './provider';
import Navigation from './components/Navigation';
import Header from './components/Header';

export default function RootLayout({ children }) {
	return (
		<html lang='en' className='h-full'>
			<body className='h-full'>
				<Provider>
					<div className='min-h-full'>
						<Navigation />
						<Header />
						<main>{children}</main>
					</div>
				</Provider>
			</body>
		</html>
	);
}
