
import './App.css'
import Home from './components/pages/Home';
import UserLogin from './components/pages/UserLogin';
import UserSignup from './components/pages/UserSignup';
import GuideLogin from './components/pages/GuideLogin';
import GuideSignup from './components/pages/GuideSignup';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import ForgotPassword from './components/pages/ForgotPassword';
import VerifyOtp from './components/pages/VerifyOtp';
import ResetPassword from './components/pages/ResetPassword'
import Destination from './components/admin/Destination';
import AdminDashboard from './components/admin/adminDashboard';
import RedirectLogin from './components/pages/RedirectLogin';
import RedirectSignup from './components/pages/RedirectSignup';
import TouristDashboard from './components/tourist/TouristDashboard';
import SingleGuide from './components/tourist/SingleGuide';
import SingleDestination from './components/admin/SingleDestination';
import DeleteDestination from './components/admin/deleteDestination';
import Profile from './components/profile/profile';
import UpdateProfile from './components/profile/UpdateProfile';
import HomePage from './components/HomePage';


import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import axios from 'axios';
import SingleChat from './components/chats/SingleChat';
import OrderGuide from './components/tourist/OrderGuide';



function App() {
  
   const[userRole, setUserRole] = useState();
   const[user, setUser] = useState();

  useEffect(()=>{
    const getFormData = async()=>{
      const response = await axios.get('http://localhost:3000/profile',{
        withCredentials : true
      })
      setUser(response.data.data);
      setUserRole(response.data.data.role);
      // console.log(response.data.data.role)
    }
    getFormData();
    
  },[])
  
  
  // function PublicElement({children}){
  //   if(!user){
  //     return <> {children} </>
  //   }
  //  }
  function TouristElement({children}){
    if( !userRole === "tourist" || !userRole === "guide"){
      return undefined
    }else{
      return <> {children} </>
    }
    }


   function AdminElement({children}){
    if(!userRole === "admin"){
     return undefined
    }else{
      return <> {children} </>
    }
   }


   

  return (
    <>
<Router>
<Routes>
  
  <Route exact path='/' element={ <Home/> }/>
  <Route exact path='/redirectlogin' element={<RedirectLogin/>}/>
  <Route exact path='/redirectsignup' element={<RedirectSignup/>}/>
  <Route exact path='/user/login' element={<UserLogin/>}/>
  <Route exact path='/user/signup' element={<UserSignup/>}/>
  <Route exact path='/guide/login' element={<GuideLogin/>}/>
  <Route exact path='/guide/signup' element={<GuideSignup/>}/>
  <Route exact path='/forgotPassword' element={<ForgotPassword/>}/>
  <Route exact path='/resetPassword' element={<ResetPassword/>}/>
  <Route exact path='/verifyOtp' element={<VerifyOtp/>}/>
  <Route exact path='/contact' element={<Contact/>}/>
  <Route exact path='/about' element={<About/>}/>


{/* FOR ADMIN */}

  <Route exact path='/admin' element={ <AdminElement><AdminDashboard/></AdminElement> }/>
  <Route exact path='/destinations' element={<AdminElement><Destination/></AdminElement>}/>
  <Route exact path={'/destinations/:id'} element={<AdminElement><SingleDestination/></AdminElement>}/>
  <Route exact path={'/destinations/delete/:id'} element={<AdminElement><DeleteDestination/></AdminElement>}/>


{/* FOR TOURIST */}
  
  <Route exact path='/tourist' element={ <TouristElement><TouristDashboard/></TouristElement>  }/>
  <Route exact path={'/singleguide/:id'} element={ <TouristElement><SingleGuide/></TouristElement>  }/>
  <Route exact path= '/profile' element={<TouristElement><Profile/></TouristElement>}/>
  <Route exact path='/updateProfile' element={<TouristElement><UpdateProfile/></TouristElement>}/>
  <Route exact path='/orders/:id' element={<TouristElement><OrderGuide/></TouristElement>}/>



  <Route exact path= '/homepage' element={<HomePage/>}/>
</Routes>
</Router>
</>
  )
  }






export default App
