
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import axios from 'axios'

export default function GuideSignup() {
   const navigate = useNavigate()

    const createUser = async (e)=>{
       e.preventDefault() //page refresh huna bata bachako natra data lost huna sakxa
      
      //FormData le tyo form ko input field ko name use garera data linxa
      const formData = new FormData(e.currentTarget) //FormData le form ko data have ARRAY ko form ma linxa 
      const data = Object.fromEntries(formData) //object.fromEntries le tyo ARRAY lai OBJECT(KEY:VALUE) ma change garxa
  
  //axios.post le arko argument object ma linxa tesaile convert gareko mathiko data lai object ma
   
      //send above states data to api
      const response = await axios.post("http://localhost:3000/register", data) 
     if (response.status == 201){
      alert(response.data.message)
      navigate("/")
    }else{
      alert("Something went wrong")
     }
  }


   return(
     <>
      <Navbar title="TrekCompanion" company="Company" help="Help" explore="Explore"/>
     <div className="w-screen h-screen">
     <div className="max-w-[400px] mx-auto p-5 bg-white shadow-md rounded-md mt-5">
           <h2 className="text-center mb-5">Registration Form</h2>
           <form onSubmit={createUser} method='post'>
               <div className="mb-5">
                  <label className="block text-black font-bold">Email:</label>
                  <input type="email" id="email" name="email" required className="w-full p-2 border border-gray-300 rounded-md"/>
               </div>
               <div className="mb-5">
                  <label className="block text-black font-bold">Username:</label>
                  <input type="text" id="username" name="username" required className="w-full p-2 border border-gray-300 rounded-md"/>
               </div>
               <div className="mb-5">
                  <label className="block text-black font-bold">Password:</label>
                  <input type="password" id="password" name="password" required className="w-full p-2 border border-gray-300 rounded-md"/>
               </div>
               <div className="mb-5">
                  <label className="block text-black font-bold">Rate Per Hour:</label>
                  <input type="Number" id="rate" name="rate" required className="w-full p-2 border border-gray-300 rounded-md"/>
               </div>
               <div className="mb-5">
                  <input type="submit" value="register" className="w-full p-2 bg-teal-700 text-white rounded-md cursor-pointer hover:bg-teal-800"/>
               </div>
                <input type="hidden" value="guide" name='role'/>
            
           </form>
           <Link to="/guide/login">Already have an account?</Link>   
       </div>
       </div> 
   </>
   )
}

