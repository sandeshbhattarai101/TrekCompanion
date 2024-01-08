import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useNavigate, Link} from 'react-router-dom'



export default function UpdateProfile(){
 
  const [entries, setEntries] = useState({});
  
  const handleChange=(e)=>{
    const newObj = {...entries,[e.target.name]:e.target.value}
    setEntries(newObj)
  }
    const navigate = useNavigate()
    const editProfile = async (e)=> {
        e.preventDefault();
       const  formData = new FormData(e.currentTarget) 
       const  data = Object.fromEntries(formData)
        const response = await axios.patch("http://localhost:3000/profile", data,{
          headers:{
            "Content-Type" : "multipart/form-data"
          },
          withCredentials : true
        })
        console.log(data)
       

    if(response.status== 400){
        alert("Please enter all the details")
    }else if(response.status == 200){
        alert("Profile edited Successfully")
        navigate("/tourist")
    }

    
    
    
  }
    useEffect(()=>{
    const getFormData = async ()=>{
      // console.log("hello")
      const previousData = await axios.get(`http://localhost:3000/profile`)
     
      console.log(previousData)
     
      setEntries(previousData.data.data)
    
    }
     getFormData();
    
    },[])
    return (
    <>
    

    <div className="mainDestination flex justify-center bg-white p-16 m-16 min-w-screen rounded-3xl w-2/4 m-auto mt-4 shadow-lg ">
    <form onSubmit={editProfile} className="w-full max-w-sm" method='post' encType='multipart/form-data'>
      <div className='block text-gray-800 text-lg font-bold mb-8 text-center'>Update your details</div>
     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
         User Email
       </label>
       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name='email' type="email" placeholder="User Email" onChange={handleChange} value={entries.email}/>
     </div>
   
     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userName">
         UserName
       </label>
       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="userName" name='userName' type="text" placeholder="User Name" onChange={handleChange} value={entries.userName}/>
     </div>
    
     <div className="flex items-center justify-between">
       <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"  >
        Submit
       </button>
     </div>  
   </form>
   </div>

    </>
  )
}
