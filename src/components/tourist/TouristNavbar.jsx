import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import DropDownProfile from './DropDownProfile'
import profile from "../../../public/images/pp.png"
import SearchBar from './SearchBar'
import { ChatState } from '../../Context/ChatProvider'


const TouristNavbar = () => {
    
  const {user} =  ChatState();
  //console.log(user)

    const [openProfile,setOpenProfile] = useState(false);
  return (
    <div className="touristNavbar h-12 bg-slate-400 ">
    {/* <span className='text-2xl font-semibold cursor-pointer absolute top-2' onClick={()=>{
        setOpenProfile((prev)=>!prev)
    }}>User</span> */}
   
    <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 cursor-pointer absolute top-1 left-24" src={profile} alt="" onClick={()=>{
        setOpenProfile((prev)=>!prev)}}  />
    <div className='text-slate-700 text-2xl font-medium font-sans absolute left-[150px] top-[5px]'>{user.username}</div>
   
    {
        openProfile &&  <DropDownProfile/>
    }
    <SearchBar/>
   </div>
    
  )
}

export default TouristNavbar