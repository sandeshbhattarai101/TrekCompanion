import React from 'react'
import TouristNavbar from './TouristNavbar'
import PopularDestination from './PopularDestination'
import TopGuides from './TopGuides'
import Footer from '../Footer'



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
 </div>

 </div>

 <Footer/>

 </>
  )
}

export default TouristDashboard