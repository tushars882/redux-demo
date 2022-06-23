import { createSlice } from "@reduxjs/toolkit";
import { getUsers,getUser } from "../actions/usersAction";

const usersReducer = createSlice({
  name: "usersReducer",
  initialState: {
    users: [],
    usersContainer:[],
    loader: false,
    errors: {},
    user: {},
  }, //This is how you define a function with an action and later export it
  //we will store normal actions in this reducer
  reducers: {
   filteredUsers:(state,action)=>{
    state.users=state.usersContainer.filter(user=>user.name.toLowerCase().includes(action.payload));
   }
  },
  //if we have to perform any asynchronous action for that we will use this
  extraReducers: {
    //if we have a pending prommise then assign loader:
    [getUsers.pending]: (state, action) => {
      state.loader = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loader = false;
      state.users = action.payload; //use payload as this data is available inside payload which has been fetched by the api
      state.usersContainer=action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },
    [getUser.pending]: (state, action) => {
      state.loader = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.loader = false;
      state.user = action.payload; //use payload as this data is available inside payload which has been fetched by the api
    },
    [getUser.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },
  },
});

export const {filteredUsers}=usersReducer.actions;



//Now to access this state inside react components

export default usersReducer.reducer             //reducer is an in-built key which exports reducer inside createSlice