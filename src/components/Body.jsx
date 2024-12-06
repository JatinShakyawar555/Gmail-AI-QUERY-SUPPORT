import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
	<div className='flex'>
		{/* <div className='w-[15%]'></div> */}
	   <Sidebar/>
	<Outlet/>
	</div> 
  )
}

export default Body