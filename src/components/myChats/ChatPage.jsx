import React, { useEffect, useState } from 'react'
import SideDrawer from '../miscellaneous/SideDrawer';
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Text, Tooltip, useDisclosure} from '@chakra-ui/react';
import MyChats from '../miscellaneous/MyChats';
import ChatBox from '../miscellaneous/ChatBox';
import { ChatState } from '../../Context/ChatProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMessage} from '@fortawesome/free-solid-svg-icons'



export default function ChatPage() {

  const {isOpen, onOpen, onClose}  = useDisclosure();

   const {user} =  ChatState();
  return (
    <>
    
    
    <Box className=''>
    <Tooltip label="Click to chat" hasArrow placement="bottom-end">
      <Button variant="ghost" onClick={onOpen}>
      <FontAwesomeIcon icon={faMessage} size='2xl' />      
      </Button>
    </Tooltip>
   
  </Box>

    <Drawer placement='right' onClose={onClose} isOpen={isOpen} size="lg" >
    <DrawerOverlay/>
    <DrawerContent>
      <DrawerHeader className='border-b-[1px] text-center text-gray-700' fontSize="x-large" fontWeight="700" >Chat with Guides</DrawerHeader>
    <DrawerBody>
    <div  style={{width : "100%"}}>
      { user && <SideDrawer/>}
      <Box className='flex justify-between w-[100%] h-[91.5vh] p-[10px] bg-slate-300'>
        {user && <MyChats/>}
        {user && <ChatBox/>}
      </Box>

      </div>
    </DrawerBody>
    </DrawerContent>

  </Drawer>
    </>



   


  )
}
