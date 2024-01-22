import React from 'react'
import TouristNavbar from './TouristNavbar'
import PopularDestination from './PopularDestination'
import TopGuides from './TopGuides'
import Footer from '../../components/pages/Footer'
import ChatPage from '../myChats/ChatPage'



const TouristDashboard = () => {
  return (
<>

<div className='bg-cream'>

 <TouristNavbar/>
 <div className='grid grid-cols-2 w-full h-fit mb-20'>
 <div className='bodyContainer w-screen' >
 <PopularDestination/>
 <TopGuides />
 </div>
 <div className='chatBox mr-[1px] absolute right-0 '>
 <ChatPage/>
 </div>
 </div>
 <Footer/>

</div>

 </>
  )
}

export default TouristDashboard