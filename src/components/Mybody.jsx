import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';



export default function Mybody() {
  const [destinations, setDestinations] = useState([])
  
  const fetchDestinations = async ()=>{
 
      const response = await axios.get('http://localhost:3000/destination')
      console.log(response.data.data); 
      if(response.status ==200){
        setDestinations(response.data.data)
       
        
      }else{
        alert("something went wrong")
      }
      
  
  }

  useEffect(()=>{
    fetchDestinations()
  },[])

return(
  <>
<div className='mainBody  h-[900px] w-screen flex flex-row  ' >
  <div className='mainBodyContainer flex flex-col absolute top-36 left-24 bg-slate-300 w-170 h-62 p-7 rounded-3xl '>
  <div className="bodyParagraph mt-1 ml-1">
        <h1 className='text-3xl font-semibold'>Guide with us and get paid.</h1>

        <h3 className=' text-xl font-medium mt-5 ml-1 '>Guide on the platform with largest network of tourists.</h3>
    </div>
    <div className="subBodyContainer flex flex-col relative mt-7 ">
      <button className='bodyBtn  bg-slate-600 border-none w-72 m-1 p-2 mb-3'><Link className=' bodyButton earnBtn  text-white  ' to={"/signupForm"}>Earn with TrekCompanion <FontAwesomeIcon className="bodyArrow fontAwesomeIcon ml-7 pt-1"   icon={faArrowRight} /></Link></button>
      <button className='bodyBtn  bg-slate-600 border-none w-72 m-1 p-2'><Link  className=' bodyButton trekBtn  text-white' to={"/signupForm"}>Trek with TrekCompanion <FontAwesomeIcon className="bodyArrow fontAwesomeIcon ml-7 pt-1"   icon={faArrowRight} /></Link></button>
    </div> 
    </div>
    {destinations.map((destination)=>{
      return(
        <div className="destinationCard  w-[250px] h-[300px] rounded-xl left-24 mr-10 relative top-[450px]  ">
        <div key={destination._id} className="card-body w-full ">
       <img className='cardImage object-cover h-[280px] w-[250px] rounded-xl shadow-md' src={destination.destinationImage}  alt="image" />
        <h5 className="cardTitle font-bold text-center mt-2">{destination.destinationName}</h5>
      </div>
    </div>
      )
    }) }
    </div>
    
    
  </>
)
}