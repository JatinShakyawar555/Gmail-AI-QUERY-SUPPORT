import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { setOpen } from '../redux/AllSlice';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { database } from '../Firebase';

function SentMail() {

	const open = useSelector((state) => state.AllSlice.open);

	const dispatch = useDispatch();

	const [formData, setformData] = useState({
		to: "",
		subject: "",
		message: ""
	})

	const changeHandler = (e) => {
		setformData({ ...formData, [e.target.name]: e.target.value })
	}

	const submitHandler = async (e) => {
		e.preventDefault();

		await addDoc(collection(database, 'emails'), {  // emails is a collection name
			to: formData.to,
			subject: formData.subject,
			message: formData.message,
			createdAt: serverTimestamp(), // record a timestamp
		})

		dispatch(setOpen(false));
		setformData({
			to: "",
			subject: "",
			message: ""
		});

	}

	return (
		<div className={`${open ? 'block' : 'hidden'}  max-w-6xl bg-white shadow-xl shadow-slate-500 rounded-t-md `}>
			<div className='flex px-3 py-2 bg-[#F2F6Fc] justify-between'>

				<h1>New Message</h1>
				<div onClick={() => dispatch(setOpen(false))}
					className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
					<RxCross2 size={'1vw'} />
				</div>
			</div>

			<form onSubmit={submitHandler}
				className='flex flex-col p-3 gap-2'>
				<input onChange={changeHandler}
					type="text" value={formData.to} name='to' placeholder='To' className='outline-none py-1' />

				<input onChange={changeHandler}
					type="text" value={formData.subject} name='subject' placeholder='Subject' className='outline-none py-1' />

				<textarea onChange={changeHandler}
					name="message" value={formData.message} cols={'30'} rows={'10'}
					className='py-1 outline-none'
				></textarea>

				<button
					type='submit' className='w-fit rounded-full px-4 text-white font-medium bg-[#0B57D0]' >Send</button>
			</form>

		</div>
	)
}

export default SentMail