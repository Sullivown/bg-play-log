import LocationForm from '@/components/location/LocationForm';

export default function addLocationPage() {
	return (
		<div className='mx-auto max-w-7xl p-4 sm:p-6 lg:p-8'>
			<h1>Add Location</h1>
			<LocationForm />
		</div>
	);
}
