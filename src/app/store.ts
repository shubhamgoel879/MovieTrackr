import { configureStore } from "@reduxjs/toolkit";

import movieReducer from './MovieSlice'

export const store = configureStore({
    reducer: movieReducer
})


export type RootState = ReturnType<typeof store.getState>;