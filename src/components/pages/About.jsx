

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function About() {
  return (
    <>
      <Navbar title="TrekCompanion" company="Company" help="Help" explore="Explore" />

      <div className="w-4/5 m-auto mt-10">

        {/* About Us Card */}
        <div className=" text-teal-800 text-xl font-normal p-8 rounded-md mb-8">
          <h1 className='font-bold text-3xl mb-4'>About Us</h1>
          <p className='text-justify leading-6'>
            TrekCompanion is a platform designed to connect tourists with independent trekking guides. We aim to provide a better trekking experience by eliminating the hassle of searching for a guide. Our system is a web-based application that uses MERN technology to provide user interface and user experience along with the database that would hold the credentials of the registered users as well as all the resources that make up the system.
          </p>
        </div>

        {/* Mission Card */}
        <div className=" text-teal-800 text-xl font-normal p-8 rounded-md mb-8">
          <h2 className='font-bold text-3xl mb-4'>Our Mission</h2>
          <p className='text-justify leading-6'>
            Our mission is to uplift a country's economy, especially a developing one like ours, through the growing tourism industry. We aim to recommend popular trekking destinations that are mostly preferred by tourists and suggest trekking guides based on the destination chosen by the tourist.
          </p>
        </div>

        {/* Values Card */}
        <div className=" text-teal-800 text-xl font-normal p-8 rounded-md">
          <h2 className='font-bold text-3xl mb-4'>Our Values</h2>
          <p className='text-justify leading-6'>
            We believe in the power of modern advancements and the convenience of planning everything by just tapping a mobile screen. We aim to bring this convenience to the field of tourism, providing a seamless experience for trekking enthusiasts.
          </p>
        </div>
      </div>

      
    <div className="our-team  w-3/4  pl-20 mb-10 ">
    <h2 className='font-bold text-[50px] text-center mt-20 ml-60 mb-28'>Our Team</h2>
    <div className="row grid grid-cols-1 xl:grid-cols-2 gap-20 ">
               <div className="container py-0.5 px-4 m-7 flex felx-row  ">
               <img className='w-40 h-40 lg:w-52 lg:h-52  rounded-[50%] shadow-none hover:shadow-md' src='../../images/binit.jpg' alt="Team Member 1"/>
                  <div className='ml-20'>
                   <p className='text-3xl mb-5'><strong>BINIT GAUTAM</strong></p>
                   <p><strong>Email: binitgautam911@gmail.com</strong></p>
                   <button className="button  bg-teal-700 border-none py-3 px-6 text-center no-underline inline-block  text-base my-1 mx-0.5 mt-5 cursor-pointor rounded-3xl 
                   text-white    hover:bg-teal-500  hover:text-black">Contact</button>
                    </div> 
               </div>
               <p className='text-xl ml-16 w-[500px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ut architecto fuga dolorem corrupti sunt, quos delectus adipisci. Placeat, distinctio quod earum optio repudiandae facere consequuntur nemo voluptatibus ducimus non.fuga dolorem corrupti sunt, quos delectus adipisci. Placeat, distinctio quod earum optio repudiandae facere consequuntur nemo voluptatibus ducimus non.</p>

               <div className="container py-0.5 px-4 m-7 flex flex-row">
               <img className='w-40 h-40 lg:w-52 lg:h-52 rounded-[50%] shadow-none hover:shadow-md ' src='../../images/sandesh.jpg' alt="Team Member 1"/>
               <div className='ml-20 '>
                   <p  className='text-3xl mb-5'><strong>SANDESH BHATTARAI</strong></p>
                   <p><strong> Email: sandeshbhattarai6@gmail.com</strong></p>
                   <button className="button
                   text-white bg-teal-700 border-none py-3 px-6  text-center no-underline inline-block  text-base my-1 mx-0.5 mt-5 cursor-pointor rounded-3xl  hover:bg-teal-500 hover:text-black">Contact</button>
                   </div>
               </div>
               <p className='text-xl ml-16 w-[500px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ut architecto fuga dolorem corrupti sunt, quos delectus adipisci. Placeat, distinctio quod earum optio repudiandae facere consequuntur nemo voluptatibus ducimus non.fuga dolorem corrupti sunt, quos delectus adipisci. Placeat, distinctio quod earum optio repudiandae facere consequuntur nemo voluptatibus ducimus non.</p>

               <div className="container py-0.5 px-4 m-7 flex flex-row ">
               <img className='w-40 h-40 lg:w-52 lg:h-52 rounded-[50%] shadow-none hover:shadow-md' src='../../images/sandip.jpg' alt="Team Member 1"/>
               <div className='ml-20'>
                   <p className='text-3xl mb-5'><strong>SANDIP REGMI BAGALE</strong> </p>
                   <p><strong>Email: sandip.bagale34@gmail.com</strong></p>
                   <button className="button  bg-teal-700 border-none py-3 px-6 text-center no-underline 
                   text-white inline-block  text-base my-1 mx-0.5 mt-5 cursor-pointor rounded-3xl hover:bg-teal-500 hover:text-black">Contact</button>
                </div>
               </div>
                   <p className='text-xl ml-16 w-[500px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ut architecto fuga dolorem corrupti sunt, quos delectus adipisci. Placeat, distinctio quod earum optio repudiandae facere consequuntur nemo voluptatibus ducimus non.fuga dolorem corrupti sunt, quos delectus adipisci. Placeat, distinctio quod earum optio repudiandae facere consequuntur nemo voluptatibus ducimus non.</p>
    </div>
</div>

      <Footer />
    </>
  );
}

