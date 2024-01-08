import React,{Component} from 'react'
import './DropDownProfile.css'
import { Link } from 'react-router-dom'



const DropDownProfile = () => {
  // const [profile, setProfile] = useState([]);
  // const fetchProfile = async () => {
  //   const response = await axios.get("http://localhost:3000/profile");
  //  // console.log(response.data.data);
  //   if (response.status == 200) {
  //     setProfile(response.data.data);
  //   } else {
  //     alert("something went wrong");
  //   }
  // };

  // useEffect(() => {
  //   fetchProfile();
  // }, []);
  return (
    <div className='flex flex-col dropDownProfile left-24'>
        <ul className='flex flex-col gap-4'>
            <li><Link to={`/profile`}>Profile </Link> </li>
            <li><Link to={`/updateProfile`}>Set My Profile</Link> </li>
            <li><Link>Logout</Link></li>
        </ul>
    </div>
  )
}

export default DropDownProfile