import React, { useEffect, useState } from 'react'
import { ChatState } from '../Context/ChatProvider'
import { Box, FormControl, IconButton, Input, Spinner, Text, useToast } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import axios from 'axios';
import ScrollableChat from './ScrollableChat';

export default function SingleChat() {
    const [messages, setMessages] = useState();
    const [loading, setLoading] = useState(false);
    const [ newMessage, setNewMessage] = useState();

    const toast = useToast();
    const {user, selectedChat, setSelectedChat} = ChatState();


    const fetchMessages = async()=>{
        if(!selectedChat) return;

        try{
            setLoading(true);
            const response = await axios.get(`http://localhost:3000/api/message/${selectedChat._id}`,{
                withCredentials: true,
                })

           //     console.log(messages);
                setMessages(response.data);
                setLoading(false);

        }catch(error){
            toast({
                title: "Error Occurred",
                description: "Failed to Load the Messages",
                status:"error",
                duration: 5000,
                isClosable: true,
                position:"bottom",

        })
    }
    };
    
    useEffect(()=>{
        fetchMessages();
    },[selectedChat])

    const sendMessage=async(event)=>{
        if(event.key === "Enter" && newMessage){
            try{

                setNewMessage("");
                const response = await axios.post("http://localhost:3000/api/message", {
                    content : newMessage,
                    chatId: selectedChat._id,
                },{
                    withCredentials: true,
                    headers:{
                        "Content-Type": "application/json"
                    }
                })
            //    console.log(response);

            
                setMessages([...messages,response])
        } catch(error){
            toast({
                title: "Error Occurred",
                description: "Failed to send the Message",
                status:"error",
                duration: 5000,
                isClosable: true,
                position:"bottom",
        
              })
        }
        }
    };

    const typingHandler=(e)=>{
        setNewMessage(e.target.value);
    }

  return (
    <>
    {selectedChat ? (
        <>
        <Text fontSize={{base:"28px", md:"30px"}} pb={3} px={2} w="100%" fontFamily="Work sans" d="flex" justifyContent={{base: "space-between"}} alignItems="center" >
            <IconButton d={{base: "flex", md:"none"}} icon={<ArrowBackIcon/>} onClick={()=> setSelectedChat("")}/>
        </Text>
        <Box className='flex flex-col justify-end' p={3}  bg="#E8E8E8" w="100%" h="91.5%" borderRadius="lg" overflowY="hidden" >
            {loading ? (
                <Spinner size="xl" w={20} h={20} alignSelf="center" margin="auto"  />
            ):(
                <div className='flex  flex-col overflow-y-scroll '>
               <ScrollableChat messages={messages} />
               </div>
               )}

            <FormControl onKeyDown={sendMessage} isRequired > 
            <Input variant="filled"  placeholder='Enter a message...' onChange={typingHandler} value={newMessage} />
            </FormControl>
            
        </Box>
        
        </>
    ):(
<Box className='flex items-center justify-center h-full '>
    <Text className='text-3xl pb-3 font-sans text-black '>
        Click on a user to start chatting
    </Text>

</Box>
    
    )}
    
    </>
  )
}
