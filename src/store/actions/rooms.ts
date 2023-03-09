import { AppDispatch } from "../store";
import axios from "axios";
import { getRoomDetails } from "../slices/rooms";

const API = "https://list-production.up.railway.app/api/v1/";

export const getRooms =
  (day: any, month: any, year: any) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("tokens")
      ? JSON.parse(localStorage.getItem("tokens")!)
      : "";

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.access}`,
        },
      };

      let res = await axios(`${API}room1/${year}-${month}-${day}`, config);
      dispatch(getRoomDetails(res.data));
    } catch (e) {
      console.log(e);
    }
  };

export const createHour =
  (id: number, hour: string) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("tokens")
      ? JSON.parse(localStorage.getItem("tokens")!)
      : "";

    const userId = token.user_id;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.access}`,
        },
      };

      let { data } = await axios.patch(
        `${API}room/${id}/`,
        { [hour]: userId },
        config
      );

      dispatch(getRoomDetails({ data }));
    } catch (e) {
      console.log(e);
    }
  };

export const deleteHour =
  (id: number, hour: string) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("tokens")
      ? JSON.parse(localStorage.getItem("tokens")!)
      : "";

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.access}`,
        },
      };

      let { data } = await axios.patch(
        `${API}room/${id}/`,
        { [hour]: "" },
        config
      );

      dispatch(getRoomDetails({ data }));
    } catch (e) {
      alert("You can not delete another user!");
      console.log(e);
    }
  };
