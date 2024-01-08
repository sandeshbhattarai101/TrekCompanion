import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Profile = () => {
 
    const[profile,setProfile] = useState({});

    const fetchProfile = async()=>{
        const response = await axios.get('http://localhost:3000/profile',{
            
                withCredentials:true
            
        });
    
        // console.log(response.data.data);
        if(response.status==200){
            setProfile(response.data.data);
            
        } else{
            alert("something went wrong")
        }

    };

    useEffect(()=>{
        fetchProfile()
    },[]);
  return (
    <div>
        <div className="flex justify-center items-center h-screen bg-slate-500">
      <div className="max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center"> User Profile</div>
          <div className="border-t border-gray-200"></div>
          <div className="py-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Email:</span>
              <span className="text-gray-800">{profile.email}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Username:</span>
              <span className="text-gray-800">{profile.username}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Password:</span>
              <span className="text-gray-800">••••••••</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Role:</span>
              <span className="text-gray-800">{profile.role}</span>
            </div>

            <div className="px-6 py-4">


          <Link to={"/updateProfile"}>
            <button
             
              className="bg-slate-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              
              Update Profile
            </button>
            </Link>
          </div>


            
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Profile

