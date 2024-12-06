import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body'
import Inbox from './components/Inbox'
import Mail from './components/Mail'
import SentMail from './components/SentMail'
import Login from './components/Login'
import { useDispatch, useSelector } from 'react-redux'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Ai from './components/Ai'
import { auth } from './Firebase'
import { setUser } from './redux/AllSlice'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: '/',
        element: <Inbox />
      },
      {
        path: '/mail/:id',
        element: <Mail />
      }
    ]
  }
])

function App() {

  const { user } = useSelector(store => store.AllSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (person) => {
     
      if (person !== null) {
        dispatch(setUser(person))
      }
      else {
        console.log("Session is Not Available");
      }
    })
  }, [user]);

  return (
    <div className='bg-[#F6F8FC] h-screen w-screen overflow-hidden'>

      {!user ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <RouterProvider router={router} />
          <div className='absolute w-[30%] bottom-0 right-10 z-10 '>
            <SentMail />
          </div>
          <div className='absolute w-[28%] left-6 bottom-2 z-20'>
            <Ai />
          </div>
        </>
      )}



    </div>
  )
}

export default App