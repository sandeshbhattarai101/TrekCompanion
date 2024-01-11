import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {

  const navigate = useNavigate()

  const resetPassword = async (e)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const response = await axios.post("http://localhost:3000/resetPassword", data);

    if(response.status == 200){
      alert( response.data.message)
      navigate("/loginForm")
     }
     else if(response.status == 400)
     {
         alert( response.data.message)
     }

    }
    

  return (
    <div className="flex items-center justify-center h-screen">
     <div className="w-96 bg-white shadow-lg rounded-lg">
       <div className="flex items-center justify-center py-5 px-4 bg-slate-500 border-b border-gray-100 rounded-xl">
         <h3 className="text-2xl font-semibold text-white">Reset Password</h3>
       </div>
       <div className="p-4">
         <form onSubmit={resetPassword} method="POST">
           <div className="mb-4">
             <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
               Email
             </label>
             <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" name='email' id="email" type="email" placeholder="Enter your email"/>
             <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="password">
               New Password
             </label>
             <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" name='newPassword' id="newPassword" type="password" />
             <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="password">
               Confirm Password
             </label>
             <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" name='confirmPassword' id="confirmPassword" type="password" />
           </div>
           <div className="flex items-center justify-between">
             <button className="bg-slate-500 hover:bg-slate-700 rounded-lg text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline" type="submit">
               Reset Password
             </button>
           </div>
         </form>
       </div>
     </div>
   </div>
  )
}
