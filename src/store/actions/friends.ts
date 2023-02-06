import { AppDispatch } from "../store";
import axios from "axios";
import { getFriends } from "../slices/friends";

const API = 'http://3.83.158.158/api/v1/';

const token = localStorage.getItem("tokens")
? JSON.parse(localStorage.getItem("tokens")!) : "";

export const getMates = () => async(dispatch: AppDispatch) => {
    try{
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token.access}`,
            },
        };

        let res = await axios(`${API}accounts/favorite/`, config)
        console.log(res);
        dispatch(getFriends(res.data))
    }catch(e) {
        console.log(e);
    }
}

export const addMates = (person: object) => async(dispatch: AppDispatch) => {
    try{
        const Authorization = `Bearer ${token.access}`;
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization
            }
        }
        let res = await axios.post(`${API}accounts/favorite/`, person, config)
        console.log(res);
        dispatch(getFriends(res.data))
    }catch(e){
        console.log(e);
        
    }
}