import { useState} from 'react'
import '../../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import {faMessage} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {

const[popupMenu, setPopupMenu] = useState(false)
const[companyDropdown, setCompanyDropdown] = useState(false)
const[helpDropdown, setHelpDropdown] = useState(false)

const handleMenu = ()=>{
  setPopupMenu(!popupMenu)

}

const handleMenuClose = ()=>{
  setPopupMenu(false)
}
const handleCompany = ()=>{
  setCompanyDropdown(!companyDropdown)
}
const handleHelp = ()=>{
  setHelpDropdown(!helpDropdown)
}

    return(
       <>
       
<nav className="navbar  flex top-0 w-screen h-[45px] z-10  bg-teal-700 sticky pt-[10px] shadow-md  ">

<Link className="navbarLogo text-black text-lg absolute left-24 " to="/">{props.title}</Link>
   <div className='navbarLeft  hidden   lg:flex absolute left-[250px] '>
    <div className='companyDropdown  group'>
   <button className='navbarBtn companyButton  h-fit w-fit ml-[50px] p-1 rounded-lg bg-transparent bg-repeat border-none cursor-pointer overflow-hidden outline-none   mr-5 pb-4' ><Link className="navbarButton  " href="#">{props.company} </Link>
<FontAwesomeIcon className="fontAwesomeIcon companyFontawesomeDown  absolute left-[150px] top-2 inline group-hover:hidden" icon={faChevronDown}/>
<FontAwesomeIcon className="fontAwesomeIcon companyFontawesomeUp   hidden group-hover:block hover:block absolute left-[150px] top-2 " icon={faChevronUp}/>
    </button>
  
    <div className='companyUl w-[250px] hidden group-hover:block rounded-sm bg-white text-lg absolute p-[10px] top-[35px] left-5 shadow'>
    <Link className="companyItems text-black hover:bg-teal-500 flex p-1 pb-1 pt-1 pl-5 rounded-md" to="/about">About us</Link>
    <Link className="companyItems text-black hover:bg-teal-500 flex p-1 pb-1 pt-1 pl-5 rounded-md" to="/contact">Contact us</Link>
    </div>
    </div>
    
    <div className='helpDropdown group ml-[30px]'>
  <button className='navbarBtn helpButton mr-5 pb-[15px]  h-fit w-fit ml-[50px] p-1 rounded-lg bg-transparent bg-repeat border-none cursor-pointer overflow-hidden outline-none' ><Link className="navbarButton helpButton" href="#">{props.help}</Link> 
<FontAwesomeIcon className="fontAwesomeIcon helpFontawesomeDown  absolute left-[290px] top-2 group-hover:hidden" icon={faChevronDown}/>
<FontAwesomeIcon className="fontAwesomeIcon helpFontawesomeUp hidden group-hover:block absolute left-[290px] top-2" icon={faChevronUp}/>
    </button>
 
    <div className='helpUl w-[250px] bg-white text-lg absolute p-[10px] top-[35px] left-[180px] shadow-sm hidden group-hover:block'>
<Link className="helpItems text-black flex rounded-md p-[5px] pb-[5px] pt-[5px] pl-5  hover:bg-teal-500" to="/contact"><FontAwesomeIcon className='fontAwesomeIcon helpFontAwesomeMessage mt-2 mr-5' icon={faMessage} />  Send a message</Link>
    </div>
   </div>
  </div>
<div className="navbarRight hidden lg:flex absolute right-[180px]">
    <button className='navbarBtn loginBtn h-[fit]   ml-[50px]   bg-repeat border-none cursor-pointer overflow-hidden outline-none bg-teal-900 w-[90px] p-[5px] rounded-3xl' ><Link className="navbarButton login text-white" to="/redirectlogin" >Log in</Link></button>
    <button className='navbarBtn signupBtn  h-fit ml-[50px]   bg-repeat border-none cursor-pointer overflow-hidden outline-none bg-teal-900 w-[90px] p-[5px] rounded-3xl'><Link className="navbarButton signup text-white" to="/redirectsignup">Sign up</Link></button>

</div>

{/* for mobile view menu bar */}

<div className='navbarMenuLogo  absolute right-[20px] mr-4 lg:hidden ' onClick={handleMenu} >

<FontAwesomeIcon icon={faBars} size="xl" />
</div>
{popupMenu?
<div className='navbarRight flex flex-col absolute mt-8 w-full z-auto shadow-xl lg:hidden bg-white opacity-95 '>
<div className=' m-2 '>
   <div onClick={handleCompany} className='navbarBtn companyButton p-3 rounded-xl  hover:bg-teal-600' ><Link className="navbarButton  " href="#">{props.company} </Link>

{!companyDropdown?(
<FontAwesomeIcon className="fontAwesomeIcon ml-32 " icon={faChevronDown}/>
):
<FontAwesomeIcon className="fontAwesomeIcon  ml-32  " icon={faChevronUp}/>
}
    </div>

    {companyDropdown?
    <div className='companyUl flex flex-col m-4'>
    <Link className="companyItems mb-4 p-2  hover:bg-teal-600" onClick={handleMenuClose}  to="/about">About us</Link>
    <Link className="companyItems mb-4  p-2  hover:bg-teal-600" onClick={handleMenuClose}  to="/contact">Contact us</Link>
    </div>:""}

    </div>
    <div className='top-48 m-2  '>
  <div onClick={handleHelp} className='navbarBtn helpButton mb-4  p-3  hover:bg-teal-700' ><Link className="navbarButton helpButton" href="#">{props.help}</Link> 
  {!helpDropdown?  (
<FontAwesomeIcon className="fontAwesomeIcon ml-[165px] " icon={faChevronDown}/>
  ):
<FontAwesomeIcon className="fontAwesomeIcon ml-[165px] " icon={faChevronUp}/>
}
    </div>

    {helpDropdown?
    <div className='helpUl  flex flex-col mb-4 '>
<Link className="helpItems mb-4 p-2  hover:bg-teal-600 " onClick={handleMenuClose}  to="/contact"><FontAwesomeIcon className='ml-4 mr-2' icon={faMessage}  size="md" />  Send a message</Link>
    </div>:""}

</div>
</div>:""}





  </nav>
 </>

)   
}


Navbar.propTypes = {
  title: PropTypes.string,
  company:PropTypes.string,
  help:PropTypes.string

}
