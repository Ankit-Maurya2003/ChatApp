import React from 'react'
import { useSocket } from './SocketContext.jsx'
import userConversation from '../zustand/UserConversation.js';
import { useEffect } from 'react';
import sound from'../assets/sendingVoice.mp3';

const useGetSocketMessage = () => {
    const{socket}=useSocket();
    const{setMessage,messages}=userConversation();
useEffect(()=>{
    socket.on("newMessage",(newMessage)=>{
  const notification = new Audio(sound)
  notification.play();
        setMessage([...messages,newMessage])
    });
    return()=>{
        socket.off("newMessage");
    }
},[socket,messages,setMessage])

}

export default useGetSocketMessage

