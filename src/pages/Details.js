import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'; //lets you use parameters of current rout
import { useDispatch,useSelector } from 'react-redux/es/exports';
import { getUser } from '../store/actions/usersAction';
const Details = () => {

    const {id}=useParams();
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getUser(id))
    },[])
  return (
    <h1>Details {id}</h1>
  )
}

export default Details;


//for fetching the id we have use useParams
