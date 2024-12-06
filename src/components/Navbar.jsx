import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../images/Gmail_logo.png'
import { IoSearchSharp } from 'react-icons/io5';
import { SlQuestion } from "react-icons/sl";
import { CiSettings } from "react-icons/ci";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchMail, setUser } from '../redux/AllSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase';


function Navbar() {

	const [searchMail, setsearchMail] = useState("");
	const dispatch = useDispatch();
	const [toggle, setToggle] = useState(false)

	const {user} = useSelector(store=>store.AllSlice);


	const signOutHandler = () => {
		signOut(auth).then(() => {
			dispatch(setUser(null))
		}).catch((error) => {
			console.log(error);
		})
	}

	useEffect(() => {
		dispatch(setSearchMail(searchMail));
	}, [searchMail])



	return (
		<div className='flex items-center justify-between mx-3 h-16 '>
			<div className='flex items-center gap-10'>
				<div className='flex items-center gap-2'>
					<div className='p-3 rounded full hover:bg-gray-100 cursor-pointer'>
						< GiHamburgerMenu size={"1.5vw"} />
					</div>
					<img className='w-9' src={logo} alt="" />
					<h1 className='text-2xl text-gray-400'>Gmail</h1>
				</div>
			</div>
			<div className='md:block hidden w-[50%] mr-60'>

				<div className='flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full'>
					<IoSearchSharp size={"1.8vw"} />
					<input type="text"
						className='w-full rounded-full bg-transparent outline-none px-1'
						placeholder='Search mail'
						value={searchMail}
						onChange={(e) => setsearchMail(e.target.value)}
					/>
				</div>
			</div>

			<div className='md:block hidden'>
				<div className='flex items-center gap-2'>
					<div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
						<SlQuestion size={"1.7vw"} />
					</div>
					<div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
						<CiSettings size={"1.9vw"} />
					</div>
					<div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
						<PiDotsNineBold size={"1.7vw"} />
					</div>
					<div className='cursor-pointer relative'>
						<Avatar onClick={() => setToggle(!toggle)}
							src={user?.photoURL} size={"2.5vw"} round={true} />


						{toggle && (
							<div className='absolute right-4 z-20 shadow-xl bg-white rounded-md text-center'>
								<p onClick={signOutHandler}
									className='p-4 '>LOGOUT</p>
							</div>
						)}

					</div>
				</div>



			</div>

		</div>
	)
}

export default Navbar