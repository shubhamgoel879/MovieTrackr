import { configureStore } from "@reduxjs/toolkit";

import todoReducer from '../components/Todo-redux/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})


export type RootState = ReturnType<typeof store.getState>;