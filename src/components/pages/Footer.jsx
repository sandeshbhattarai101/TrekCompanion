


import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="main-Footer  relative bg-gray-600 text-white py-12">
      <div className="main-container flex flex-col items-center">
        <div className="main-logo text-3xl mb-6 font-bold">TrekCompanion</div>
        <div className="main-items flex flex-col md:flex-row md:justify-between w-full md:w-4/5 lg:w-3/4">
          <ul className="footerUl Footer-Company list-none mb-8 md:mb-0">
            <li className="footer-main text-xl mb-4">Company</li>
            <li><Link className="footer-item text-lg" to="/about">About us</Link></li>
            <li><Link className="footer-item text-lg" to="/contact">Contact us</Link></li>
          </ul>

          <ul className="footerUl Footer-Contact mb-8 md:mb-0">
            <li className="footer-main text-xl mb-4">Help</li>
            <li><Link className="footer-item text-lg hover:text-gray-400" to="/contact">Send a message</Link></li>
          </ul>

          <div className="download-logo flex flex-row items-center mb-8 md:mb-0">
            <Link to="/"><img src="images/googleplay.png" alt="google play" className="playlogo h-16 w-16 mr-4 md:h-20 md:w-20" /></Link>
            <Link to="/"><img src="images/appstore.png" alt="appstore" className="applogo h-8 w-24 md:h-10 md:w-28" /></Link>
          </div>
        </div>

        <div className="copyright text-gray-500 font-light text-sm">
          &copy; 2024 Guideme Technologies Inc.
        </div>
      </div>
    </div>
  );
}
