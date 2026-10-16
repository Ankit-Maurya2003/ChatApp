import React from 'react'
import axios from 'axios';

import { useState } from 'react';
import { CiLogout } from "react-icons/ci";
import toast from 'react-hot-toast';
const Logout = () => {
  const [loading,Setloading]= useState(false)
  const handleLogout = async ()=>{
    Setloading(true)
    try {
      const response= await axios.post("http://localhost:5000/user/Logout",
         {},
    {
        withCredentials: true
    }
      );
      localStorage.removeItem("ChatApp");
      
      Setloading(false)
      toast.success("Logout Succesful....")
      window.location.reload();
    } catch (error) {
      console.log("error on Logout :"+error);
      
      
    }
  }
  return (
    <div className='text-4xl flex h-full justify-center items-center bg-red-900 text-white hover:cursor-pointer hover:bg-red-600  ' onClick={handleLogout} >
      <h1>
        <CiLogout />

      </h1>
    </div>
  )
}

export default Logout
