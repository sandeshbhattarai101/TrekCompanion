import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import axios from 'axios'

export default function GuideLogin() {
   const navigate = useNavigate()

   const[userRole, setUserRole] = useState({});

   const loginUser = async (e)=>{
       e.preventDefault();
       const formData = new FormData(e.currentTarget)
       const data = Object.fromEntries(formData)

        const response = await axios.post("http://localhost:3000/login", data,{
            withCredentials : true
        })

     if(response.status == 200){
         alert( response.data.message)

    if(userRole == "guide"){
      return  navigate("/guide")
    }else{
        return <div className=' text-3xl text-gray-500 font-bold flex justify-center mt-40 '>404 Page not found</div>
    }
        }
        else if(response.status == 404)
        {
            alert( response.data.message)
        }
    }

 // FOR ROLE BASED ROUTING
    
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

return (
   <>
    <Navbar title="TrekCompanion" company="Company" help="Help" explore="Explore"/>
   <div className="w-screen h-screen">
       <div className="w-[400px] mx-auto p-5 bg-white shadow-md rounded-md mt-5">
       <h2 className="text-center mb-5">Login Form</h2>
       <form onSubmit={loginUser} method="post" >
           <div className="mb-5">
               <label className="block">Email:</label>
               <input type="email" id="email" name="email" required className="w-full p-2 border border-gray-300 rounded-md"/>
           </div>
           <div className="mb-5">
               <label className="block">Password:</label>
               <input type="password" id="password" name="password" required className="w-full p-2 border border-gray-300 rounded-md"/>
           </div>
           <div className="mb-5">
               <input type="submit" value="login" className="w-full p-2 bg-teal-700 text-white cursor-pointer hover:bg-teal-800 rounded-lg"/>
           </div>
       </form>
       <div className="flex flex-col justify-center items-center">
       <Link to="/guide/signup"> <button className="text-white bg-slate-500 p-2 mb-3 rounded-md hover:bg-slate-600" type="submit" >Create new account</button> </Link> 
      <Link to="/forgotPassword"  className='text-slate-500 hover:text-slate-700'>Forgot Password ? </Link> 
       </div>
      </div>
   </div>
   </>
)}
