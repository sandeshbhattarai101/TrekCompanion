import { Box, Button, Tooltip, Text, Drawer, useDisclosure, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Input, useToast, Spinner} from '@chakra-ui/react';
import ChatLoading from '../chats/ChatLoading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

import React, { useState } from 'react';
import axios from 'axios';

export default function SearchBar() {

    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
  
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
      const response = await axios.get(`http://localhost:3000/api/tourist/destination?search=${search}`,{
        withCredentials: true
      })
      setLoading(false);
      setSearchResult(response);
      console.log(response)
    
    };

    return (
          <>
        
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button colorScheme='teal'  variant="solid" onClick={onOpen}>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg"className="text-white" />
          <Text className='hidden md:flex  pl-4 text-lg font-bold text-gray-200'>
            Search Destination
          </Text>
          </Button>
        </Tooltip>
      <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerHeader className='border-b-[1px]'>Search Destinations</DrawerHeader>
        <DrawerBody>
          <Box className='flex pb-2'>
            <Input placeholder="Search by name" className="mr-2" vlaue={search} onChange={(e)=> setSearch(e.target.value)}/>
            <Button  onClick={handleSearch} >Go</Button>
          </Box>
  
          {loading ? <ChatLoading/> :
          (
            searchResult?.map((destination) =>(
               <UserListItem key={destination._id}  />
            ))
          )}
  
        </DrawerBody>
        </DrawerContent>
  
      </Drawer>
        
        </>
    );
}