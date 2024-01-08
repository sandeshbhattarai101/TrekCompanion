import React,{Component} from 'react'
import './DropDownProfile.css'
import { Link } from 'react-router-dom'


const DropDownProfile = () => {
  return (
    <div className='flex flex-col dropDownProfile left-24'>
        <ul className='flex flex-col gap-4'>
            <li><Link>Profile </Link> </li>
            <li><Link>Set My Profile</Link> </li>
            <li><Link>Logout</Link></li>
        </ul>
    </div>
  )
}

export default DropDownProfile