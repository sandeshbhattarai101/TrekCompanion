import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Destination() {
    const navigate = useNavigate()
    const createDestination = async (e)=> {
        e.preventDefault()
       const  formData = new FormData(e.currentTarget) 
       const  data = Object.fromEntries(formData)
        const response = await axios.post("http://localhost:3000/destination", data)
    if(response.status== 400){
        alert("Please enter all the details")
    }else if(response.status == 200){
        alert("Destination Created Successfully")
        navigate("/destination")
    }

        

    }

  return (
    <>
    <div className="mainDestination flex justify-center m-16">
    <form onSubmit={createDestination} className="w-full max-w-sm" method='post'>
     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destinationName">
         Destination Name
       </label>
       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="destinationName" name='destinationName' type="text" placeholder="Destination Name" />
     </div>
     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destinationDescription">
         Destination Description
       </label>
       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="destinationDescription" name='destinationDescription' type="text" placeholder="Destination Description" />
     </div>
     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destinationCost">
         Destination Cost
       </label>
       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="destinationCost" name='destinationCost' type="text" placeholder="Destination Cost" />
     </div>
     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="completionTime">
         Completion Time
       </label>
       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="completionTime" name='completionTime' type="text" placeholder="Completion Time" />
     </div>
     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tripGrade">
         Trip Grade
       </label>
       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tripGrade" name='tripGrade' type="text" placeholder="Trip Grade" />
     </div>
     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="maxAltitude">
         Max Altitude
       </label>
       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="maxAltitude" name='maxAltitude' type="text" placeholder="Max Altitude" />
     </div>
     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destinationStatus">
         Destination Status
       </label>
       <label className='mr-3' htmlFor="published">Publish</label>
       <input className='mr-8' id="destinationStatus" type="radio" name="destinationStatus" value="published" placeholder="Destination Status"/>
       <label className='mr-3' htmlFor="unpublished">Unpublish</label>
       <input  id="destinationStatus" type="radio" name="destinationStatus" value="unpublished" placeholder="Destination Status"/>
     
     </div>
     <div className="flex items-center justify-between">
       <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
         Submit
       </button>
     </div>  
   </form>
   </div>

    </>
  )
}
