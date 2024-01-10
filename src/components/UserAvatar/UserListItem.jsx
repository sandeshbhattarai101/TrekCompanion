import React from 'react'
import { Avatar, Box, Text } from '@chakra-ui/react';

export const UserListItem = ({user, handleFunction}) => {




  return (
    <>
        <Box onClick={handleFunction} className='cursor-pointer bg-slate-200 hover:bg-slate-300 w-full flex items-center px-3 py-2 mb-2 rounded-lg' >
           <Avatar className='bg-slate-900 mr-2 size-sm cursor-pointer '>
        </Avatar>
        <Box>
            <Text className='text-md font-medium text-slate-950 mb-1 '>{user.username}</Text>
            <Text className='text-md  text-slate-950 '><b>Email : </b>{user.email}</Text>
        </Box>
        </Box>
    </>
  )
}
