import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../state-slice/settings-slice";
import userReducer from "../state-slice/user-slice.js";

export default configureStore({
    reducer:{
        settings:settingsReducer,
        user:userReducer,
    }
})