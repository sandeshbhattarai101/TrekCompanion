import React from 'react'
import "./about.css"


export default function About() {

  return (
    <>
    
    <div className="about-us">
    <h1>About Us</h1>
    <p>TrekCompanion is a platform designed to connect tourists with independent trekking guides. We aim to provide a better trekking experience by eliminating the hassle of searching for a guide. Our system is a web-based application that uses MERN technology to provide user interface and user experience along with the database that would hold the credentials of the registered users as well as all the resources that make up the system.</p>
    <h2>Our Mission</h2>
    <p>Our mission is to uplift a country's economy, especially a developing one like ours, through the growing tourism industry. We aim to recommend popular trekking destinations that are mostly preferred by tourists and suggest trekking guides based on the destination chosen by the tourist.</p>
    <h2>Our Values</h2>
    <p>We believe in the power of modern advancements and the convenience of planning everything by just tapping a mobile screen. We aim to bring this convenience to the field of tourism, providing a seamless experience for trekking enthusiasts.</p>
</div>
<div className="our-team">
    <h2>Our Team</h2>
    <div className="row">
        <div className="column">
            <div className="card" >
               <div className="container">
               <img src='../../public/images/sandesh.jpg' alt="Team Member 1"/>
                   <p className="title">Founder</p>
                   <p><strong>SANDESH BHATTARAI</strong></p>
                   <p><strong>sandeshbhattarai6@gmail.com</strong></p>
                   <p><button className="button">Contact</button></p>
               </div>
               <div className="container">
               <img src='../../public/images/sandip.jpg' alt="Team Member 1"/>
                   <p className="title">Founder</p>
                   <p><strong>SANDIP REGMI BAGALE</strong> </p>
                   <p><strong>sandip.bagale34@gmail.com</strong></p>
                   <p><button className="button">Contact</button></p>
               </div>
               <div className="container">
               <img src='../../public/images/binit.jpg' alt="Team Member 1"/>
                   <p className="title">Founder</p>
                   <p><strong>BINIT GAUTAM</strong></p>
                   <p><strong>binitgautam911@gmail.com</strong></p>
                   <p><button className="button">Contact</button></p>
               </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}
