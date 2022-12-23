import { createSlice } from "@reduxjs/toolkit";
import { IDetails } from "../../types/user"

const initialState = {
    user: {} as IDetails
}

const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        postUser(state, action) {
            console.log(action);  
            state.user = action.payload
        }
    }
})

export const usersReducer = usersSlice.reducer
export const { postUser } = usersSlice.actions