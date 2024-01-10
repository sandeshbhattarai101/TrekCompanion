import { Box, Button, Tooltip, Text, Drawer, useDisclosure, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Input, useToast, Spinner} from '@chakra-ui/react';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { ChatState } from '../../Context/ChatProvider';
import axios from 'axios';
import ChatLoading from '../ChatLoading';
import { UserListItem } from '../UserAvatar/UserListItem';



export default function SideDrawer() {

  const {user, setSelectedChat, chats, setChats} =  ChatState();

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  const {isOpen, onOpen, onClose}  = useDisclosure();

const toast = useToast();

  const handleSearch = async ()=>{
    if (!search){
      toast({
        title:"Please Enter something in search",
        status:"warning",
        duration: 5000,
        isClosable: true,
        position: "top-left"
      });
      return;
    }

    setLoading(true);
    const response = await axios.get(`http://localhost:3000/api/chat/user?search=${search}`,{
      withCredentials: true
    })
    setLoading(false);
    setSearchResult(response.data.data);
  


  };
  
  const accessChat = async (userId)=>{
   try{ setLoadingChat(true);
    const response = await axios.post('http://localhost:3000/api/chat',{userId},{
      withCredentials: true,
      headers:{
        "Content-Type":"application/json",
      }
    })
   // console.log(response.data)

    if(!chats.find((c)=> c._id === response.data._id))
    setSelectedChat([response.data , ...chats]);
    setLoadingChat(false);
    onClose();

} catch (error){
  toast({
    title: "Error fetching the chat",
    description: error.message,
    status:"error",
    duration: 5000,
    isClosable:true,
    position:"bottom-left",

  })
}


  }


  return (
    <>
    <Box className='flex justify-between items-center bg-white w-full p-[5px] border-1'>
      <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
        <Button variant="ghost" onClick={onOpen}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <Text className='hidden md:flex  pl-4'>
          Search User
        </Text>
        </Button>
      </Tooltip>
      <Text className=' text-2xl font-sans'>
        TrekCompanion
      </Text>
    </Box>
    <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay/>
      <DrawerContent>
        <DrawerHeader className='border-b-[1px]'>Search Users</DrawerHeader>
      <DrawerBody>
        <Box className='flex pb-2'>
          <Input placeholder="Search by name or email" className="mr-2" vlaue={search} onChange={(e)=> setSearch(e.target.value)}/>
          <Button  onClick={handleSearch} >Go</Button>
        </Box>

        {loading ? <ChatLoading/> :
        (
          searchResult?.map((user) =>(
             <UserListItem key={user._id} user={user} handleFunction={()=>accessChat(user._id)} />
          ))
        )}

        {loadingChat && <Spinner className='ml-auto flex'/>}


      </DrawerBody>
      </DrawerContent>

    </Drawer>


    </>
  )
}
