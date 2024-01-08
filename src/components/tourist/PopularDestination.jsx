import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularDestination = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 2,
  };
  const [destinations, setDestinations] = useState([]);

  const fetchDestinations = async () => {
    const response = await axios.get("http://localhost:3000/destinations");
   // console.log(response.data.data);
    if (response.status == 200) {
      setDestinations(response.data.data);
    } else {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);
  return (
    <div className="PopularDestinationCards h-fit left-24 top-10 mb-28 relative ">
      <h1 className="mb-10 font-serif font-semi-bold text-3xl">
        Popular Destinations
      </h1>

      <Slider {...settings}>
        {destinations.map((destination) => {
          return (
            <div key={destination._id} className="card-body text-center">
              <img
                className="cardImage object-cover h-[150px] md:h-[280px] w-[130px] md:w-[230px] p-1 rounded-xl shadow-md "
                src={destination.destinationImage}
                alt="image"
              />
              <h5 className="cardTitle font-bold  mt-2">
                {destination.destinationName}
              </h5>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default PopularDestination;
