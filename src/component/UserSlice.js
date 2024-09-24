import { createSlice } from "@reduxjs/toolkit"

const initialState={
    user:null
}

const UserSlice =createSlice({
    name:"user",
    initialState,
    reducers:{
        setuser(state,data){
            state.user=data.payload.user;
            console.log("state", state)
        }
    } 
})

export const {setuser}=UserSlice.actions
export default UserSlice.reducer