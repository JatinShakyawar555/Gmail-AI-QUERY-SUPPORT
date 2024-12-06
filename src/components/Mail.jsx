import { deleteDoc, doc } from 'firebase/firestore'
import React, { useState } from 'react'
import { BiArchiveIn } from 'react-icons/bi'
import { IoMdMore, IoMdArrowBack } from 'react-icons/io'

import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdDeleteOutline,
  MdOutlineReport,
  MdOutlineMarkEmailUnread,
  MdOutlineWatchLater,
  MdOutlineAddTask,
  MdOutlineDriveFileMove
} from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { database } from '../Firebase'

function Mail() {

  
  const navigate = useNavigate()
  const {selectedEmail} = useSelector(store=>store.AllSlice);

  const deleteMail = async(id)=>{
  
    try {
      await deleteDoc(doc(database,"emails",id));
      navigate("/")
    } catch (error) {
      console.log(error);
      
    }

  }

  const param = useParams();

  return (
    <div className='flex-1 bg-white rounded-xl mx-6'>

      <div className='flex items-center justify-between px-4 '>

        <div className='flex items-center gap-2 text-gray-600 py-2 '>

          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer' onClick={()=>navigate(-1)}>
            <IoMdArrowBack size={"1.4vw"} />
          </div >
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <BiArchiveIn size={"1.4vw"} />
          </div >
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <MdOutlineReport size={"1.4vw"} />
          </div >
          <div  onClick={()=>deleteMail(param.id )}
          className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <MdDeleteOutline size={"1.4vw"} />
          </div >
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <MdOutlineMarkEmailUnread size={"1.4vw"} />
          </div >
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            < MdOutlineWatchLater size={"1.4vw"} />
          </div >
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            < MdOutlineAddTask size={"1.4vw"} />
          </div >
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <MdOutlineDriveFileMove size={"1.4vw"} />
          </div >
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <IoMdMore size={"1.4vw"} />
          </div >

        </div>

        <div className='flex items-center   gap-2'>
          <button className='hover:text-gray-400' > <MdKeyboardArrowLeft size={"1.4vw"} /> </button>
          <button className='hover:text-gray-400' > <MdKeyboardArrowRight size={"1.4vw"} /> </button>
        </div>

      </div>

      <div className='h-[90vh] overflow-y-auto'>
        <div className='flex items-center justify-between bg-white gap-2'>
          <div className='flex items-center gap-2'>
            <h1 className='text-lg font-medium'>{selectedEmail?.subject}</h1>
            <span className='text-sm bg-gray-200 rounded-md px-2'>Inbox</span>
          </div>

          <div className='tetx-gray-400 flex-none my-6 text-sm'>
            <p>{new Date(selectedEmail?.createdAt.seconds*1000).toUTCString()}</p>
          </div>
        </div>

        <div className='text-gray-500 text-sm'>

          <h1>{selectedEmail?.to}</h1>
          <span>to me</span>

        </div>

        <div className='my-10'>
            <p>{selectedEmail?.message}</p>
        </div>

      </div>

    </div>
  )
}

export default Mail