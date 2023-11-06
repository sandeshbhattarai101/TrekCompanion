import React from 'react'
import { useState } from 'react'
import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Login() {

return (

    <>

    <div className="loginPage">
        <div className='loginContainer'>
        <h2>Login Form</h2>
        <form action="/login" method="post" >
            <div className="form-group">
                <label htmlfor="email">Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>
          
            <div className="form-group">
                <label htmlfor="password">Password:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div className="form-group">
                <input type="submit" value="Login"/>
            </div>
        </form>

        <div className='loginButton'>
        <Link to="/signupForm"> <button className="createNewAcc" type="submit" >Create new account</button> </Link> 
       <Link to="/forgotPassword">Forgot Password ? </Link> 
        </div>
      
    </div>
</div>
</>
)}