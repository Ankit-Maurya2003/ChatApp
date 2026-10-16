import React from 'react'

const Message = ({message}) => {

  
  const auth = JSON.parse(localStorage.getItem("ChatApp"));
  const itMe = message.senderId === auth.user._id;
  
  

  const chatName = itMe?" chat-end":" chat-start";
  const ChatColor = itMe?"bg-blue-500":"bg-slate-500"
const createdAt = new Date(message.createdAt);
const formatedTime= createdAt.toLocaleString([],{
  hour:'2-digit',
  minute: '2-digit'
})

  return (
    <div>
        <div className='p-4'>
<div className={`chat ${chatName}`} >
  <div className={`chat-bubble  text-white ${ChatColor}`}>{message.message}
    

  </div>
  <div className='chat-footer'>
    {formatedTime}
  </div>
  

</div>

       </div>
      
    </div>
  )
}

export default Message
