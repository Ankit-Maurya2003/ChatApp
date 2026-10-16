import { useState } from "react";
import userConversation from "../zustand/UserConversation";
import axios from "axios";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);

  const {
    messages,
    setMessage,
    selectedConversation
  } = userConversation();

  const sendMessages = async (message) => {

    if (!message.trim()) return;

    setLoading(true);

    try {

      const response = await axios.post(
        `https://chatapp-e3x9.onrender.com/sendUser/send/${selectedConversation._id}`,
        {
          message: message
        },
        {
          withCredentials: true
        }
      );

      setMessage([...messages, response.data.newMessage]);

    } catch (error) {

      console.log(
        "Error From SendMessage:",
        error.response?.data || error.message
      );

    } finally {

      setLoading(false);

    }
  };

  return {
    loading,
    sendMessages
  };
};

export default useSendMessage;