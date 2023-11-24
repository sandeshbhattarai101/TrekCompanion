import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css';


export default function Footer() {
    return(
    <>
    <div className="main-Footer">
    <div className='main-container'>
    <div className="main-logo">TrekCompanion</div>
    <div className="main-items">
    <ul className="footerUl Footer-Company">
    <li className="footer-main">Company</li>
    <li><Link className="footer-item" to="/about">About us</Link></li>
    <li><Link className="footer-item" to="/contact">Contact us</Link></li>
    </ul>

    <ul className="footerUl Footer-Contact">
    <li className="footer-main">Help</li>
    <li><Link className="footer-item" to="/contact">Send a message</Link></li>
    </ul>
    </div>
    <div className="download-logo">
    <Link to="/"><img src="images/googleplay.png" alt="google play"className="playlogo"/></Link>
    <Link to="/"><img src="images/appstore.png" alt="appstore" className="applogo" /></Link>
    </div>
    <div className="copyright">&copy; 2024 Guideme Technologies Inc.</div>
</div>
</div>
 </>

)
}