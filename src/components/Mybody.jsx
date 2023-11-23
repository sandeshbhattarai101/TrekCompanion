import { useState} from 'react'
import './mybody.css';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Mybody(props) {

return(
  <>
<div className='mainBody'>
  <div className='mainBodyContainer'>
  <p className="bodyParagraph">
        <h1>Guide with us and get paid.</h1>

        <h3>Guide on the platform with largest network of tourists.</h3>
    </p>
    <div className="subBodyContainer">
      <button className='bodyBtn'><Link className=' bodyButton earnBtn ' >Earn with TrekCompanion <FontAwesomeIcon className="bodyArrow fontAwesomeIcon"   icon={faArrowRight} /></Link></button>
      <button className='bodyBtn'><Link  className=' bodyButton trekBtn ' >Trek with TrekCompanion <FontAwesomeIcon className="bodyArrow fontAwesomeIcon"   icon={faArrowRight} /></Link></button>
    </div> 
    </div>


</div>
    
  </>
)
}