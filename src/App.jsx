
import './App.css'
import Mybody from './components/Mybody';
import UserLogin from './components/UserLogin';
import UserSignup from './components/UserSignup';
import GuideLogin from './components/GuideLogin';
import GuideSignup from './components/GuideSignup';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import ForgotPassword from './components/ForgotPassword';
import VerifyOtp from './components/verifyOtp';
import ResetPassword from './components/ResetPassword'
import Destination from './components/admin/Destination';
import AdminDashboard from './components/admin/adminDashboard';
import RedirectLogin from './components/RedirectLogin';
import RedirectSignup from './components/RedirectSignup';
import TouristDashboard from './components/tourist/TouristDashboard';
import SingleDestination from './components/admin/SingleDestination';
import DeleteDestination from './components/admin/deleteDestination';
import { useParams } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Profile from './components/profile/profile';





function App() {
const params = useParams();
  

  return (
    <>
<Router>
<Routes>
  
  <Route exact path='/' element={<Mybody/>}/>
  <Route exact path='/contact' element={<Contact/>}/>

  <Route exact path='/redirectlogin' element={<RedirectLogin/>}/>
  <Route exact path='/redirectsignup' element={<RedirectSignup/>}/>
  <Route exact path='/user/login' element={<UserLogin/>}/>
  <Route exact path='/user/signup' element={<UserSignup/>}/>
  <Route exact path='/guide/login' element={<GuideLogin/>}/>
  <Route exact path='/guide/signup' element={<GuideSignup/>}/>
  <Route exact path='/about' element={<About/>}/>
  <Route exact path='/forgotPassword' element={<ForgotPassword/>}/>
  <Route exact path='/verifyOtp' element={<VerifyOtp/>}/>
  <Route exact path='/resetPassword' element={<ResetPassword/>}/>
  <Route exact path='/destinations' element={<Destination/>}/>
  <Route exact path={'/destinations/:id'} element={<SingleDestination/>}/>
  <Route exact path={'/destinations/delete/:id'} element={<DeleteDestination/>}/>
  <Route exact path='/admin' element={<AdminDashboard/>}/>
  <Route exact path='/tourist' element={<TouristDashboard/>}/>
  <Route exact path= '/profile' element={<Profile/>}/>
  
</Routes>

<Footer/>
</Router>


</>
  )
  }

export default App
