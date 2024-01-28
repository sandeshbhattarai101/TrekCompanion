import React, { useEffect, useState } from 'react'
import GuideNavbar from './guideNavbar'
import ChatBox from '../miscellaneous/ChatBox'
import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { ChatState } from '../../Context/ChatProvider';
import MyChats from '../miscellaneous/MyChats'
import axios from 'axios'
import { ChevronDownIcon } from '@chakra-ui/icons';

// ... (existing imports)

export default function GuideDashboard() {
    
   const { user } =  ChatState();
   const [orderData, setOrderData] = useState([]);


   useEffect(() => {
     
     const getNotification = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/orders/${user._id}`, {
          withCredentials: true
        });

        if (response.status === 200) {
          setOrderData(response.data.data);
          // console.log(orderData);
        } else if (response.status === 400) {
          alert(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getNotification();

  
   }, []);

   return (
    <>
      <GuideNavbar/>
      <Box className='absolute top-5 right-20'>
      <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
Notification
  </MenuButton>
  <MenuList>
       <MenuItem> {orderData.map((order) => (
          <div key={order._id} >   
            {/* <h2>Username: {order.user}</h2> */}
            <h2>Tourist Address: {order.yourCurrentAddress}</h2>
            <h2>PhoneNumber: {order.phoneNumber}</h2>
            <h2>Method: {order.paymentDetails.method}</h2>
            <h2>Status: {order.paymentDetails.status}</h2>
          </div>
        ))}</MenuItem>
  </MenuList>
</Menu>
      </Box>


      <Box className='flex justify-between w-[100%] h-[91.5vh] p-[10px] bg-slate-300'>
        {user && <MyChats/>}
        {user && <ChatBox/>}
      </Box>

    </>
  );
}
