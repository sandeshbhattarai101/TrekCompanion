import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios';


export default function AdminNavbar() {

  const fetchLogOut = async () => {
    const response = await axios.get("http://localhost:3000/logout",{
      withCredentials: true,
    })
   // console.log(response.data.data);
    if (response.status == 200) {
      alert(response.data.message)
    } else {
      alert("something went wrong");
    }
  };

  return (
    <div className="adminNavbar h-12 bg-slate-400 ">
    <Link className="navbarLogo text-black text-lg absolute left-24  top-5" to="/">TrekCompanion</Link>
    <div className='navbarUser group '>
    <button className=" text-black text-lg absolute right-24 top-5 h-8" to="/admin"> <FontAwesomeIcon className='mr-2' icon={faUser} />admin</button>
    <div className='dropdown absolute right-12 top-[48px] bg-white  w-40 h-8 border text-center hidden group-hover:block'>
    <Link onClick={fetchLogOut} to={"/user/login"}>logout</Link>
    </div>
    </div>
    </div>
  )
}
