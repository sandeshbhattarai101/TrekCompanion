import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';



const OrderGuide = () => {
    const params = useParams()
    const [formData, setFormData] = useState({
        yourCurrentAddress: '',
        guide : `${params.id}`,
        phoneNumber: '',
        totalAmount:"",
        paymentDetails : {
            method : ''
        },
      
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    
    
    const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
       const response = await axios.post(`http://localhost:3000/api/orders`, formData,{
         withCredentials : true,
         headers:{
          "Content-Type" : "multipart/form-data"
         }

        })
    //    console.log(data)
//    handleKhalti(orderId,totalAmount);
        
  };

//   const handleKhalti = async (orderId,totalAmount)=>{
//     try {
//       const response = await axios.post('http://localhost:3000/api/payment',{orderId, totalAmount})
//       if(response.status === 200){
//         window.location.href = response.data.paymentUrl
//       }

//     } catch (error) {
//       console.log(error)
//     }
//    }



  return (
    <>
    
    <div className="min-h-screen bg-teal-700 flex items-center justify-center">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full md:w-1/2 lg:w-1/3"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
           Your Current Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="yourCurrentAddress"
            type="text"
            placeholder="Enter your address"
            name="yourCurrentAddress"
            value={formData.yourCurrentAddress}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="tel"
            placeholder="Enter your phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
            Total Amount
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="totalamount"
            type="number"
            placeholder="Confirm your total amount"
            name="totalAmount"
            value={formData.totalAmount}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold">Payment Method</label>
          </div>
        <label className="inline-flex items-center mb-4">
              <input
                type="radio"
                className="form-radio text-teal-500"
                name="method"
                value="Khalti"
                checked={formData.method === 'Khalti'}
                onChange={handleChange}
              />
              <span className="ml-2">Khalti</span>
            </label>


        <div className="flex items-center justify-between">
          <button
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
           Pay with Khalti
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default OrderGuide;
