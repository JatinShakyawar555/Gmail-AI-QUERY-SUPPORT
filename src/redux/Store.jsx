import { configureStore } from "@reduxjs/toolkit";
import AllSlice from '../redux/AllSlice'


const store = configureStore({
	 reducer:{
	 AllSlice:AllSlice,
	 }
})
export default store; 