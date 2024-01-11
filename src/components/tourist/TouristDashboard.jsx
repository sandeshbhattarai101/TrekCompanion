import React from 'react'
import TouristNavbar from './TouristNavbar'
import PopularDestination from './PopularDestination'
import TopGuides from './TopGuides'
import Footer from '../../components/pages/Footer'
import ChatPage from '../myChats/ChatPage'



const TouristDashboard = () => {
  return (
<>

 <TouristNavbar/>
 <div className='grid grid-cols-2 w-full h-screen mb-32'>
 <div className='bodyContainer w-[78%]' >
 <PopularDestination/>
 <TopGuides/>
 </div>
 <div className='chatBox mr-[1px] absolute right-0 w-[50%]'>
 <ChatPage/>
 </div>
 </div>
 <Footer/>

 </>
  )
}

export default TouristDashboard