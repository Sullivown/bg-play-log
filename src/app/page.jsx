import Hero from './components/Hero';

export default function Home() {
	// min-h-screen flex-col items-center justify-between p-24
	return (
		<div className='flex min-screen flex-col grow items-center'>
			<Hero />
			<h1>Hello!</h1>
			<p>This is the home page for BG Play!</p>
		</div>
	);
}
