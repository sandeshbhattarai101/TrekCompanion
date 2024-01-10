import React from 'react'
import SingleChat from '../chats/SingleChat'
import { ChatState } from '../../Context/ChatProvider'
import { Box } from '@chakra-ui/react';

export default function ChatBox() {

  const {selectedChat}= ChatState();
  return (
   
    <Box className="bg-slate-300"  d={{ base: selectedChat ? "none" : "none", md: "flex" }} alignItems="center" flexDir="column" p={3}  w={{base: "100%", md:"68%"}} borderRadius="lg">
      
      <SingleChat/>
      </Box>
  )
}
