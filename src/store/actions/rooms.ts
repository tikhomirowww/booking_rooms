import { AppDispatch } from "../store";
import axios from "axios";
import { getRoom } from "../slices/rooms";

const API = 'http://3.83.158.158/api/v1/';

const token = localStorage.getItem("tokens")
? JSON.parse(localStorage.getItem("tokens")!) : "";

export const getRooms = () => async(dispatch: AppDispatch) => {
    // try{
    //     let res = await axios(`${API}booked/1`, {
    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //             Authorization: `Bearer ${token.access}`,
    //           },
    //     })
    //     console.log(res);
    //     dispatch(getRoom(res.data))
    //     }catch(e) {
    //         console.log(e);
    //     }
    
    //     try{
    //         let res = await axios(`${API}booked/2`, {
    //             headers: {
    //                 "Content-Type": "multipart/form-data",
    //                 Authorization: `Bearer ${token.access}`,
    //               },
    //         })
    //         console.log(res);
    //         dispatch(getRoom(res.data))
    //         }catch(e) {
    //             console.log(e);
    //         }

            try{
                let res = await axios(`${API}booked/`, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token.access}`,
                      },
                })
                console.log(res);
                dispatch(getRoom(res.data))
                }catch(e) {
                    console.log(e);
                }
}