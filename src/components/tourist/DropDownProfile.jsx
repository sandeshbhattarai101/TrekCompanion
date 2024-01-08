import React,{Component} from 'react'
import './DropDownProfile.css'
import { Link } from 'react-router-dom'


const DropDownProfile = () => {
  return (
    <div className='flex flex-col dropDownProfile left-24'>
        <ul className='flex flex-col gap-4'>
            <Link to="/profile">Profile</Link>
            <li>Set My Profile</li>
            <li>Logout</li>
        </ul>
    </div>
  )
}

export default DropDownProfile