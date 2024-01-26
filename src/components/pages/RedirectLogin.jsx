import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


export default function RedirectLogin() {
  return (
    <>
    <Navbar title="TrekCompanion" company="Company" help="Help" explore="Explore"/>
            <div className="bodyPopup  absolute left-0  bg-white h-screen w-full flex justify-around items-center flex-row z-10 ">
              <Link  className="popButton popEarn text-3xl font-bold border-b-2 border-black pb-10" to={"/guide/login"}  >Login to guide & earn <FontAwesomeIcon className= "arrow2 pl-[50px]"  icon={faArrowRight} /></Link>
              <Link className="popButton popTrek text-3xl font-bold border-b-2 border-black pb-10" to={"/user/login"}  >Login to trek with us <FontAwesomeIcon className= "arrow2 pl-[50px]"  icon={faArrowRight} /></Link>
              </div>
    </>
  )
}
