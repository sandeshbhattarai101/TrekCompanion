import { useState} from 'react'
import './mybody.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Mybody() {

return(
  <>
<div className='mainBody'>
  <div className='mainBodyContainer'>
  <div className="bodyParagraph">
        <h1>Guide with us and get paid.</h1>

        <h3>Guide on the platform with largest network of tourists.</h3>
    </div>
    <div className="subBodyContainer">
      <button className='bodyBtn'><Link className=' bodyButton earnBtn ' to={"/signupForm"}>Earn with TrekCompanion <FontAwesomeIcon className="bodyArrow fontAwesomeIcon"   icon={faArrowRight} /></Link></button>
      <button className='bodyBtn'><Link  className=' bodyButton trekBtn ' to={"/signupForm"}>Trek with TrekCompanion <FontAwesomeIcon className="bodyArrow fontAwesomeIcon"   icon={faArrowRight} /></Link></button>
    </div> 
    </div>


</div>
    
  </>
)
}