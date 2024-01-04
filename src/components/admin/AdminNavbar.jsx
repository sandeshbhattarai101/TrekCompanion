import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export default function AdminNavbar() {
  return (
    <div className="adminNavbar h-12 bg-slate-400 ">
    <Link className="navbarLogo text-black text-lg absolute left-24  top-5" to="/">TrekCompanion</Link>
    <div className='navbarUser group '>
    <button className=" text-black text-lg absolute right-24 top-5 h-8" to="/admin"> <FontAwesomeIcon className='mr-2' icon={faUser} />admin</button>
    <div className='dropdown absolute right-12 top-[48px] bg-white  w-40 h-8 border text-center hidden group-hover:block'>
    <Link>logout</Link>
    </div>
    </div>
    </div>
  )
}
