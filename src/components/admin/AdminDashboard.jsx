import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import axios from 'axios'

export default function AdminDashboard() {
   
    const [destinations, setDestinations] = useState([])
    const fetchDestinations = async ()=>{
        
        const response = await axios.get('http://localhost:3000/destinations')
        if(response.status ==200){
            setDestinations(response.data.data)  
        }else{
            alert("something went wrong")
        }
        
    }
 
        useEffect(()=>{
            fetchDestinations()
        },[])
  
  return (
    <div className='adminDashboard h-fit mb-20 w-screen '>
<AdminNavbar/>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg top-10">
    <div className='tableheading flex flex-row justify-evenly font-semibold ml-8'>
        <h5 className='mr-12'>Image</h5>
        <h5 className='mr-12'>Name</h5>
        <h5 className='mr-12'>Description</h5>
        <h5 className='mr-12'>Cost</h5>
        <h5 className='mr-12'>Completion Time</h5>
        <h5 className='mr-12'>Trip Grade</h5>
        <h5 className='mr-12'>Max Altitude</h5>
        <h5 className='mr-12'>Status</h5>
        <h5 className='mr-12'>Action</h5>
    </div>
        {destinations.map((destination)=>{
            
            return(
                
                <div key={destination._id} className="card-body w-full ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img className='cardImage object-cover h-[60px] w-[60px] rounded-xl shadow-md' src={destination.destinationImage}  alt="image" />

                </th>
                <td className="px-6 py-4">
                {destination.destinationName}
                </td>
                <td className="px-6 py-4">
                    {destination.destinationDescription}
                </td>
                <td className="px-6 py-4">
                {destination.destinationCost}
                </td>
                <td className="px-6 py-4">
                {destination.completionTime}
                </td>
                <td className="px-6 py-4">
                {destination.tripGrade}
                </td>
                <td className="px-6 py-4">
                {destination.maxAltitude}
                </td>
                <td className="px-6 py-4">
                {destination.destinationStatus}
                </td>
                <td className="px-6 py-4">
                    <Link to={`/destinations/${destination._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                </td>
                <td className="px-6 py-4">
                    <Link to={`/destinations/delete/${destination._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</Link>
                </td>
            </tr>
            
           
        </tbody>
    </table>
    </div>
      )
    }) }
</div>
    <button className='h-10 w-40 m-2 ml-6 relative top-12  bg-slate-500 text-white font-semibold'><Link to={'/destinations'}>Add Destination</Link></button>

        </div>
  )
}