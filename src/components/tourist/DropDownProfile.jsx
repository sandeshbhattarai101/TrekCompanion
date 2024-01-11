import React,{Component} from 'react'
import './DropDownProfile.css'
import { Link } from 'react-router-dom'
import axios from 'axios';



const DropDownProfile = () => {

  const fetchLogOut = async () => {
    const response = await axios.get("http://localhost:3000/logout",{
      withCredentials: true,
    })   // console.log(response.data.data);
   if (response.status == 200) {
    alert(response.data.message)
  } else {
    alert("something went wrong");
  }
  };
  return (
    <div className='flex flex-col dropDownProfile left-24'>
        <ul className='flex flex-col gap-4'>
            <li><Link to={`/profile`}>Profile </Link> </li>
            <li><Link to={`/updateProfile`}>Set My Profile</Link> </li>
            <li><Link to={'/user/login'} onClick={fetchLogOut}>Logout</Link></li>
        </ul>
    </div>


  )
}

export default DropDownProfile