import React from 'react'
import "./contact.css"
import Navbar from './Navbar'
import Footer from './Footer'


export default function Contact(props){

return(
    <>

    <div className='mainContact'>

    <div className='mainContactContainer'>
    <div className='mainContactHeading'>
    <h2 className='ContactHeadingFirst'>Contact Us</h2>
    </div>

   <div className='subContactContainer'>
    <div className='firstContactContainer'>
        <h2 className='contactHeadingSecond'>Send your message</h2>
        <form action="/contactus" method='post'>
           
            <label htmlFor="name"> <b>Your Name</b></label>
            <input type="text" name='name' id='name' placeholder='Enter your name' required/>

            <label htmlFor="email"><strong>Email Address</strong></label>
            <input type="email" name='email' id='email' placeholder='Enter your email address' required />
           
        
            <label htmlFor="number"><strong>Mobile Number</strong></label>
            <input type="number" name='number' id='number' placeholder='01xxxxxxxxx'/>
       
           
            
            <label htmlFor="message"><strong>Message</strong></label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
          

           <p>We want your input: questions, bug reports, complaints, praise, feature requests — every little bit helps.
             Let us know what we can do to improve TrekCompanion.</p>

             <input type="submit" value="Send Message" className='sendMessage'/>

        </form>
    </div>
        
<div className='secondContactContainer'>
<h2 className='contactHeadingThird'>Contact Details</h2>
<ul className='contactUl '>
    <li>Butwal, Rupandehi, Nepal</li>
    <div classname='subContactUl'>
    <li><strong>Call: </strong>01-11111111</li>
    <li><strong>Email:</strong> TrekCompanion@gmail.com</li>
    </div>
</ul>
</div>

</div>

</div>

</div>

    </>
    
)
}