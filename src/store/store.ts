import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/users";
import { tasksReducer } from "./slices/tasks";
import { roomReducer } from "./slices/rooms";

export const store = configureStore({
    reducer: {
        user: usersReducer,
        tasks: tasksReducer,
        rooms: roomReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;