import React, { useState } from 'react'
import { FaCaretDown, FaUserFriends } from 'react-icons/fa'
import { GoTag } from 'react-icons/go'
import { IoMdMore, IoMdRefresh } from 'react-icons/io'
import { MdCrop, MdCropSquare, MdInbox, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Mails from './Mails'

function Inbox() {

	const mailoptions = [
		{
			id: 1,
			icon: <MdInbox size={"1.4vw"} />,
			heading: "Primary",
		},
		{
			id: 2,
			icon: <GoTag size={"1.4vw"} />,
			heading: "Promotions",
		},
		{
			id: 3,
			icon: <FaUserFriends size={"1.4vw"} />,
			heading: "Socials",
		},
	]


	const [mailoptionsSelect, setmailoptionsSelect] = useState(1);

	return (
		<div className='flex-1 bg-white rounded-xl mx-5'>
			<div className='flex items-center justify-between px-4'>
				<div className='flex items-center gap-2 text-gray-600 py-2'>
					<div className='flex items-center gap-1'>
						<MdCropSquare size={"1.4vw"} />
						<FaCaretDown size={"1.4vw"} />
					</div>

					<div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>

						<IoMdRefresh size={"1.4vw"} />

					</div>

					<div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
						<IoMdMore size={"1.4vw"} />
					</div>
				</div>
				<div className='flex items-center gap-2'>
					<p className='text-sm text-gray-500'>1-60 of 6000</p>
					<button className='hover:text-gray-400' > <MdKeyboardArrowLeft size={"1.4vw"}/> </button>
					<button className='hover:text-gray-400' > <MdKeyboardArrowRight size={"1.4vw"}/> </button>
				</div>
			</div>
			<div className='h-[90vh] overflow-y-auto'>

				<div className='flex items-center  gap-1'>

					{mailoptions.map((d, i) => {
						return (
							<button key={d.id}
								className={`${mailoptionsSelect === d.id ? 'border-b-4 border-b-blue-700 text-blue-700 ' : 'border-b-4 border-b-transparent'} w-52 hover:bg-slate-200 flex gap-6 p-4 items-center`}
								onClick={()=>setmailoptionsSelect(d.id)}
								>
								{d.icon}
								<span>{d.heading}</span>
							</button>
						)
					})}
				</div>

				<Mails />

			</div>
		</div>
	)
}

export default Inbox