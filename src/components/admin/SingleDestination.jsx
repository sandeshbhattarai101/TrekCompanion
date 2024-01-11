import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useNavigate, Link} from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import { useParams } from 'react-router-dom'


export default function SingleDestination(){
  const params = useParams()
  // console.log(params)
  const [entries, setEntries] = useState({});
  
  const handleChange=(e)=>{
    const newObj = {...entries,[e.target.name]:e.target.value}
    setEntries(newObj)
  }
    const navigate = useNavigate()
    const editDestination = async (e)=> {
        e.preventDefault();
       const  formData = new FormData(e.currentTarget) 
       const  data = Object.fromEntries(formData)
        const response = await axios.patch(`http://localhost:3000/destinations/${params.id}`, data,{
          headers:{
            "Content-Type" : "multipart/form-data"
          },
          withCredentials : true
        })
       // console.log(response)

    if(response.status== 400){
        alert("Please enter all the details")
    }else if(response.status == 200){
        alert("Destination edited Successfully")
        navigate("/admin")
    }

    
    
    
  }
    useEffect(()=>{
    const getFormData = async ()=>{
      // console.log("hello")
      const previousData = await axios.get(`http://localhost:3000/destinations/${params.id}`)
     //console.log(previousData.data.data[0])
     
      setEntries(previousData.data.data)
    
    }
    getFormData();
    
    },[])
    return (
    <>
    <AdminNavbar/>

    <div className="mainDestination flex justify-center m-16">
    <form onSubmit={editDestination} className="w-full max-w-sm" method='post' encType='multipart/form-data'>
     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destinationName">
         Destination Name
       </label>
       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="destinationName" name='destinationName' type="text" placeholder="Destination Name" onChange={handleChange} value={entries.destinationName}/>
     </div>
     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destinationImage">
         Destination Image
       </label>
       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="destinationImage" name='destinationImage' type="file" onChange={handleChange} />
     </div>
     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destinationDescription">
         Destination Description
       </label>
       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="destinationDescription" name='destinationDescription' type="text" placeholder="Destination Description" onChange={handleChange} value={entries.destinationDescription}/>
     </div>
     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destinationCost">
         Destination Cost
       </label>
       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="destinationCost" name='destinationCost' type="text" placeholder="Destination Cost" onChange={handleChange} value={entries.destinationCost}/>
     </div>
     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="completionTime">
         Completion Time
       </label>
       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="completionTime" name='completionTime' type="text" placeholder="Completion Time" onChange={handleChange} value={entries.completionTime}/>
     </div>
     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tripGrade">
         Trip Grade
       </label>
       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tripGrade" name='tripGrade' type="text" placeholder="Trip Grade" onChange={handleChange} value={entries.tripGrade} />
     </div>
     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="maxAltitude">
         Max Altitude
       </label>
       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="maxAltitude" name='maxAltitude' type="text" placeholder="Max Altitude" onChange={handleChange} value={entries.maxAltitude} />
     </div>
     <div className="mb-4">
       <h4><strong>Destination Status </strong> </h4>        
       <label className='mr-3' htmlFor="published">Publish</label>
       <input className='mr-8' id='published'  type="radio" name="destinationStatus" value="published" placeholder="Destination Status"  />
       <label className='mr-3' htmlFor="unpublished">Unpublish</label>
       <input  type="radio" id='unpublished' name="destinationStatus" value="unpublished" placeholder="Destination Status" />
     
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
