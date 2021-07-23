import React from "react";
import { Refresh } from "../icons";

function UserListing({ className }) {
	return (
		<div className={className + " w-full  h-screen"}>
			<div className='bar flex justify-between items-center border-gray-300 border-b-1 py-5 px-4'>
				<span className='font-semibold text-xl'>Conversations</span>
				<Refresh className='h-6' fill='none' />
			</div>
			<div className='list'>
				<ul>
					<li>
						<div className='h-auto p-4 border-1 border-solid border-gray-200'>
							<div className='head grid grid-cols-10 items-center mb-2'>
								<input type='checkbox' className='col-span-1' name='' id='' />
								<div className='name-type col-span-8 text-left'>
									<div className='name font-semibold'>Amit RG</div>
									<div className='type font-medium'>Facebook DM</div>
								</div>
								<div className='elapse col-span-1'>10m</div>
							</div>
							<div className='product'>Awesome Product</div>
							<div className='msg-text text-base text-gray-500 h-5 overflow-hidden'>
								Hey There! How are you?Wll done Thankdasd sdad
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default UserListing;
