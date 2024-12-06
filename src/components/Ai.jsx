import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import logo from '../images/ai1.jpg'
import { GoogleGenerativeAI } from "@google/generative-ai" ;
import ChatHistory from './ChatHistory';
import Loading from './Loading';
function Ai() {
	const [open, setopen] = useState(true);
	const [inputt, setinputt] = useState("");
	const [history, sethistory] = useState([])
	const [loading, setloading] = useState(false)

  // Initalize a API 
	const genAI = new GoogleGenerativeAI("AIzaSyBgVI0Pj5hmYO60ndxlzSuESmCJZhaCXCw");

	const model = genAI.getGenerativeModel({model:"gemini-1.5-flash"})

	const inputHandler = (e)=>{
		setinputt(e.target.value);
	}
    //send message 
	const getDataFromAi = async ()=>{

		if(inputt.trim() === "")return
        setloading(true)
		try {
			const result = await model.generateContent(inputt);
			const response = await result.response;
			console.log(response);
			sethistory([...history,{type: "user", message:inputt},{type:"bot", message:response.text()}])
			
		} catch (error) {
			console.log(error);
		}finally{
            setinputt("")
			setloading(false)
		}
	}

	const clearChat = ()=>{

		sethistory([])
	}

	return  (
		<>

       {
		open  ? 
		<div>
			<img onClick={()=>setopen(false)} 
			 src={logo} alt="" className='w-20 rounded-lg pb-6' />
		</div>
		: 
		<div className=' bg-gradient-to-r from-black to-zinc-800 h-[23vw] overflow-hidden flex flex-col items-center rounded-lg'>


			<h1 onClick={()=>setopen(true)} 
			className='text-white pl-[22vw] mt-5 text-xl'><IoClose /></h1>

			


			<div className=''>
				<h1 className='font-bold text-2xl  text-sky-100 '>JATIN.AI</h1>

			</div>


			<div className='mt-3 flex gap-2'>
				<input type="text" 
					className='w-[21vw] border-none font-medium text-black'
                    value={inputt}
					onChange={inputHandler}
					placeholder='Enter your input'
				/>
			</div>

			<div className='flex w-[21vw] gap-3 mt-2'>
			<button
				 onClick={getDataFromAi}
                disabled={loading} 
				className='bg-blue-500 text-white p-2 rounded-md'>Send</button>
				
			<button
				 onClick={clearChat}
				className='bg-blue-500 text-white p-2 rounded-md'>Clear</button>
				
			</div>

			<div className=' w-[22vw] p-2  mt-2 '>


			{/* {(!history || loading) && ( */}
				<div className='bg-yellow-50  text-wrap h-[26vh] overflow-x-hidden overflow-y-auto '>
				<p className='p-1 font-medium'>
                <ChatHistory ChatHistory={history} />
				<Loading isLoading={loading} />
				</p>
			</div>
			{/* )} */}

				

			</div>
		</div>
		

	   }

		

		
	
		
		</>
	)
}

export default Ai