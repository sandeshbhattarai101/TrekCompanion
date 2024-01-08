import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useNavigate, Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'


export default function DeleteDestination(){
    const params = useParams();
    const navigate = useNavigate();
    
    
    useEffect(()=>{
        const DeleteFormData = async()=>{
            // console.log("hello")
            await axios.delete(`http://localhost:3000/destinations/${params.id}`)
            //console.log(previousData.data.data[0])
            
            
        }
        DeleteFormData();
        
        navigate('/admin')
    },[])
    
    
    return (
    <>

    </>
  )
}
