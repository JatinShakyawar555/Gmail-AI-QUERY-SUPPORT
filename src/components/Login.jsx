import { initializeAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button'
import { auth, provider } from '../Firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/AllSlice';

function Login() {

	const dispatch = useDispatch();
	

	const signIn = async () => {
		try {
			const response = await signInWithPopup(auth, provider);
			// console.log(response);
			dispatch(setUser({
				displayName: response.user.displayName,
				email: response.user.email,
				photoURL: response.user.photoURL

			}))

		} catch (error) {
			console.log(error);
		}
	}

	return (

		<div className='absolute top-[30%] left-[25%] max-[500px]:left-[5%] top-[20%]'>
          <div className='border-1 border-4 shadow-lg p-5 text-center flex flex-col items-center gap-8 rounded-lg   bg-gray-200'>
		  <h1 className='font-medium text-6xl'>Create your google account</h1>
		  <h3 className=' text-4xl'>Click the signIn button</h3>
		  <GoogleButton onClick={signIn}  />
		  </div>
		</div>
	)
}

export default Login

// https://project-20f85.web.app