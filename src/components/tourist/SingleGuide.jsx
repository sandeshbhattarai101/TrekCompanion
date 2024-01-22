import { useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function singleGuide() {
  
  const navigate = useNavigate();
  const params = useParams()
  const { isOpen, onOpen, onClose } = useDisclosure()
    const[guide, setGuide] = useState([]);
    const[review, setReview] = useState([]);
    const[avgRating, setAvgRating] = useState([])
    const [entries, setEntries] = useState({ rating: 3 });

    

    const handleAvgRating =() => {
      if (review.length === 0) {
        return 0; // You can choose to return NaN or throw an error as well
      }

      const sumOfRatings = review.reduce((accumulator, currentObject) => {
        // Assuming each object has a 'rating' property
        return accumulator + (currentObject.rating || 0);
      }, 0);
    
      // Calculate the average
      const average = (sumOfRatings / review.length).toFixed(1);
    
      setAvgRating(average);

    };

    //console.log(avgRating);


    const handleRatingChange = (e) => {
      const newObj = { ...entries, [e.target.name]: e.target.value };
      setEntries(newObj);
    };
    
   // console.log(entries)

  const handleSubmit = async (e) => {
    // Handle form submission logic here

    e.preventDefault();
    
    const response = await axios.post(`http://localhost:3000/reviews/${params.id}`,entries,{
         withCredentials : true,
         headers:{
          "Content-Type": "application/json", 
         }
         
        })
        navigate("/homepage")
       // console.log(response)
      }

//console.log(review)
      
useEffect(()=>{
  
  const fetchGuide = async ()=> {
  
    const response = await axios.get(`http://localhost:3000/singleguide/${params.id}`,{
      withCredentials : true
    })
    setGuide(response.data.data.guide)
    setReview(response.data.data.review)
  }

        fetchGuide();

    },[])

    
     useEffect(()=>{

       handleAvgRating();


    })


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
              <span className="text-gray-600">Rate Per Hour:</span>
              <span className="text-gray-800">{guide.rate}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Review:</span>
              <span className="text-gray-800">{avgRating}/5</span>
            </div>

         <div className="px-6 py-4 flex flex-row gap-10">
          <button onClick={onOpen} className='bg-teal-800  hover:bg-teal-700 font-semibold text-white w-28'>      
              Rate Guide
            </button>   
            {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center ">
          <div className="bg-white p-8 w-96 rounded-2xl">
            <div className="text-xl font-sans font-semibold mb-10">
              <h2 className="text-xl font-bold mb-4">Rate Your Experience With Me</h2>
              <form onSubmit={handleSubmit} method="post" >
                <div className="mb-4">
                  <label htmlFor="rating" className="block text-sm font-semibold text-gray-700">
                    Rate Out of  5
                  </label>
                  <input
                    type="number"
                    id="rating"
                    name="rating"
                    value={entries.rating}
                    onChange={handleRatingChange}
                    className="mt-1 p-2 border rounded-md w-full"
                    maxLength={1}
                    min={1}
                    max={5}
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"                  
                    className="bg-green-700 hover:bg-green-800 text-white px-2 py-1 rounded-xl mr-2"

                  >
                    OK
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="bg-red-700 hover:bg-red-600 text-white px-2 py-1 rounded-xl "
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}          <Link to={`/checkout/${guide._id}`}>
            <button className="bg-teal-800 hover:bg-teal-700 text-white font-semi-bold py-2 px-4 rounded-md w-full">
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
