import { AppDispatch } from "../store";
import axios from "axios";
import { postUser } from "../slices/users";

const API = 'http://3.83.158.158/api/v1/';

const token = localStorage.getItem("tokens")
    ? JSON.parse(localStorage.getItem("tokens")!)
    : "";

export const createUser = (name: string, email: string, password: string) => async (dispath: AppDispatch) => {
    let formData = new FormData();
    formData.append("username", name);
    formData.append("email", email);
    formData.append("password", password);
    console.log(name , email, password);
    

    try{
        let res = await axios.post(`${API}accounts/register/`, formData);
        console.log(res);
        dispath(postUser(res.data))
        localStorage.setItem("tokens", JSON.stringify(res.data))
        window.location.reload();
    }catch(e){
        console.log(e);
    }
}

export const loginUser = (name: string, password: string) => async (dispath: AppDispatch) => {
    let formData = new FormData();
    formData.append("username", name);
    formData.append("password", password);
    console.log(name, password);

    try{
        let res = await axios.post(`${API}accounts/login/`, formData)
        console.log(res);
        dispath(postUser(res.data))
        localStorage.setItem("tokens", JSON.stringify(res.data))
        window.location.reload();
    }catch(e){
        console.log(e);
    }
}

export const logoutUser = () => async (dispatch: AppDispatch) => {
    const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token.refresh}`,
        },
    };

    try{
        let res = await axios.post(`${API}accounts/logout/`, config);
        dispatch(postUser(res.data));
    }catch(e){
        console.log(e);
    }
    localStorage.removeItem("tokens");
    window.location.reload()
}