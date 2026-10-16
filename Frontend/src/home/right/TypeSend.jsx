import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";
const TypeSend = () => {
  const[message,setMessage] = useState("")
const {loading,sendMessages}=useSendMessage();
const handleSubmit = async(e)=>{
 e.preventDefault();
  
  await sendMessages(message)
  setMessage("")

}

  return (
  <form onSubmit={handleSubmit} className=" h-full" >
      <div className="flex  space-x-6 h-full  justify-center bg-gray-800 items-center  ">
      <div className="w-[90%]  "> 
        <input
          type="text"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          className="input w-full h-15  bg-black outline-none border-none"
          placeholder="Type here"
        />
      </div>
      <button className=" text-3xl ">
        <IoSend />
      </button>
    </div>
  </form>
  );
};

export default TypeSend;
