import React from "react";
import userConversation from "../../zustand/UserConversation.js";
import { useSocket } from "../../context/SocketContext.jsx";

const User = ({user}) => {
  const {selectedConversation,setSelectedConversation}= userConversation();
  const isMatch = selectedConversation?._id===user._id;
  const{online,socket} =useSocket();
const isonline = online.includes(user._id?.toString());
  
  return (
    <div >
      <div className={`hover:bg-slate-600 flex space-x-4 px-6 py-3 duration-300 ${isMatch?"bg-slate-700":""}`} onClick={()=>setSelectedConversation(user)}>
        <div className={`avatar ${isonline?"avatar-online ":""}`}>
          <div className="w-12 rounded-full">
            <img
              alt="Tailwind-CSS-Avatar-component"
              src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
            />
          </div>
        </div>
        <div>
          <h1 className="font-bold">{user.fullname}</h1>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default User;
