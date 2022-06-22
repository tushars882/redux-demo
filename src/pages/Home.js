import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { addUser } from "../store/reducer/usersReducer";

import { getUsers } from "../store/actions/usersAction";
import { useEffect } from "react";
import Loader from "../components/Loader";

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

  //accessing users and loader form state using destructuring
  const { users, loader } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    //we have called it after our component has been loaded
    dispatch(getUsers());
  }, []);

  return !loader ? (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Sno.</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Detail</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              <Link to={`/user/${user.id}`} className="btn btn-outline-success">
                Details
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <Loader/>
  );
}
