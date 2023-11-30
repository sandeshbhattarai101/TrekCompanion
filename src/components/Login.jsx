// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import './login.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'


// export default function Login() {
//     const navigate = useNavigate()

//     const loginUser = async (e)=>{
//         e.preventDefault();
//         const formData = new FormData(e.currentTarget)
//         const data = Object.fromEntries(formData)

//         const response = await axios.post("http://localhost:2000/login", data)

//      console.log(response.status)
//      if(response.status == 200){
//          alert( response.data.message)
//          navigate("/")
//         }
//         else if(response.status == 404)
//         {
//             alert( response.data.message)
//         }
//     }

// return (

//     <>

//     <div className="loginPage">
//         <div className='loginContainer'>
//         <h2>Login Form</h2>
//         <form onSubmit={loginUser} method="post" >
//             <div className="form-group">
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" id="email" name="email" required/>
//             </div>
          
//             <div className="form-group">
//                 <label htmlFor="password">Password:</label>
//                 <input type="password" id="password" name="password" required/>
//             </div>
//             <div className="form-group">
//                 <input type="submit" value="login"/>
//             </div>
//         </form>

//         <div className='loginButton'>
//         <Link to="/signupForm"> <button className="createNewAcc" type="submit" >Create new account</button> </Link> 
//        <Link to="/forgotPassword">Forgot Password ? </Link> 
//         </div>
      
//     </div>
// </div>
// </>
// )}

import React, { useEffect } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
   const navigate = useNavigate()

   const loginUser = async (e)=>{
       e.preventDefault();
       const formData = new FormData(e.currentTarget)
       const data = Object.fromEntries(formData)

        const response = await axios.post("http://localhost:3000/login", data)

     console.log(response.status)
     if(response.status == 200){
         alert( response.data.message)
         navigate("/")
        }
        else if(response.status == 404)
        {
            alert( response.data.message)
        }
    }

return (
   <>
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
               <input type="submit" value="login" className="w-full p-2 bg-blue-500 text-white cursor-pointer hover:bg-blue-700"/>
           </div>
       </form>
       <div className="flex flex-col justify-center items-center">
       <Link to="/signupForm"> <button className="text-white bg-green-500 p-2 rounded-md hover:bg-green-600" type="submit" >Create new account</button> </Link> 
      <Link to="/forgotPassword">Forgot Password ? </Link> 
       </div>
      </div>
   </div>
   </>
)}
