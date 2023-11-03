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
<Navbar title="TrekCompanion" company="Company" help="Help" explore="Explore"/>

</div>
  </>
)
}