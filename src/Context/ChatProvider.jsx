import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const ChatContext = createContext()


import React from 'react'

export default function ChatProvider({children}) {
  const [user, setUser] = useState({});
  const [selectedChat, setSelectedChat] = useState();
  const [chats, setChats] = useState([]);

useEffect(()=>{
  const getFormData = async()=>{
    const response = await axios.get('http://localhost:3000/profile',{
      withCredentials : true
    })
   // console.log(response.data)
    setUser(response.data)
  }
  getFormData();
},[])


  return (
   <ChatContext.Provider value={{user, setUser, selectedChat, setSelectedChat, chats, setChats}}>
    {children}
   </ChatContext.Provider>
  )
}

export const ChatState = () =>{    
   return useContext(ChatContext);
};
