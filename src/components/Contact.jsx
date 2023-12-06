import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


export default function Contact(props){

return(
    <>


    <div className='mainContactContainer h-[980px] w-screen bg-white'>
    <div className='mainContactHeading border-b border-opacity-25 border-black mb-15 pb-15 absolute top-[10%] left-[10%]'>
    <h2 className='ContactHeadingFirst mb-5 text-3xl font-bold'>Contact Us</h2>
    </div>

   <div className='subContactContainer flex flex-row absolute top-[20%] left-[10%]'>
    <div className='firstContactContainer'>
        <h2 className='contactHeadingSecond mb-7 text-2xl font-semibold'>Send your message</h2>
        <form className='flex flex-col absolute left-[5px] text-lg' action="/contactus" method='post'>
           
            <label htmlFor="name"> <b>Your Name</b></label>
            <input className="mb-4 mt-2 w-96 h-10  rounded border-gray-300 border-2 text-base" type="text" name='name' id='name' placeholder=' Enter your name' required/>

            <label htmlFor="email"><strong>Email Address</strong></label>
            <input className='mb-4 mt-2 w-96 h-10 rounded border-gray-300 border-2 text-base' type="email" name='email' id='email' placeholder=' Enter your email address' required />
           
        
            <label htmlFor="number"><strong>Mobile Number</strong></label>
            <input className='mb-4 border-2 border-gray-300' type="text" name='number' id='number' placeholder=' +977 98xxxxxxxx'/>
            
            <label htmlFor="message"><strong>Message</strong></label>
            <textarea className='mt-1 mb-4 w-96 rounded-md  border-2 border-gray-300' name="message" id="message" cols="30" rows="10"></textarea>
          

           <p className='mb-4 font-semibold'>We want your input: questions, bug reports, complaints, praise, feature requests — every little bit helps.
             Let us know what we can do to improve TrekCompanion.</p>

             <input  type="submit" value="Send Message" className='sendMessage mb-1 mt-2  h-10 rounded border-custom-gray border  bg-slate-600 text-white text-lg w-36'/>

        </form>
    </div>
        
<div className='secondContactContainer absolute left-[800px]'>
<h2 className='contactHeadingThird pt-2'>Contact Details</h2>
<ul className='contactUl list-none mt-16 text-lg font-normal grid gap-5'>
    <li>Butwal, Rupandehi, Nepal</li>
    <div classname='subContactUl'>
    <li><strong>Call: </strong>01-11111111</li>
    <li><strong>Email:</strong> TrekCompanion@gmail.com</li>
    </div>
</ul>
</div>

</div>

</div>

    </>
    
)
}

