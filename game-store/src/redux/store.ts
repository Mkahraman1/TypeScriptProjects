import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice"
import gamesReducer from "../redux/gamesSlice"

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        games:gamesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;