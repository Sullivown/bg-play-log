import React from 'react';

export default function LocationsForm() {
	return (
		<form>
			<div className='space-y-12'>
				<div className='border-b border-gray-900/10 pb-12'>
					<h2 className='text-base font-semibold leading-7 text-gray-900'>
						Add / Edit Location
					</h2>
					<div className='sm:col-span-4'>
						<label
							htmlFor='username'
							className='block text-sm font-medium leading-6 text-gray-900'
						>
							Location Name
						</label>
						<div className='mt-2'>
							<div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
								<input
									type='text'
									name='location'
									id='location'
									autoComplete='location'
									className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
									placeholder='e.g. Home'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='mt-6 flex items-center justify-end gap-x-6'>
				<button
					type='button'
					className='text-sm font-semibold leading-6 text-gray-900'
				>
					Cancel
				</button>
				<button
					type='submit'
					className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
				>
					Save
				</button>
			</div>
		</form>
	);
}
