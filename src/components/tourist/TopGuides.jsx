import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const TopGuides = () => {
  const [guides, setGuides] = useState([]);


  useEffect(() => {
    const getUsersData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/guides", {
          withCredentials: true,
        });

        setGuides(response.data.data);
      } catch (error) {
        console.error("Error fetching guides:", error);
      }
    };

    getUsersData();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl text-teal-700 font-bold text-center mb-20">Top Guides</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-28 justify-evenly">
        {guides.length!=0 && guides.map((guide) => (
          <Link to={`/singleguide/${guide._id}`} key={guide._id}>
            <div className="card-body bg-teal-700 p-4 rounded-3xl shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2">
              <img
                className="w-full h-48 object-cover object-center rounded-md mb-4"
                src="../../public/images/guide.webp"
                alt="Guide"
              />
              <h5 className="text-gray-200  text-lg font-bold mb-2">{guide.username}</h5>
              <p className="text-gray-200  mb-2">{guide.email}</p>
              <p className="text-gray-200 font-bold">Rate: Rs {guide.rate} /Day</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopGuides;
