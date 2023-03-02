import { createSlice } from "@reduxjs/toolkit";
import { IDetails } from "../../types/user";

const initialState = {
  users: [],
  user: {} as IDetails,
  token: "",
  error: "",
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    postUser(state, action) {
      state.user = action.payload;
    },
    getUsers(state, action) {
      state.users = action.payload;
    },
    getToken(state, action) {
      state.users = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const usersReducer = usersSlice.reducer;
export const { postUser, getUsers, getToken, setError } = usersSlice.actions;
