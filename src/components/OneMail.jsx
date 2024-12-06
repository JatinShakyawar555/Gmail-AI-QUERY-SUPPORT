import React from 'react'
import { MdCropSquare } from 'react-icons/md'
import { RiStarLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setSelectedEmail } from '../redux/AllSlice';

function OneMail({email}) {
	const navigate =  useNavigate();

	const dispatch = useDispatch();

	const openMail = ()=>{
		dispatch(setSelectedEmail(email));
         navigate(`/mail/${email.id}`)
}


	return (
		<div onClick={openMail} 
		className='flex items-center justify-between border-b border-gray-200 px-4 py-3 text-sm cursor-pointer hover:shadow-md'>
			<div className='flex item-center gap-3'>
				<div className='flex-none text-zinc-400'>
					<MdCropSquare className='w-6 h-6' />
				</div>
				<div className='flex-none text-zinc-400'>
					<RiStarLine className='w-6 h-6' />
				</div>
				<div>
					<h1 className='font-semibold '>{email?.to}</h1>
				</div>
			</div>

			<div className='flex-1 ml-4'>
				<p className='text-gray-700 inline-block truncate max-w-full text-lg '>
					{email?.message}
				</p>
			</div>

			<div className='flex-none text-gray-500 text-lg'>
            
			{new Date(email?.createdAt?.seconds*1000).toUTCString().slice(0,11)}
			</div>

		</div>
	)
}

export default OneMail