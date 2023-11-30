import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {

  const navigate = useNavigate()

  const forgotPassword = async (e)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const response = await axios.post("http://localhost:3000/forgotPassword", data);

    if(response.status == 200){
      alert( response.data.message)
      navigate("/verifyOtp")
     }
     else if(response.status == 400)
     {
         alert( response.data.message)
     }


  }

  return (
    <>
    <div className="flex items-center justify-center h-screen">
    <div className="w-100 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-center py-5 px-4 bg-slate-500 border-b  border-gray-100 rounded-xl" >
        <h3 className="text-2xl font-semibold text-white">Please provide your email address</h3>
      </div>
      <div className="p-4">
        <form onSubmit={forgotPassword} method="POST">
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-bold mb-2 " for="otp">
              Email:
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id='email' type="email" name='email' placeholder="Enter your email "/>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-slate-500 hover:bg-slate-700 text-white  font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="submit">
              Send Otp
            </button>
            
          </div>
        </form>
      </div>
    </div>
   </div>
    </>
  )
}
