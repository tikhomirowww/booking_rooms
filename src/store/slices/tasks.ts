import { createSlice } from "@reduxjs/toolkit";
import { ITasks } from "../../types/tasks";

const initialState = {
    tasks : [],
    taskDetails: [],
    task: {} as ITasks
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        getTask(state, action) {
            // console.log(action);
            state.tasks = action.payload
        },
        getTaskDetails(state, action){
            state.taskDetails = action.payload
        }
    }
})

export const tasksReducer = tasksSlice.reducer
export const { getTask } = tasksSlice.actions
export const { getTaskDetails } = tasksSlice.actions