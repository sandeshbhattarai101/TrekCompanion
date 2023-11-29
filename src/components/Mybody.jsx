import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


export default function Mybody() {

return(
  <>
<div className='mainBody  h-screen w-screen'>
  <div className='mainBodyContainer flex flex-col absolute top-36 left-24 bg-slate-300 w-170 h-62 p-7 rounded-3xl '>
  <div className="bodyParagraph mt-1 ml-1">
        <h1 className='text-3xl font-semibold'>Guide with us and get paid.</h1>

        <h3 className=' text-xl font-medium mt-5 ml-1 '>Guide on the platform with largest network of tourists.</h3>
    </div>
    <div className="subBodyContainer flex flex-col relative mt-7 ">
      <button className='bodyBtn  bg-slate-600 border-none w-72 m-1 p-2 mb-3'><Link className=' bodyButton earnBtn  text-white  ' to={"/signupForm"}>Earn with TrekCompanion <FontAwesomeIcon className="bodyArrow fontAwesomeIcon ml-7 pt-1"   icon={faArrowRight} /></Link></button>
      <button className='bodyBtn  bg-slate-600 border-none w-72 m-1 p-2'><Link  className=' bodyButton trekBtn  text-white' to={"/signupForm"}>Trek with TrekCompanion <FontAwesomeIcon className="bodyArrow fontAwesomeIcon ml-7 pt-1"   icon={faArrowRight} /></Link></button>
    </div> 
    </div>

</div>
    
  </>
)
}