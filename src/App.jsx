
import './App.css'
import Mybody from './components/Mybody';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import About from './components/About';
import ForgotPassword from './components/ForgotPassword';
import VerifyOtp from './components/verifyOtp';
import ResetPassword from './components/ResetPassword'
 

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";




function App() {

  

  return (
    <>
<Router>
 <Navbar title="TrekCompanion" company="Company" help="Help" explore="Explore"/>
<Routes>
  
  <Route exact path='/' element={<Mybody/>}/>
  <Route exact path='/contact' element={<Contact/>}/>
  <Route exact path='/loginForm' element={<Login/>}/>
  <Route exact path='/signupForm' element={<Signup/>}/>
  <Route exact path='/about' element={<About/>}/>
  <Route exact path='/forgotPassword' element={<ForgotPassword/>}/>
  <Route exact path='/verifyOtp' element={<VerifyOtp/>}/>
  <Route exact path='/resetPassword' element={<ResetPassword/>}/>
  
</Routes>

<Footer/>
</Router>


</>
  )
  }

export default App
