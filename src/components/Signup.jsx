import React from 'react'
import { useState } from 'react'
import './signup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Signup() {

return(
  <>
  <div className="signupPage">
  <div className="signupContainer">
        <h2>Registration Form</h2>
        <form action="/signup" method="post">
            <div className="Form-group">
                <label htmlfor="email">Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div className="Form-group">
                <label htmlfor="username">Username:</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div className="Form-group">
                <label htmlfor="password">Password:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div className="Form-group">
                <input type="submit" value="Register"/>
            </div>
        </form>
            <Link  to="/loginForm">Already have an account?</Link>    
    </div>
    </div> 
</>
)

}
