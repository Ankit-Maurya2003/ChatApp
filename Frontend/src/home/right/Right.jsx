import React from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import TypeSend from './TypeSend'
import { useEffect } from 'react'
import { useAuth } from '../../context/AuthProvider'
import userConversation from '../../zustand/UserConversation'
const Right = () => {
  const {AuthUser}=useAuth();
  const {selectedConversation,setSelectedConversation}=userConversation();
 
  return (
    <>
   {!selectedConversation?(
    <div className='flex justify-center h-screen w-full  items-center  '>
      <p className='text-center w-full  '>Welcome <span>{AuthUser.user.fullname}</span>
    
     <br />
     <span>No any User Selected For Chat</span>
        </p>
        

    </div>
   ):(
<div>
       <div className='text-gray-300   col-span-7 h-screen w-full bg-slate-900 grid grid-rows-10'>
      <div className='row-span-1  '>
         <ChatUser/>
      </div>
      <div className='row-span-8 overflow-auto  scrollbar-none'>
       <Messages/>
        
      </div>
      <div className='row-span-1 '>
         
       <TypeSend/>
      </div>
    </div>
</div>
   )}
      
    </>
  )
}

export default Right
