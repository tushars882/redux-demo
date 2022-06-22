import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../actions/usersAction";

const usersReducer=createSlice({
    name:"users",
    initialState:{
        // users:[
        //     {id:1,name:"Tushar"},   //this is user defined array 
        //     {id:2,name:"Shakil"},
        //     {id:3,name:"Radhey"},
            
        // ]

        users:[],
        loader:false,
        errors:{}
    },                          //This is how you define a function with an action and later export it
    //we will store normal actions in this reducer
    reducers:{
        addUser:(state,action)=>{
            console.log(action);
            state.users=[...state.users, action.payload]
        },
        
    },
    //if we have to perform any asynchronous action for that we will use this
    extraReducers:{

        //if we have a pending prommise then assign loader:
        [getUsers.pending]:(state,action)=>{
            state.loader=true;
        },
        [getUsers.fulfilled]:(state,action)=>{
            state.loader=false;
            state.users=action.payload;     //use payload as this data is available inside payload which has been fetched by the api

        },
        [getUsers.rejected]:(state,action)=>{
            state.loader=false;
            state.errors=action.payload
        }
    },
    
})

export const {addUser}=usersReducer.actions;



//Now to access this state inside react components

export default usersReducer.reducer             //reducer is an in-built key which exports reducer inside createSlice