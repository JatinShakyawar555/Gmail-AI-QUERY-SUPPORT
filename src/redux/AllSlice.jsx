import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	open: false,
	emaildata: [],
	selectedEmail:null,
	searchMail:"",
	user:null,
}

const AllSlice = createSlice({
	name: "AllSlice",
	initialState,
	reducers: {
		setOpen: (state, action) => {
			state.open = action.payload;
		},
		setEmailData: (state, action) => {
			state.emaildata = action.payload;
		},
        setSelectedEmail:(state,action) => {
         state.selectedEmail = action.payload;
		},
		setSearchMail:(state,action)=>{
			state.searchMail = action.payload;
		},
		setUser:(state,action) => {
			state.user = action.payload;
		}

	}
});

export const {setOpen,setEmailData,setSelectedEmail,setSearchMail,setUser} = AllSlice.actions;
export default AllSlice.reducer;