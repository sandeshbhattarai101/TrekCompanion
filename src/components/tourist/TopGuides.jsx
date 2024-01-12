import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopGuides = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  const [guides, setGuides] = useState([]);
    
 useEffect(()=>{

  const getUsersData = async()=>{
    const response = await axios.get('http://localhost:3000/guides',{
      withCredentials : true
    })
    
    setGuides(response.data.data);
    
    
  }
  getUsersData();
  
},[])

  return (
    <div className="topGuideCards absolute w-[40%]  left-24 bottom-100 ">
      <h1 className="mb-10 font-serif font-semi-bold text-3xl">
        Top Guides
      </h1>
      <Slider {...settings} >

        { guides.map((guide) => {
          return (
            <div key={guide._id} className="card-body  w-full pr-2 mb-1  rounded-2xl ">
              <img
                className="cardImage object-cover h-[160px] md:h-[240px] w-[220px] md:w-[260px] ml-2 rounded-xl shadow-sm "
                src='../../public/images/guide.webp'
                alt="image"
              />
              <h5 className="guideName font-bold  mt-2 ml-2">
               Name: {guide.username}
              </h5>
              <h5 className="guideName font-bold  mt-2 ml-2">
               Email: {guide.email}
              </h5>
              <h5 className="guideName font-bold  mt-2 ml-2">
               Rate: {guide.rate}
              </h5>
            </div>
          );
        })
       
      
      }
      </Slider>
    </div>
  );
};

export default TopGuides;
