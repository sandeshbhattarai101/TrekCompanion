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

const handleclick = ()=>{
  setIsOpen(!isOpen)
}

    return(
       <>
       
<nav className="navbar">

<Link className="navbarLogo" >{props.title}</Link>
   <div className='navbarLeft'>
    <div className='dropdown'>
   <button className='btn' onClick={handleclick}><Link className="navbarButton " href="#">{props.company} </Link>
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
    

  <button className='btn' ><Link className="navbarButton " href="#">{props.help}</Link></button>  
  </div>
<div className="navbarRight">
    <button className='btn loginBtn'><Link className="navbarButton login" href="#">Log in</Link></button>
    <button className='btn signupBtn'><Link className="navbarButton signup" href="#">Sign up</Link></button>

</div>
</nav>
 </>

)   
}


Navbar.propTypes = {
  title: PropTypes.string,
  company:PropTypes.string,
  help:PropTypes.string

}
