import React, { useEffect, useState } from 'react'
import SideDrawer from '../miscellaneous/SideDrawer';
import { Box} from '@chakra-ui/react';
import axios from 'axios';
import MyChats from '../miscellaneous/MyChats';
import ChatBox from '../miscellaneous/ChatBox';
import { ChatState } from '../../Context/ChatProvider';


export default function ChatPage() {
   const {user} =  ChatState();
  return (
    <div  style={{width : "100%"}}>
      { user && <SideDrawer/>}
      <Box className='flex justify-between w-[100%] h-[91.5vh] p-[10px] bg-slate-300'>
        {user && <MyChats/>}
        {user && <ChatBox/>}
      </Box>

    </div>
  )
}
