import { useState} from 'react'
import './navbar.css';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {faBed} from '@fortawesome/free-solid-svg-icons'
import {faPlane} from '@fortawesome/free-solid-svg-icons'
import {faUtensils} from '@fortawesome/free-solid-svg-icons'
import {faFutbol} from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
const[isOpen, setIsOpen] = useState(false)
const[popup, setPopup] = useState(false)
const[text, setText]= useState("");
const[data, setData]= useState("");

const handleClick = ()=>{
  setIsOpen(!isOpen)

}
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
       
<nav className="navbar">

<Link className="navbarLogo" >{props.title}</Link>
   <div className='navbarLeft'>
    <div className='dropdown'>
   <button className='navbarBtn' onClick={handleClick}><Link className="navbarButton " href="#">{props.company} </Link>
    {!isOpen ? (
       <FontAwesomeIcon className="fontAwesomeIcon fontawesomeDown" icon={faChevronDown}/>
    ): (<FontAwesomeIcon className="fontAwesomeIcon fontawesomeUp" icon={faChevronUp}/>)}
    </button>
    {isOpen && (
    <div className='companyUl'>
    <ul>
    <li className='companyLi'><Link className="companyItems" href="#">About us</Link></li>
    <li className='companyLi'><Link className="companyItems" href="#">Contact us</Link></li>
    </ul>
    </div>
    )} 
    </div>
    

  <button className='navbarBtn' ><Link className="navbarButton " href="#">{props.help}</Link></button>  
  </div>
<div className="navbarRight">
    <button className='navbarBtn loginBtn' onClick={handleLogin}><Link className="navbarButton login" to="/" >Log in</Link></button>
    <button className='navbarBtn signupBtn' onClick={handleSignup}><Link className="navbarButton signup" to="/">Sign up</Link></button>

</div>
    {/* popup login-signup page */}
    {popup?
<div className="bodyPopup">
   <FontAwesomeIcon className="closeButton" onClick={handleClose} icon={faCircleXmark} />
  <Link className="popButton popEarn" to={data} onClick={handleClose} >{text} to guide & earn <FontAwesomeIcon className= "arrow2"  icon={faArrowRight} /></Link>
  <Link className="popButton popTrek" to={data} onClick={handleClose} >{text} to trek with us <FontAwesomeIcon className= "arrow2"  icon={faArrowRight} /></Link>
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
