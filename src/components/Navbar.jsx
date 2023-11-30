import { useState} from 'react'
import './navbar.css';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import {faMessage} from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {

const[popup, setPopup] = useState(false)
const[text, setText]= useState("");
const[data, setData]= useState("");

const handleLogin = ()=>{
  setPopup(!popup);
  setText("Log in");
  setData("/loginForm");
}
const handleSignup = ()=>{
  setPopup(!popup);
  setText("Sign up");
  setData("/signupForm");
}
const handleClose = ()=>{
  setPopup(false);
}

    return(
       <>
       
<nav className="navbar  flex top-0 w-screen h-[45px] z-10 bg-slate-300 sticky pt-[10px] pl-[8%] shadow-md ">

<Link className="navbarLogo text-black text-lg" to="/">{props.title}</Link>
   <div className='navbarLeft flex absolute left-[280px] '>
    <div className='companyDropdown  group'>
   <button className='navbarBtn companyButton  h-fit w-fit ml-[50px] p-1 rounded-lg bg-transparent bg-repeat border-none cursor-pointer overflow-hidden outline-none   mr-5 pb-4' ><Link className="navbarButton  " href="#">{props.company} </Link>
<FontAwesomeIcon className="fontAwesomeIcon companyFontawesomeDown  absolute left-[150px] top-2 inline group-hover:hidden" icon={faChevronDown}/>
<FontAwesomeIcon className="fontAwesomeIcon companyFontawesomeUp   hidden group-hover:block hover:block absolute left-[150px] top-2 " icon={faChevronUp}/>
    </button>
  
    <div className='companyUl w-[250px] hidden group-hover:block rounded-sm bg-slate-200  text-lg absolute p-[10px] top-[35px] left-5 shadow'>
    <Link className="companyItems text-black hover:bg-slate-300 flex p-1 pb-1 pt-1 pl-5 rounded-md" to="/about">About us</Link>
    <Link className="companyItems text-black hover:bg-slate-300 flex p-1 pb-1 pt-1 pl-5 rounded-md" to="/contact">Contact us</Link>
    </div>
    </div>
    
    <div className='helpDropdown group ml-[30px]'>
  <button className='navbarBtn helpButton mr-5 pb-[15px]  h-fit w-fit ml-[50px] p-1 rounded-lg bg-transparent bg-repeat border-none cursor-pointer overflow-hidden outline-none' ><Link className="navbarButton helpButton" href="#">{props.help}</Link> 
<FontAwesomeIcon className="fontAwesomeIcon helpFontawesomeDown  absolute left-[290px] top-2 group-hover:hidden" icon={faChevronDown}/>
<FontAwesomeIcon className="fontAwesomeIcon helpFontawesomeUp hidden group-hover:block absolute left-[290px] top-2" icon={faChevronUp}/>
    </button>
 
    <div className='helpUl w-[250px] bg-slate-200 text-lg absolute p-[10px] top-[35px] left-[180px] shadow-sm hidden group-hover:block'>
<Link className="helpItems text-black flex rounded-md p-[5px] pb-[5px] pt-[5px] pl-5  hover:bg-slate-300" to="/contact"><FontAwesomeIcon className='fontAwesomeIcon helpFontAwesomeMessage mt-2 mr-5' icon={faMessage} />  Send a message</Link>
    </div>
   </div>
  </div>
<div className="navbarRight flex absolute right-[180px]">
    <button className='navbarBtn loginBtn  h-fit  ml-[50px]   bg-repeat border-none cursor-pointer overflow-hidden outline-none bg-slate-600 w-[90px] p-[5px] rounded-3xl' onClick={handleLogin}><Link className="navbarButton login text-white" to="#" >Log in</Link></button>
    <button className='navbarBtn signupBtn  h-fit ml-[50px]   bg-repeat border-none cursor-pointer overflow-hidden outline-none bg-slate-600 w-[90px] p-[5px] rounded-3xl' onClick={handleSignup}><Link className="navbarButton signup text-white" to="#">Sign up</Link></button>

</div>
    {/* popup login-signup page */}
    {popup?
<div className="bodyPopup  absolute left-0 top-[45px] bg-white h-screen w-full flex justify-around items-center flex-row z-10">
   <FontAwesomeIcon className="closeButton  h-7 absolute top-[5%] left-[85%]" onClick={handleClose} icon={faCircleXmark} />
  <Link className="popButton popEarn text-3xl font-bold border-b-2 border-black pb-10" to={data} onClick={handleClose} >{text} to guide & earn <FontAwesomeIcon className= "arrow2 pl-[50px]"  icon={faArrowRight} /></Link>
  <Link className="popButton popTrek text-3xl font-bold border-b-2 border-black pb-10" to={data} onClick={handleClose} >{text} to trek with us <FontAwesomeIcon className= "arrow2 pl-[50px]"  icon={faArrowRight} /></Link>
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
