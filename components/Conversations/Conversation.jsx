import React from "react";

function Conversation({ className }) {
	return (
		<div className={className + " h-screen bg-red-50 bg-opacity-70 relative"}>
			<div className='title text-2xl font-semibold border-1 bg-white border-gray-200 py-4 px-6'>
				Amit RG
			</div>
			<div className='chats w-full'>
				<ul className='w-auto flex flex-col p-4'>
					<li className='left self-start flex flex-col items-center space-y-2'>
						<div className='msg flex items-center space-x-2'>
							<div className='sender-img'>
								<img
									src='https://randomuser.me/api/portraits/men/3.jpg'
									alt='sender-img'
									className='rounded-full h-9'
								/>
							</div>
							<div className='text bg-white w-max p-4 rounded-lg shadow-md'>
								Is it in stock right now?
							</div>
						</div>
						<div className='date-time text-sm'>
							<span className='font-semibold'>Amit RG</span> - Mar 05, 2:22 AM
						</div>
					</li>
					<li className='right self-end flex items-center space-x-3'>
						<div className='msg flex flex-col space-y-2'>
							<div className='text bg-white w-max p-4 rounded-lg shadow-md'>
								We've 3 left in stock!
							</div>
							<div className='flex items-center space-x-2'>
								<div className='text bg-white w-max p-4 rounded-lg shadow-md'>
									If you order before 8PM we can ship it today.
								</div>
								<div className='sender-img'>
									<img
										src='https://randomuser.me/api/portraits/women/51.jpg'
										alt='sender-img'
										className='rounded-full h-9'
									/>
								</div>
							</div>
							<div className='date-time text-sm text-right'>
								<span className='font-semibold'>Richard Panel</span> - Mar 05,
								2:22 AM
							</div>
						</div>
					</li>
					<li className='left self-start flex items-center space-x-3'>
						<div className='sender-img transform -translate-y-3'>
							<img
								src='https://randomuser.me/api/portraits/men/3.jpg'
								alt='sender-img'
								className='rounded-full h-9'
							/>
						</div>
						<div className='msg flex flex-col space-y-2'>
							<div className='text bg-white w-max p-4 rounded-lg shadow-md'>
								Sure.
							</div>
							<div className='date-time text-sm'>
								<span className='font-semibold'>Amit RG</span> - Mar 05, 2:22 AM
							</div>
						</div>
					</li>
				</ul>
				<div className='input w-full absolute bottom-3 px-3'>
					<input
						type='text'
						className='w-full border-1 p-3'
						placeholder='Enter Message'
					/>
				</div>
			</div>
		</div>
	);
}

export default Conversation;
