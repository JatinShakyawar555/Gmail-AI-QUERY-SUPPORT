import React, { useState } from 'react'
import { IoMdStar } from 'react-icons/io'
import { LuPencil } from 'react-icons/lu'
import { MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineWatchLater } from 'react-icons/md'
import { TbSend2 } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { setOpen } from '../redux/AllSlice'

function Sidebar() {

	const sideItems = [
		{
			icon: <LuPencil size={"1.7vw"} />,
			text: "Inbox"
		},
		{
			icon: <IoMdStar size={"1.7vw"} />,
			text: "Starred"
		},
		{
			icon: <MdOutlineWatchLater size={"1.7vw"} />,
			text: "Snoozed"
		},
		{
			icon: <TbSend2 size={"1.7vw"} />,
			text: "Sent"
		},
		{
			icon: <MdOutlineDrafts size={"1.7vw"} />,
			text: "Draft"
		},
	]



	const dispatch = useDispatch();
     
	return (

		<div className='w-[15%]  max-[600px]:w-[10%]'>
			<div className='p-3 w-[15%]  max-[600px]:p-1'>
				<button  onClick={()=>dispatch(setOpen(true))}
				className='flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF] max-[600px]:px-1 text-sm' >
					<LuPencil size={"1.7vw"} />
					Compose
				</button>
			</div>
			<div className='text-gray-500'>

				{sideItems.map(({ icon, text }) => (
					<div className='flex items-center gap-4 pl-7  py-1 rounded-r-full hover:cursor-pointer my-2 hover:bg-gray-200   max-[600px]:pl-1'>
						{icon}
						<p>{text}</p>
					</div>
				))}


				<div className='flex items-center pl-6 gap-4 cursor-pointer hover:bg-gray-200 rounded-r-full py-1 max-[600px]:pl-0'>
					<MdOutlineKeyboardArrowDown size={"20px"} />
					<span>More</span>
				</div>
			</div>
			<div></div>

		</div>
	)
}

export default Sidebar