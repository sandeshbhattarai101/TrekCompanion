import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const CheckOut = () => {
  const params = useParams()
    const navigate = useNavigate()
    const[guide, setGuide] = useState([]);
    const {register,handleSubmit,formState} = useForm()
    const [paymentMethod,setPaymentMethod] = useState("COD")
    const [orderId,setOrderId] = useState({})

  //   const dispatch = useDispatch()
  //  const subTotal = products.reduce((amount,item)=>item.quantity * item.product.productPrice + amount,0)
  //  const shippingAmount = 100
  //  const totalAmount = subTotal + shippingAmount
   const handleOrder = async(data)=>{
    const orderDetails = {
        yourCurrentAddress: data.yourCurrentAddress, 
        totalAmount : guide.rate,
        paymentDetails : {
            method : paymentMethod
          },
          phoneNumber : data.phoneNumber
        }
        
        // Handle form submission logic here
        const response = await axios.post(`http://localhost:3000/api/orders/${params.id}`, orderDetails,{
          withCredentials : true,
          headers:{
            "Content-Type" : "application/json"
          }
          
        }) 
        if(response.status == 200){
          setOrderId(response.data.data._id)
          alert( response.data.message)
        }
       
      }


const proceedForKhaltiPayment=()=>{         
 if(paymentMethod === "khalti" ){
  const totalAmount = guide.rate
  
  handleKhalti(orderId,totalAmount)
}
}
// orderId laai render huna dina laai 

    useEffect(()=>{
      proceedForKhaltiPayment()
    },[orderId])
    
    
    
    
          const handlePaymentChange = (e)=>{
           setPaymentMethod(e.target.value)
    
            }

    const handleKhalti = async (orderId,totalAmount)=>{

    try {
      const response = await axios.post('http://localhost:3000/payment',{orderId,amount:totalAmount},{
        withCredentials:true,
          headers:{
          "Content-Type" : "application/json"
        }
      })
      if(response.status === 200){
        console.log(response.data.message)
        window.location.href = response.data.paymentUrl  //navigate garyo vane url ma paxadi append hune vaera yo alternative gareko ho
      }

    } catch (error) {
      console.log(error)
    }
   }




              
useEffect(()=>{
  
  const fetchGuide = async ()=> {
  
    const response = await axios.get(`http://localhost:3000/singleguide/${params.id}`,{
      withCredentials : true
    })
    setGuide(response.data.data.guide)
  }

        fetchGuide();

    },[])


 

  return (
    <>
    <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">

  <div className="mt-4 py-7 text-xs sm:mt-0 sm:ml-auto sm:text-base">

  </div>
</div>
<div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
  <div className="px-4 pt-8">

    <p className="mt-8 text-lg font-medium">Payment Methods</p>
    <form className="mt-5 grid gap-6">
      <div className="relative">
        <input className="peer hidden" id="radio_1" type="radio" name="radio" value="COD" checked={paymentMethod==="COD"} onChange={handlePaymentChange} />
        <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
          <div className="ml-5">
            <span className="mt-2 font-semibold">COD(Cash On Delivery)</span>
          </div>
        </label>
      </div>
      <div className="relative">
        <input className="peer hidden" id="radio_2" type="radio" value="khalti" name="radio" onChange={handlePaymentChange}  />
        <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
          <div className="ml-5">
            <span className="mt-2 font-semibold">Online(Khalti)</span>
          </div>
        </label>
      </div>
    </form>
  </div>
 <form onSubmit={handleSubmit((data)=>{
    handleOrder(data)
 })} noValidate> 
 <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
    <p className="text-xl font-medium">Payment Details</p>
    <p className="text-gray-400">Complete your order by providing your payment details.</p>
    <div className="">
      <label for="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
      <div className="relative">
        <input type="text" id="email" name="email" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" {...register("email",{required : "Email is required"})} />
        <p>{formState.errors.email && formState.errors.email.message}</p>


        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        </div>
      </div>
      <label for="phoneNumber" className="mt-4 mb-2 block text-sm font-medium">Phone Number</label>
      <div className="relative">
        <input type="number" id="phoneNumber" name="phoneNumber" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your Phone Number"{...register('phoneNumber',{required :"Phone Number is Required"})}  />

        <p>{formState.errors.phoneNumber && formState.errors.phoneNumber.message}</p>

      </div>
 
      <label for="billing-address" className="mt-4 mb-2 block text-sm font-medium">Current Address</label>
      <div className="flex flex-col sm:flex-row">
        <div className="relative flex-shrink-0 sm:w-7/12">
          <input type="text" id="yourCurrentAddress" name="yourCurrentAddress" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your Current Address" {...register("yourCurrentAddress",{required : "Current Address is required"})} />
          <p>{formState.errors.yourCurrentAddress && formState.errors.yourCurrentAddress.message}</p>
          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <img className="h-4 w-4 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/1200px-Flag_of_Nepal.svg.png" alt="Nepal" />
          </div>
        </div>
       
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-900">Total</p>
        <p className="text-2xl font-semibold text-gray-900">Rs {guide.rate}</p>
      </div>
    </div>
  {
    paymentMethod === "COD" ? (
      <button className="mt-4 mb-8 w-full rounded-md bg-gray-800 px-6 py-3 font-medium text-white">Place Order</button>
    ) :
    (  <button className="mt-4 mb-8 w-full rounded-md bg-gray-800 px-6 py-3 font-medium text-white" style={{backgroundColor:'purple'}}>Pay With Khalti</button>)
  }
  </div>
 </form>
</div>
    </>

  )
}

export default CheckOut






























// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';



//const CheckOut = () => {
//     const params = useParams()
//     const [formData, setFormData] = useState({
//         yourCurrentAddress: '',
//         guide : `${params.id}`,
//         phoneNumber: '',
//         totalAmount:"",
//         paymentDetails : {
//             method : ''
//         },
      
//     });
    
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({ ...prevData, [name]: value }));
//     };
    
    
//     const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//        const response = await axios.post(`http://localhost:3000/api/orders`, formData,{
//          withCredentials : true,
//          headers:{
//           "Content-Type" : "multipart/form-data"
//          }

//         })
//     //    console.log(data)
// //    handleKhalti(orderId,totalAmount);
        
//   };

// //   const handleKhalti = async (orderId,totalAmount)=>{
// //     try {
// //       const response = await axios.post('http://localhost:3000/api/payment',{orderId, totalAmount})
// //       if(response.status === 200){
// //         window.location.href = response.data.paymentUrl
// //       }

// //     } catch (error) {
// //       console.log(error)
// //     }
// //    }



//   return (
  //  <>
    
//     <div className="min-h-screen bg-teal-700 flex items-center justify-center">
//       <form
//         className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full md:w-1/2 lg:w-1/3"
//         onSubmit={handleSubmit}
//       >
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
//            Your Current Address
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="yourCurrentAddress"
//             type="text"
//             placeholder="Enter your address"
//             name="yourCurrentAddress"
//             value={formData.yourCurrentAddress}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
//             Phone Number
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="phoneNumber"
//             type="tel"
//             placeholder="Enter your phone number"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
//             Total Amount
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="totalamount"
//             type="number"
//             placeholder="Confirm your total amount"
//             name="totalAmount"
//             value={formData.totalAmount}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold">Payment Method</label>
//           </div>
//         <label className="inline-flex items-center mb-4">
//               <input
//                 type="radio"
//                 className="form-radio text-teal-500"
//                 name="method"
//                 value="Khalti"
//                 checked={formData.method === 'Khalti'}
//                 onChange={handleChange}
//               />
//               <span className="ml-2">Khalti</span>
//             </label>


//         <div className="flex items-center justify-between">
//           <button
//             className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//            Pay with Khalti
//           </button>
//         </div>
//       </form>
//     </div>
//     </>
  // );
// };

// export default CheckOut;
