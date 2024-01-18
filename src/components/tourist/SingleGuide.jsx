import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function singleGuide() {

    const[guide, setGuide] = useState([]);

    const params = useParams()
    
    const fetchGuide = async ()=> {

        const response = await axios.get(`http://localhost:3000/singleguide/${params.id}`,{
          withCredentials : true
        })
        setGuide(response.data.data)
       // console.log(response)
    }


     useEffect(()=>{

        fetchGuide();

    },[])


  return (
    <>
      {guide.length != 0 && <div className="flex justify-center items-center h-screen bg-teal-700">
      <div className="max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center"> Guide Profile</div>
          <div className="border-t border-gray-200"></div>
          <div className="py-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Username:</span>
              <span className="text-gray-800">{guide.username}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Email:</span>
              <span className="text-gray-800">{guide.email}</span>
            </div>
        
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Rate:</span>
              <span className="text-gray-800">{guide.rate}</span>
            </div>

         <div className="px-6 py-4">
          <Link to={`/orders/${guide._id}`}>
            <button className="bg-teal-800 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded w-full">
              
              Select Guide
            </button>
            </Link>
          </div>


            
          </div>
        </div>
      </div>
    </div> }

    </>
  )
}
