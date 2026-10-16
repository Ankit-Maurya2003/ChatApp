import React, { useEffect, useRef } from 'react'
import Message from './Message.jsx'
import Loading from '../../component/Loading.jsx'
import useGetMessage from '../../context/useGetMessage.js'
import userConversation from '../../zustand/UserConversation.js'
import useGetSocketMessage from '../../context/useGetSocketMessage.js'

const Messages = () => {

  const { loading, messages } = useGetMessage();
  useGetSocketMessage()
  const { selectedConversation } = userConversation();

  // Messages container ko reference karne ke liye
  const messagesEndRef = useRef(null);

  // Jab bhi messages change honge, bottom par scroll hoga
  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });

  }, [messages]);

  return (

    <div >

      {loading ? (
        <Loading />
      ) : (
        messages.length > 0 &&
        messages.map((message, index) => (
          <Message
            key={index}
            message={message}
          />
        ))
      )}

      {selectedConversation &&
        !loading &&
        messages.length === 0 && (
          <div>
            <p className='flex justify-center items-center '>
              Say! Hi to start messages
            </p>
          </div>
        )
      }

      {/* Always bottom */}
      <div ref={messagesEndRef}></div>

    </div>
  )
}

export default Messages