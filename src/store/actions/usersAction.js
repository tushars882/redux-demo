import { createAsyncThunk } from "@reduxjs/toolkit";        //with this we can use asynchronous actions
import axios from "axios";

export const getUsers=createAsyncThunk("users",async()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");

return response.data;

});

export const getUser=createAsyncThunk("user",async(id)=>{
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    return response.data;
})

//redux thunk will create 3 actions based on users 1-pending
//2-fulfilled 3- rejected

