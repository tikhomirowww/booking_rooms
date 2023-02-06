import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    friends: []
}

const friendsSlice = createSlice({
    name: "friens",
    initialState,
    reducers: {
        getFriends(state, action){
            state.friends = action.payload
        }
    }
})

export const friendsReducer = friendsSlice.reducer
export const { getFriends } = friendsSlice.actions