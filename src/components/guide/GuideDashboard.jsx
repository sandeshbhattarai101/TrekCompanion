import React from 'react'
import ChatPage from '../myChats/ChatPage'
import GuideNavbar from './guideNavbar'
import ChatBox from '../miscellaneous/ChatBox'
import { Box } from '@chakra-ui/react'
import { ChatState } from '../../Context/ChatProvider';
import MyChats from '../miscellaneous/MyChats'

export default function GuideDashboard() {
    
   const {user} =  ChatState();
  return (
    <>
    <GuideNavbar/>
    <div  style={{width : "100%"}}>
      <Box className='flex justify-between w-[100%] h-[91.5vh] p-[10px] bg-slate-300'>
        {user && <MyChats/>}
        {user && <ChatBox/>}
      </Box>

      </div>
    
    </>
  )
}
