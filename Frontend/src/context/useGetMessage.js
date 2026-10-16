import React, { useEffect, useState } from 'react'
import userConversation from '../zustand/UserConversation';
import axios from 'axios';

const useGetMessage = () => {
    const [loading,setLoading] = useState(false);
    const{messages,setMessage,selectedConversation} = userConversation();
    useEffect(()=>{
        const getMessages = async()=>{
            if(selectedConversation && selectedConversation._id){
                setLoading(true);
                try {

               const response= await axios.get(`http://localhost:5000/sendUser/get/${selectedConversation._id}`,
                {
                    withCredentials:true
                }
                );
                setMessage(response.data);
            } catch (error) {
                console.log("Error From GetMessage"+error);
                
                
            }
            finally {

                setLoading(false);

            }
            }
        }
        getMessages();
    },[selectedConversation,setMessage])

  return {loading,messages}
}

export default useGetMessage
