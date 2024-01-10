import React from 'react'
import ScrollableFeed from 'react-scrollable-feed'
import { ChatState } from '../Context/ChatProvider'
import { isLastMessage, isSameSender } from './config/ChatLogics';
import { Avatar, Tooltip } from '@chakra-ui/react';

export default function ScrollableChat({messages}) {

    const {user} = ChatState();
  return (
    <>
    <ScrollableFeed>
        {messages &&
         messages.map((m, i)=>(
            <div style={{display:"flex"}} key={m._id}>
                {(isSameSender(messages, m, i, user._id)
                || isLastMessage(messages, i, user._id)
                ) &&(
                <Tooltip  label={m.sender[0].username} placement="bottom-start" hasArrow >
                    <Avatar  mt='7px' mr={1} size="sm" cursor="pointer" name={m.sender[0].username} />
                </Tooltip>
                )}

                <span style={{backgroundColor:`${m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"}`, borderRadius: " 20px", padding:"5px 15px", maxWidth:"75%" }}>
                    {m.content}
                </span>
            </div>
        ))}
    </ScrollableFeed>
    </>
  )
}
