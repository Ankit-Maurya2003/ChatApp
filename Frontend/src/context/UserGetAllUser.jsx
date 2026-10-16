import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
const UserGetAllUser = () => {
 const [AllUser,SetAllUser] = useState([])
 const[loading,Setloading]= useState(false)
 useEffect(()=>{
   const getUser = async ()=>{
     Setloading(true);
    try {
     const token = Cookies.get("jwt");
     const response = await axios.get("http://localhost:5000/user/allUser",{
    withCredentials: true,
    headers: {
        Authorization:`Bearer ${token}`
     }
     })
    
     SetAllUser(response.data);  
     Setloading(false);
    } catch (error) {
        console.log("Error In AllUserGet :"+error);
    };
   }
    getUser()
 },[]);
   
     return[AllUser,loading];
}

export default UserGetAllUser
