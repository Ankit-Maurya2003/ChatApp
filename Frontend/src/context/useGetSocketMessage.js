import React, { useEffect } from "react";
import { useSocket } from "./SocketContext.jsx";
import userConversation from "../zustand/UserConversation.js";
import sound from "../assets/sendingVoice.mp3";

const useGetSocketMessage = () => {
  const { socket } = useSocket();
  const { setMessage } = userConversation();

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (newMessage) => {
      console.log("New Message Received:", newMessage);

      // Sound
      const notification = new Audio(sound);
      notification.play().catch((error) => {
        console.log("Sound error:", error);
      });

      // Message update
      setMessage((prevMessages) => [
        ...prevMessages,
        newMessage
      ]);
    };

    socket.on("newMessage", handleNewMessage);

    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, [socket, setMessage]);
};

export default useGetSocketMessage;