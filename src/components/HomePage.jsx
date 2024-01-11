import React, { useEffect, useState } from 'react'
import AdminDashboard from './admin/adminDashboard';
import TouristDashboard from './tourist/TouristDashboard';
import axios from 'axios';

export default function HomePage() {

    const[userRole, setUserRole] = useState({});

    // FOR ROLE BASED ROUTING BETWEEN TOURIST AND ADMIN
           
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
    <div>
       {userRole=="admin"?<AdminDashboard/>:(userRole=="tourist"?<TouristDashboard/>: <div className=' text-3xl text-gray-500 font-bold flex justify-center mt-40 '>404 Page not found</div> )}
    </div>
    
    </>
  )
}
