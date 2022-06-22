import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducer/usersReducer";
export default configureStore({                     //inside reducer we write our state
    reducer:{
        users:usersReducer                  //key can be anything but here it is users
    }                  
})