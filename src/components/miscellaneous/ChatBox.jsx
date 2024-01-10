import React from 'react'
import SingleChat from '../SingleChat'
import { ChatState } from '../../Context/ChatProvider'
import { Box } from '@chakra-ui/react';

export default function ChatBox() {

  const {selectedChat}= ChatState();
  return (
   
    <Box  d={{ base: selectedChat ? "none" : "none", md: "flex" }} alignItems="center" flexDir="column" p={3} bg="white" w={{base: "100%", md:"68%"}} borderRadius="lg" borderWidth="1px">
      
      <SingleChat/>
      </Box>
  )
}
