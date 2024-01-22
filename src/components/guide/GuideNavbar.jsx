import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import DropDownProfile from '../tourist/DropDownProfile'
import profile from '../../../public/images/pp.png';
import { ChatState } from '../../Context/ChatProvider';


export default function GuideNavbar() {
    const { user } = ChatState();
    const [openProfile, setOpenProfile] = useState(false);
  
    return (
      <>
      
        <div className="touristNavbar h-16 bg-teal-700 flex justify-between items-center px-4 sm:px-8">
          <div className="flex items-center">
            <img
              className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 cursor-pointer"
              src={profile}
              alt=""
              onClick={() => {
                setOpenProfile((prev) => !prev);
              }}
            />
            <div className="text-white text-lg font-medium font-sans ml-2 sm:ml-4">
              {user.username}
            </div>
          </div>
  
          <div className="hidden sm:flex items-center space-x-4">
            {/* Additional navigation links or icons can be added here */}
          </div>
  
          <div className="sm:hidden cursor-pointer">
            <FontAwesomeIcon
              icon={faUser}
              size="2x"
              className="text-white"
              onClick={() => {
                setOpenProfile((prev) => !prev);
              }}
            />
          </div>
  
          {openProfile && <DropDownProfile/>}
        </div>
      
      </>
    );
  
}
