import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const OneDestination = () => {
  const params = useParams();
  const [destination, setDestination] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Recommendation 
  const [inputValue, setInputValue] = useState('');
  const [recommendation, setRecommendation] = useState([]);
  

    const handleRecommendation = async () => {
      try {
            const response = await axios.get(`http://localhost:3000/recommend?destination=${inputValue}`,{
              withCredentials: true,
            });
           console.log(response.data);
           setRecommendation(response.data.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


  const fetchDestination = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:3000/destinations/${params.id}`, {
        withCredentials: true,
      });

      setDestination(response.data.data[0]);
      setInputValue(response.data.data[0].destinationName)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Something went wrong. Please try again.");
    }
  };
  
  useEffect(() => {
    fetchDestination();
  }, []);

  useEffect(() => {
   handleRecommendation();
  });

  return (
    <div className="container mx-auto p-4">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {Object.keys(destination).length > 0 && (
        <div className="bg-teal-100 md:bg-white rounded-lg p-8 shadow-lg">
          
      <Link
            to="/homepage"
            className="text-teal-600 mb-8 inline-block underline hover:text-teal-800"
          >
            Back to Homepage
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-teal-800">
            {destination.destinationName}
          </h1>
          <img
            className="w-100 h-100 mb-6 rounded-lg shadow-md"
            src={destination.destinationImage}
            alt="Destination Image"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
            <div>
              <h2 className="text-teal-800 font-semibold mb-2">Max Altitude:</h2>
              <p>{destination.maxAltitude}</p>
              <h2 className="text-teal-800 font-semibold mb-2 mt-4">Trip Grade:</h2>
              <p>{destination.tripGrade}</p>
            </div>
            <div>
              <h2 className="text-teal-800 font-semibold mb-2">Cost:</h2>
              <p>{destination.destinationCost}</p>
              <h2 className="text-teal-800 font-semibold mb-2 mt-4">Completion Time:</h2>
              <p>{destination.completionTime}</p>
            </div>
            <div>

              <h2 className="text-teal-800 font-semibold mb-2 mt-4">Description:</h2>
          <p className="text-teal-800 mt-6"> {destination.destinationDescription}</p>
            </div>
          </div>
        
        </div>
      )}

<h1 className="font-bold text-center text-4xl mb-20 mt-10 text-teal-800">Similar Treks We Recommend</h1>
      <div className="mb-20 h-100 mt-10 grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 ">
        
        {recommendation && recommendation.map((destination)=>{
         return (
          <Link to={`/recommend/destination?search=${destination}`}>
          <div className="mb-10  text-center pt-5 h-[80px] w-[300px] rounded-lg shadow-md bg-teal-700 hover:bg-teal-800 ">
            <h1 className="text-white font-semibold text-xl">{destination}</h1>
          </div>
          </Link>
         )
         
        })}
      </div>
      
    </div>
  );
};

export default OneDestination;


