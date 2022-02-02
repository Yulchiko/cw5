import {configureStore} from "@reduxjs/toolkit";
import nameReducer from "./Slice";

const store = configureStore({
    reducer:{
        nameReducer
    }
})

export default store;