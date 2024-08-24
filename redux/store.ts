import { configureStore } from "@reduxjs/toolkit";
import jobReducer from './slice'

const store = configureStore({
    reducer:{
        job:jobReducer
    }
})
export type AppDispatch = typeof store.dispatch;
export default store;