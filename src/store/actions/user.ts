import { AppDispatch } from "../store";
import axios from "axios";
import { postUser, getUsers, setError } from "../slices/users";

const API = "http://3.83.158.158/api/v1/";

const token = localStorage.getItem("tokens")
  ? JSON.parse(localStorage.getItem("tokens")!)
  : "";

export const createUser =
  (name: string, email: string, password: string) =>
  async (dispath: AppDispatch) => {
    let formData = new FormData();
    formData.append("username", name);
    formData.append("email", email);
    formData.append("password", password);

    try {
      let res = await axios.post(`${API}accounts/register/`, formData);
      dispath(postUser(res.data));
      dispath(setError(""));
      localStorage.setItem("tokens", JSON.stringify(res.data));
      // window.location.reload();
    } catch (e: any) {
      dispath(setError(e.response.data.detail));
      console.log(e);
    }

    // autologin

    try {
      let res = await axios.post(`${API}accounts/login/`, formData);
      dispath(postUser(res.data));
      localStorage.setItem("tokens", JSON.stringify(res.data));
      window.location.reload();
    } catch (e: any) {
      console.log(e);
    }
  };

export const loginUser =
  (name: string, password: string) => async (dispath: AppDispatch) => {
    let formData = new FormData();
    formData.append("username", name);
    formData.append("password", password);

    try {
      let res = await axios.post(`${API}accounts/login/`, formData);
      dispath(postUser(res.data));
      dispath(setError(""));
      localStorage.setItem("tokens", JSON.stringify(res.data));
      window.location.reload();
    } catch (e: any) {
      dispath(setError(e.response.data.detail));
      console.log(e);
    }
  };

export const logoutUser = () => async (dispatch: AppDispatch) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token.refresh}`,
    },
  };

  try {
    let res = await axios.post(`${API}accounts/logout/`, config);
    dispatch(postUser(res.data));
  } catch (e) {
    console.log(e);
  }
  localStorage.removeItem("tokens");
  window.location.reload();
};

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    let res = await axios(`${API}accounts/`);
    dispatch(getUsers(res.data));
  } catch (e) {
    console.log(e);
  }
};
