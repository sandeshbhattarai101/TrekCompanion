import React,{Component} from 'react'
import './DropDownProfile.css'


const DropDownProfile = () => {
  return (
    <div className='flex flex-col dropDownProfile left-24'>
        <ul className='flex flex-col gap-4'>
            <li>Profile</li>
            <li>Set My Profile</li>
            <li>Logout</li>
        </ul>
    </div>
  )
}

export default DropDownProfile