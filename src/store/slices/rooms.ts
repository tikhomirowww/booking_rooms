import { createSlice } from "@reduxjs/toolkit";
import { IRooms } from "../../types/rooms";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchRooms } from "../actions/rooms";

const API = "http://3.83.158.158/api/v1/";

const initialState = {
  rooms: [],
  roomDetails: {} as IRooms,
};

// console.log(roomDetails);

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
  extraReducers: (builder) => {
    builder.addCase(fetchRooms.fulfilled, (state: any, action) => {
      state.roomDetails = action.payload;
    });
  },
});

export const roomReducer = roomsSlice.reducer;
export const { getRoom, getRoomDetails } = roomsSlice.actions;
