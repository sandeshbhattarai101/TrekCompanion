import React, { useState } from 'react'
import { useEffect } from 'react'
import Loader from '../globalComponent/Loader';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function KhaltiSuccess() {

  const navigate = useNavigate();
    // to get query paramaters in react
    const queryParams = new URLSearchParams(location.search)
    const pidx = queryParams.get('pidx')

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
    const verifyPidx = async()=>{
      
    try {
        const response = await axios.post('http://localhost:3000/payment/verify',{pidx},{
            withCredentials:true,
              headers:{
              "Content-Type" : "application/json"
            }
        })

      if(response.status == 200){
            setLoading(false)
            navigate('/homepage')
        }
      } catch (error) {
        console.log(error)
      }

     }

     verifyPidx();
     alert("Payment Verified Successfully")
    },[])

    if(loading){
       return (
         <Loader status='verifying'/>
       )
       
    }else{
      return(
        <Loader status='verified'/>
      
      )
    }

}
