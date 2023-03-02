import { createSlice } from "@reduxjs/toolkit";
import { IRooms } from "../../types/rooms";

const initialState = {
  rooms: [],
  roomDetails: {} as IRooms,
};

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    getRoom(state, action) {
      state.rooms = action.payload;
    },
    getRoomDetails(state, action) {
      state.roomDetails = action.payload;
    },
  },
});

export const roomReducer = roomsSlice.reducer;
export const { getRoom, getRoomDetails } = roomsSlice.actions;
