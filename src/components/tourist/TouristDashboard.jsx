import React from 'react'
import TouristNavbar from './TouristNavbar'
import PopularDestination from './PopularDestination'
import TopGuides from './TopGuides'
import ChatBody from '../chat/chatBody/ChatBody'



const TouristDashboard = () => {
  return (
<>
 <TouristNavbar/>
 <div className='grid grid-cols-2'>
 <div className='bodyContainer' >
 <PopularDestination/>
 <TopGuides/>
 </div>
 <div className='chatBox'>
 <ChatBody/>
 </div>

 </div>



 </>
  )
}

export default TouristDashboard