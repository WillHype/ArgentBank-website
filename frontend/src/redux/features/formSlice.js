import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: "form",
    initialState : {
        username: "",
        password: "",
    },
    reducers:{
        setUsername: (state, action) =>{
            state.username = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
    }
})

export const { setUsername, setPassword} = formSlice.actions;

export default formSlice.reducer;