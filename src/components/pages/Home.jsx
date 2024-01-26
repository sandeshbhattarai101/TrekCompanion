import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import PopularDestination from '../tourist/PopularDestination';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';





export default function Mybody() {

  const[userRole, setUserRole] = useState({});

  
  const navigate = useNavigate();

  if(userRole == "tourist" || userRole == "admin"){
   navigate("/homepage")
  }else if(userRole == "guide"){
    navigate("/guide")
  }else{
  navigate("/")
  }
  


  useEffect(()=>{
    const getFormData = async()=>{
      const response = await axios.get('http://localhost:3000/profile',{
        withCredentials : true
      })
      setUserRole(response.data.data.role);
      // console.log(response.data.data.role)
    }
    getFormData();
    
  },[])


return(
  <>
   <Navbar title="TrekCompanion" company="Company" help="Help" explore="Explore"/>
<div className='mainBody bg-[url("../public/images/bodywallpaper.jpg")] bg-no-repeat bg-cover bg-center h-[900px] md:h-[900px] w-screen  ' >
  <div className='mainBodyContainer flex flex-col absolute top-36 left-24 bg-white opacity-80 w-170 h-62 p-7 rounded-3xl '>
  <div className="bodyParagraph mt-1 ml-1">
        <h1 className='text-3xl font-semibold'>Guide with us and get paid.</h1>

        <h3 className=' text-xl font-medium mt-5 ml-1 '>Guide on the platform with largest network of tourists.</h3>
    </div>
    <div className="subBodyContainer flex flex-col relative mt-7 ">
      <button className='bodyBtn  bg-teal-800 border-none w-72 m-1 p-2 mb-3'><Link className=' bodyButton earnBtn  text-white  ' to={"/guide/signup"}>Earn with TrekCompanion <FontAwesomeIcon className="bodyArrow fontAwesomeIcon ml-7 pt-1"   icon={faArrowRight} /></Link></button>
      <button className='bodyBtn  bg-teal-800 border-none w-72 m-1 p-2'><Link  className=' bodyButton trekBtn  text-white' to={"/user/signup"}>Trek with TrekCompanion <FontAwesomeIcon className="bodyArrow fontAwesomeIcon ml-7 pt-1"   icon={faArrowRight} /></Link></button>
    </div> 
    </div>
 </div>

    <PopularDestination />

    {/* About Us */}



{/* <div className="relative bg-cover bg-center bg-opacity-50  w-full m-auto  p-20 text-white" style={{ backgroundImage: `url('../public/images/badimalika.jpg')` }}> */}
<div className="relative flex flex-col h-[450px] w-[98%]  bg-gradient-to-r from-teal-600  via-90% to-indigo-200  m-auto mt-10  p-20 text-gray-200 rounded-xl" >
  <div className="absolute inset-0 "></div>
  <h1 className='font-extrabold text-5xl my-1 mb-8 relative z-10'>About Us</h1>
  <p className='text-justify font-semibold text-xl leading-6 mb-3 max-w-3xl relative z-10'>TrekCompanion is a platform designed to connect tourists with independent trekking guides. We aim to provide a better trekking experience by eliminating the hassle of searching for a guide. Our system is a web-based application that uses MERN technology to provide user interface and user experience along with the database that would hold the credentials of the registered users as well as all the resources that make up the system.</p>
  
  
  <Link to={"/About"}>
  <div className="relative z-10">
   
    <button className="button bg-teal-700 border-none py-3 px-6 text-white text-center no-underline inline-block text-base my-1 mx-0.5 mt-5 cursor-pointer shadow-md rounded-3xl w-full md:w-auto hover:bg-teal-800 ">More about us</button>
   
  </div>
  </Link>
</div>


    <div className="our-team  w-3/4  pl-20 mb-10 ">
    <h2 className='font-bold text-[50px] text-teal-800 mt-20  mb-28'>Our Team</h2>
    <div className="row grid grid-cols-1 xl:grid-cols-2 gap-20 ">
               <div className="container py-0.5 px-4 flex felx-row  ">
               <img className='w-40 h-40 lg:w-52 lg:h-52  rounded-[50%] shadow-none hover:shadow-md' src='../../images/binit.jpg' alt="Team Member 1"/>
                  <div className='ml-20'>
                   <p className='text-3xl mb-5'><strong>BINIT GAUTAM</strong></p>
                   <p><strong>Email: binitgautam911@gmail.com</strong></p>
                   <button className="button  bg-teal-700 border-none py-3 px-6 text-center no-underline inline-block  text-base my-1 mx-0.5 mt-5 cursor-pointor rounded-3xl 
                   text-white    hover:bg-teal-500  hover:text-black">Contact</button>
                    </div> 
               </div>
               <p className='text-xl ml-16 w-[500px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ut architecto fuga dolorem corrupti sunt, quos delectus adipisci. Placeat, distinctio quod earum optio repudiandae facere consequuntur nemo voluptatibus ducimus non.fuga dolorem corrupti sunt, quos delectus adipisci. Placeat, distinctio quod earum optio repudiandae facere consequuntur nemo voluptatibus ducimus non.</p>

               <div className="container py-0.5 px-4  flex flex-row">
               <img className='w-40 h-40 lg:w-52 lg:h-52 rounded-[50%] shadow-none hover:shadow-md ' src='../../images/sandesh.jpg' alt="Team Member 1"/>
               <div className='ml-20 '>
                   <p  className='text-3xl mb-5'><strong>SANDESH BHATTARAI</strong></p>
                   <p><strong> Email: sandeshbhattarai6@gmail.com</strong></p>
                   <button className="button
                   text-white bg-teal-700 border-none py-3 px-6  text-center no-underline inline-block  text-base my-1 mx-0.5 mt-5 cursor-pointor rounded-3xl  hover:bg-teal-500 hover:text-black">Contact</button>
                   </div>
               </div>
               <p className='text-xl ml-16 w-[500px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ut architecto fuga dolorem corrupti sunt, quos delectus adipisci. Placeat, distinctio quod earum optio repudiandae facere consequuntur nemo voluptatibus ducimus non.fuga dolorem corrupti sunt, quos delectus adipisci. Placeat, distinctio quod earum optio repudiandae facere consequuntur nemo voluptatibus ducimus non.</p>

               <div className="container py-0.5 px-4 flex flex-row ">
               <img className='w-40 h-40 lg:w-52 lg:h-52 rounded-[50%] shadow-none hover:shadow-md' src='../../images/sandip.jpg' alt="Team Member 1"/>
               <div className='ml-20'>
                   <p className='text-3xl mb-5'><strong>SANDIP REGMI BAGALE</strong> </p>
                   <p><strong>Email: sandip.bagale34@gmail.com</strong></p>
                   <button className="button  bg-teal-700 border-none py-3 px-6 text-center no-underline 
                   text-white inline-block  text-base my-1 mx-0.5 mt-5 cursor-pointor rounded-3xl hover:bg-teal-500 hover:text-black">Contact</button>
                </div>
               </div>
                   <p className='text-xl ml-16 w-[500px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ut architecto fuga dolorem corrupti sunt, quos delectus adipisci. Placeat, distinctio quod earum optio repudiandae facere consequuntur nemo voluptatibus ducimus non.fuga dolorem corrupti sunt, quos delectus adipisci. Placeat, distinctio quod earum optio repudiandae facere consequuntur nemo voluptatibus ducimus non.</p>
    </div>
</div>

    <Footer/>

  </>
)
}