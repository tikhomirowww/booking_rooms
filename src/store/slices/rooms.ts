import { createSlice } from "@reduxjs/toolkit";
import { IRooms } from "../../types/rooms";

const initialState = {
    rooms: []
}

const roomsSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {
        getRoom(state, action){
            state.rooms = action.payload
        }
    }
})

export const roomReducer = roomsSlice.reducer
export const { getRoom } = roomsSlice.actions