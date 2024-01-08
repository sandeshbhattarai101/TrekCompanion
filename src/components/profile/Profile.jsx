import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Profile = () => {
    const[profile,setProfile] = useState({});

    const fetchProfile = async()=>{
        const response = await axios.get("http://localhost:3000/profile",{
            
                withCredentials:true
            
        });
    
        console.log(response.data.data);
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
        <h1>{profile.email}</h1>
    </div>
  )
}

export default Profile

