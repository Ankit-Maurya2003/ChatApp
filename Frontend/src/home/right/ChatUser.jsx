import React from "react";
import userConversation from "../../zustand/UserConversation";
import { useSocket } from "../../context/SocketContext";

const ChatUser = () => {
  const{selectedConversation,setSelectedConversation}=userConversation();
   const{online,socket} =useSocket();
 const getOnline = (userid)=>{
  return online.includes(userid)?"online":"Offline";
 }
  
  return (
    <>

    <div className="relative" >

       <button type="button" onClick={()=>setSelectedConversation(null)} className="bg-amber-700 absolute text-white top-2 px-3 py-2 flex justify-center items-center rounded-lg">
        ← Back

       </button>
     <div className="flex space-x-3 justify-center h-full   items-center  bg-slate-700 hover:bg-gray-700 duration-300">
            <div className={`avatar `}>

        <div className="w-14 rounded-full">
          <img
            alt="Tailwind-CSS-Avatar-component"
            src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
          />
        </div>
      </div>
      <div >
        <h1 className="font-bold text-xl text-white">{selectedConversation?.fullname}</h1>
        <span className="text-sm text-white">{getOnline(selectedConversation._id)}</span>
      </div>
     </div>

    </div>
    </>
  );
};

export default ChatUser;
