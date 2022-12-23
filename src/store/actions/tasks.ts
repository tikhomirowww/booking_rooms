import { AppDispatch } from "../store";
import axios from "axios";
import { getTask, getTaskDetails } from "../slices/tasks";
import { title } from "process";

const API = 'http://3.83.158.158/api/v1/';

const token = localStorage.getItem("tokens")
    ? JSON.parse(localStorage.getItem("tokens")!)
    : "";

export const createTask = (title: string, description: string, category: number, comleted: number, deadline: string, status: number) => async(dispatch: AppDispatch) => {
    console.log(category)
    let formData: any = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("completed", comleted);
    formData.append("deadline", deadline);
    formData.append("status", status)

    console.log(formData);

    try{
        // const tokens = JSON.parse(localStorage.getItem('tokens')!);
        const Authorization = `Bearer ${token.access}`;
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization
            }
          }
        let res = await axios.post(`${API}tasks/`, formData, config)
        console.log(res);
        dispatch(getTask(res.data))

        //test
        // let taskObj = {
        //     title,
        //     text,
        //     date
        // }

        // let res = await axios.post("http://localhost:8000/tasks", taskObj)
        // console.log(res);
        // dispatch(getTask(res.data))

    }catch(error){
        console.log(error);
    }
    
}

export const getTasks = () => async(dispatch: AppDispatch) => {
    // console.log(token);
    // const config = {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //       Authorization: `Bearer ${token.access}`,
    //     },
    // };
    // console.log(config);
    

    try{
    let res = await axios(`${API}tasks/`, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token.access}`,
          },
    })
    console.log(res);
    dispatch(getTask(res.data))
    }catch(e) {
        console.log(e);
    }

    // test
    // let res = await axios('http://localhost:8000/tasks');
    // dispatch(getTask(res))
    // console.log(res);
    
}

export const getTasksDetails = (id: number) => async(dispatch: AppDispatch) => {
    const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token.access}`,
        },
    };

    try{
        let res = await axios(`${API}tasks/${id}`, config)
        console.log(res);
        dispatch(getTaskDetails(res.data))
        }catch(e) {
            console.log(e);
        }
}
interface IData {
    title: string,
    description: string,
    deadline: string,
    status: number,
    completed: number
}
export const saveEditedTask = (title: string, description: string, deadline: any, status: number, completed: number, id: number) => async(dispatch: AppDispatch) => {
    // let newTask = new FormData();
    // newTask.append("title", title);
    // newTask.append("description", description);
    // newTask.append("deadline", deadline);
    // newTask.append("status", status);
    // newTask.append("completed", completed)
    let newTask = {
        "title": title,
        "description": description,
        "deadline": deadline,
        "status": status,
        "completed": completed
    }

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.access}`,
          },
    };

    try{
        let res = await axios.patch(`${API}tasks/${id}/`, JSON.stringify(newTask), config)
        console.log(res);
        dispatch(getTasks())
    }catch(e){
        console.log(e);
    }
}

export const updateComplete = (completed: number, id: number) => async(dispatch: AppDispatch) => {
    let complete = {
        "completed": completed
    }

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.access}`,
          },
    };

    try{
        let res = await axios.patch(`${API}tasks/${id}/`, JSON.stringify(complete), config)
        console.log(res);
        dispatch(getTasks())
    }catch(e){
        console.log(e);
    }
}

export const deleteTask = (id: number) => async(dispatch: AppDispatch) => {
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token.access}`,
          },
    };

    try{
        let res = await axios.delete(`${API}tasks/${id}`, config)
        console.log(res);
        dispatch(getTasks())
    }catch(e){
        console.log(e);
    }
} 