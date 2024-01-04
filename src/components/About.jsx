import React from 'react'
import "./about.css"
import Navbar from './Navbar';



export default function About() {

  return (
    <>
        <Navbar title="TrekCompanion" company="Company" help="Help" explore="Explore"/>
    <div className=" w-4/5 m-auto p-20">
    <h1 className='font-bold text-xl my-1'>About Us</h1>
    <p className='text-justify leading-6 mb-3'>TrekCompanion is a platform designed to connect tourists with independent trekking guides. We aim to provide a better trekking experience by eliminating the hassle of searching for a guide. Our system is a web-based application that uses MERN technology to provide user interface and user experience along with the database that would hold the credentials of the registered users as well as all the resources that make up the system.</p>
    <h2 className='font-bold text-xl' >Our Mission</h2>
    <p className='text-justify leading-6 mb-3'>Our mission is to uplift a country's economy, especially a developing one like ours, through the growing tourism industry. We aim to recommend popular trekking destinations that are mostly preferred by tourists and suggest trekking guides based on the destination chosen by the tourist.</p>
    <h2 className='font-bold text-xl'>Our Values</h2>
    <p className='text-justify leading-6 mb-3'>We believe in the power of modern advancements and the convenience of planning everything by just tapping a mobile screen. We aim to bring this convenience to the field of tourism, providing a seamless experience for trekking enthusiasts.</p>
</div>
<div className="our-team  w-3/4 m-auto p-5 ">
    <h2 className='font-bold text-xl my-1 ml-10'>Our Team</h2>
    <div className="row d-flex flex-wrap justify-between ">
        <div className="column  flex-1/2 p-2 ">
            <div className="card border-2 rounded-3xl shadow-md hover:shadow-xl transition w-full ">
               <div className="container py-0.5 px-4 m-7  ">
               <img className='w-60 rounded-3xl shadow-none hover:shadow-md ' src='../../images/sandesh.jpg' alt="Team Member 1"/>
                   <p className=" title text-xl font-semibold">Founder</p>
                   <p><strong>SANDESH BHATTARAI</strong></p>
                   <p><strong>sandeshbhattarai6@gmail.com</strong></p>
                   <p><button className="button bg-green-500 border-none py-4 px-8 text-center no-underline inline-block  text-base my-1 mx-0.5 cursor-pointor  ">Contact</button></p>
               </div>
               <div className="container py-0.5 px-4 m-7  ">
               <img className='w-60 rounded-3xl shadow-none hover:shadow-md' src='../../images/sandip.jpg' alt="Team Member 1"/>
                   <p className="title text-xl font-semibold">Founder</p>
                   <p><strong>SANDIP REGMI BAGALE</strong> </p>
                   <p><strong>sandip.bagale34@gmail.com</strong></p>
                   <p><button className="button  bg-green-500 border-none py-4 px-8 text-center no-underline inline-block  text-base my-1 mx-0.5 cursor-pointor  ">Contact</button></p>
               </div>
               <div className="container py-0.5 px-4 m-7  ">
               <img className='w-60 rounded-3xl shadow-none hover:shadow-md' src='../../images/binit.jpg' alt="Team Member 1"/>
                   <p className="title text-xl font-semibold">Founder</p>
                   <p><strong>BINIT GAUTAM</strong></p>
                   <p><strong>binitgautam911@gmail.com</strong></p>
                   <p><button className="button  bg-green-500 border-none py-4 px-8 text-center no-underline inline-block  text-base my-1 mx-0.5 cursor-pointor  ">Contact</button></p>
               </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}
