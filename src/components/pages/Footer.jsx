import React from 'react'
import { Link } from 'react-router-dom';



export default function Footer() {
    return(
    <>
    <div className="main-Footer bg-black text-white ">
    <div className='main-container  ml-[100px] w-screen'>
    <div className="main-logo text-2xl">TrekCompanion</div>
    <div className="main-items flex flex-row">
    <ul className="footerUl Footer-Company mt-5 mr-[100px] list-none">
    <li className="footer-main text-2xl mb-4">Company</li>
    <li><Link className="footer-item text-lg mb-2" to="/about">About us</Link></li>
    <li><Link className="footer-item text-lg" to="/contact">Contact us</Link></li>
    </ul>

    <ul className="footerUl Footer-Contact mt-6">
    <li className="footer-main text-white text-2xl no-underline mb-4">Help</li>
    <li><Link className="footer-item hover:text-white text-lg" to="/contact">Send a message</Link></li>
    </ul>
    </div>
    <div className="download-logo flex flex-row items-center">
    <Link to="/"><img src="images/googleplay.png" alt="google play"className="playlogo h-[150px] w-[160px] mr-[50px]"/></Link>
    <Link to="/"><img src="images/appstore.png" alt="appstore" className="applogo h-[50px] w-[150px]"/></Link>
    </div>
    <div className="copyright text-white font-light text-sm">&copy; 2024 Guideme Technologies Inc.</div>
</div>
</div>
 </>

)
}