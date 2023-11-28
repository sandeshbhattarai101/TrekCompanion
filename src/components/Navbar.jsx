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
       
<nav className="navbar" >

<Link className="navbarLogo" to="/">{props.title}</Link>
   <div className='navbarLeft'>
    <div className='companyDropdown'>
   <button className='navbarBtn companyButton' ><Link className="navbarButton  " href="#">{props.company} </Link>
<FontAwesomeIcon className="fontAwesomeIcon companyFontawesomeDown" icon={faChevronDown}/>
<FontAwesomeIcon className="fontAwesomeIcon companyFontawesomeUp" icon={faChevronUp}/>
    </button>
  
    <div className='companyUl'>
    <Link className="companyItems" to="/about">About us</Link>
    <Link className="companyItems" to="/contact">Contact us</Link>
    </div>
    </div>
    
    <div className='helpDropdown'>
  <button className='navbarBtn helpButton' ><Link className="navbarButton helpButton" href="#">{props.help}</Link> 
<FontAwesomeIcon className="fontAwesomeIcon helpFontawesomeDown" icon={faChevronDown}/>
<FontAwesomeIcon className="fontAwesomeIcon helpFontawesomeUp" icon={faChevronUp}/>
    </button>
 
    <div className='helpUl'>
<Link className="helpItems" to="/contact"><FontAwesomeIcon className='fontAwesomeIcon helpFontAwesomeMessage' icon={faMessage} />  Send a message</Link>
    </div>
   </div>
  </div>
<div className="navbarRight">
    <button className='navbarBtn loginBtn' onClick={handleLogin}><Link className="navbarButton login" to="#" >Log in</Link></button>
    <button className='navbarBtn signupBtn' onClick={handleSignup}><Link className="navbarButton signup" to="#">Sign up</Link></button>

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
