import React, { useEffect, useState } from 'react'
import { ChatState } from '../../Context/ChatProvider';
import ChatLoading from '../ChatLoading';
import { Box, Stack, Text, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { getSender } from '../config/ChatLogics';

export default function MyChats() {
   
  const [loggedUser, setLoggedUser] = useState({});
  const {user,selectedChat, setSelectedChat, chats, setChats} =  ChatState();

  const toast = useToast();

  const fetchChats = async ()=>{
    try{

      const response = await axios.get('http://localhost:3000/api/chat',{
        withCredentials: true,
      })
     // console.log(response.data.data)
      setChats(response.data.data);
    
    }catch(error){
      toast({
        title: "Erroe Occurred",
        description: "Failed to Load the chats",
        status:"error",
        duration: 5000,
        isClosable:true,
        position:"bottom-left",

      })
    }
  }
  useEffect(()=>{
    setLoggedUser(user);
    fetchChats();

  },[])
  return (
    <>
    <Box d={{ base: selectedChat ? "none" : "flex", md:"flex"  }} flexDir="column" alignItems="center" p={3} bg="white" w={{base:"100%", md:"31%"}} borderRadius="lg" borderWidth="1px">
      <Box className='pb-3 px-3 text-[28px] md:text-[30px] font-sans flex w-full justify-between items-center'>
        My Chats
      </Box>
      
      <Box className='flex flex-col p-3 bg-slate-400 w-full h-[91.5%] rounded-lg overflow-y-hidden' >
        {chats ? (
          <Stack className='overflow-y-scroll'>
            {chats.map((chat)=>(
              <Box key={chat._id} onClick={()=> setSelectedChat(chat)} bg={selectedChat === chat ? "#64748b" : "#E8E8E8"} color={selectedChat === chat ? "white" : "black"} className='cursor-pointer px-3 py-5 rounded-lg'>
                <Text>
                  {getSender(loggedUser, chat.users)}
                </Text>
              </Box>
            ))}

          </Stack>

        ):(
          <ChatLoading/>
        )}
      </Box>
    </Box>
    </>
  )
}
