import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { useRef } from 'react';
import { addUser } from '../store/reducer/usersReducer';

import { getUsers } from '../store/actions/usersAction';
import { useEffect } from 'react';

export default function Home() {

    


    // const state=useSelector((state)=>state.users)
    // const dispatch=useDispatch();
    // const inputRef=useRef("");
    // console.log(state.users);
    
    
    // // console.log(state.users)  ;
    // const storeUser=(e)=>{
    //   e.preventDefault();
    //   console.log(inputRef.current.value);
    //   dispatch(addUser(inputRef.current.value));    //here we have the value inside payload
    //   inputRef.current.value="";     
      
    // }



    const state=useSelector((state)=>state.users);
    const dispatch=useDispatch();

    useEffect(()=>{       //we have called it after our component has been loaded
      dispatch(getUsers())
    },[])

  return (
   <h1>List of Users</h1>
  )
}
