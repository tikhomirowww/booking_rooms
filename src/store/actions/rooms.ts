import { AppDispatch } from "../store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getRoom, getRoomDetails } from "../slices/rooms";

const API = "http://3.83.158.158/api/v1/";

const token = localStorage.getItem("tokens")
  ? JSON.parse(localStorage.getItem("tokens")!)
  : "";

let time = new Date();
let strDay = time.getDate().toString();
let day = strDay.length == 1 ? `0${strDay}` : strDay;
let numMonth = time.getMonth();
let strMonth = numMonth.toString();
let month = strMonth.length == 1 ? `0${numMonth + 1}` : numMonth + 1;
// let month = time.getMonth()

console.log(month);

//  time.getMonth() + 1;
console.log(day);
let year = time.getFullYear();

console.log(year);

// export const getRooms = () => async (dispatch: AppDispatch) => {
//   try {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token.access}`,
//       },
//     };

//     let res = await axios(`${API}room1/${year}-${month}-${day}`, config);
//     console.log(res);
//     dispatch(getRoomDetails(res.data));
//   } catch (e) {
//     console.log(e);
//   }
// };

export const fetchRooms = createAsyncThunk("rooms/fetchRooms", async () => {
  // console.log(API);
  try {
    const token = localStorage.getItem("tokens")
      ? JSON.parse(localStorage.getItem("tokens")!)
      : "";

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.access}`,
      },
    };

    let res = await axios(`${API}room1/2023-01-25`, config);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
