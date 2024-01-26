import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const PopularDestination = () => {
  const settings = {
    dots: false,
      infinite: false,
    speed: 400,
    slidesToShow: 4, // Adjust the number of slides to show based on your design
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get("http://localhost:3000/destinations");
        setDestinations(response.data.data);
      } catch (error) {
        console.error("Error fetching destinations:", error);
        alert("Something went wrong");
      }
    };

    fetchDestinations();
  }, []);

  return (
    <div className="PopularDestinationCards mt-10 mb-16 mx-auto max-w-7xl">
      <h1 className="text-3xl font-bold text-center mb-10 text-teal-700">
        Popular Destinations
      </h1>

      <Slider {...settings}>
        {destinations.map((destination) => (
          <div key={destination._id} className="card-body text-center">
            <Link to={`/oneDestination/${destination._id}`}>
              <img
                className="cardImage object-cover h-52 w-72 p-1 rounded-xl shadow-md mx-auto"
                src={destination.destinationImage}
                alt="destination"
              />
            </Link>
            <h5 className="cardTitle font-bold mt-4 text-teal-800">
              {destination.destinationName}
            </h5>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PopularDestination;


