import { useRef } from "react";
import {filteredUser, filteredUsers} from "../store/reducer/usersReducer"
import { Dispatch } from "react";
import { useDispatch } from "react-redux";


const Filter=()=>{
    const inputRef=useRef("");
    const dispatch=useDispatch();
    const filterUsers=()=>{
        dispatch(filteredUsers(inputRef.current.value));

    }
    return(
            <>
            <input type="text" name="" className="form-control mb-3 mt-3" placeholder="Search User By Name" 
            ref={inputRef}
            onChange={filterUsers}/>
            </>

    )
}

export default Filter;  