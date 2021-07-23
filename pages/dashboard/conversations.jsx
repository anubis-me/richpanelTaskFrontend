import React from "react";
import Sidebar from "../../components/base/Layout/Sidebar";
import UserListing from "../../components/Conversations/userListing";
import Conversation from "../../components/Conversations/Conversation";
import SenderProfile from "../../components/Conversations/senderProfile";

const Conversations = () => {
	return (
		<div className=''>
			<Sidebar active='conv' />
			<div className='ml-20 grid grid-cols-10'>
				<UserListing className='border-r-1 border-gray-300 border-solid col-span-2' />
				<Conversation className='col-span-5' />
				<SenderProfile className='col-span-3' />
			</div>
		</div>
	);
};

export default Conversations;
