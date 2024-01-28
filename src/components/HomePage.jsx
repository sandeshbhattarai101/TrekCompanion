import React, { useEffect, useState } from 'react'
import AdminDashboard from './admin/adminDashboard';
import TouristDashboard from './tourist/TouristDashboard';
import axios from 'axios';
import GuideDashboard from './guide/guideDashboard';

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
       {userRole=="admin"?<AdminDashboard/>:(userRole=="tourist"?<TouristDashboard/>:(userRole=="guide"?<GuideDashboard/>: null)) }
    </div>
    
    </>
  )
}
