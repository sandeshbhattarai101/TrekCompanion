import React from 'react'
import {FaStar, FaStarHalfAlt} from "react-icons/fa"
import {AiOutlineStar} from "react-icons/ai"

export default function StarRating({stars, rating}) {
  const ratingStar = Array.from({length: 5}, (elem, index)=>{
 let number = index + 0.5;
  
    return (
    <span key={index}>
        {stars >= index + 1 ? (
            <FaStar className="icon text-base text-yellow-500  " />
        ): stars >= number ? (
            <FaStarHalfAlt className="icon text-base text-yellow-500 " />
        ) :(
            <AiOutlineStar className="icon text-base text-yellow-500 " />
        )
    }

    </span>
  )

})
return (
        <div className="icon-style flex gap-[0.1rem] ml-7 items-center justify-start ">
            {ratingStar}
          <div className=' text-sm ml-0'>({rating})</div>  
        </div>
)

}
