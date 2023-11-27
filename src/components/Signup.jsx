import React from 'react'
import { useNavigate } from 'react-router-dom'
import './signup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Signup() {
    const navigate = useNavigate()//location haru lai navigate garda chainxa

    const createUser = async (e)=>{
       e.preventDefault() //page refresh huna bata bachako natra data lost huna sakxa
      
      //FormData le tyo form ko input field ko name use garera data linxa
      const formData = new FormData(e.currentTarget) //FormData le form ko data have ARRAY ko form ma linxa 
      const data = Object.fromEntries(formData) //object.fromEntries le tyo ARRAY lai OBJECT(KEY:VALUE) ma change garxa
  
  //axios.post le arko argument object ma linxa tesaile convert gareko mathiko data lai object ma
   
      //send above states data to api
     const response = await axios.post("http://localhost:2000/register", data) 
     if (response.status == 201){
      alert(response.data.message)
      navigate("/")
    }else{
      alert("Something went wrong")
     }
  }
return(
  <>
  <div className="signupPage">
  <div className="signupContainer">
        <h2>Registration Form</h2>
        <form onSubmit={createUser} method='post'>
            <div className="Form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div className="Form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div className="Form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div className="Form-group">
                <input type="submit" value="register"/>
            </div>
        </form>
            <Link  to="/loginForm">Already have an account?</Link>    
    </div>
    </div> 
</>
)

}
