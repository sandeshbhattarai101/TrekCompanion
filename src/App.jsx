
import './App.css'
import Mybody from './components/Mybody';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import About from './components/About';

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
  
</Routes>

<Footer/>
</Router>


</>
  )
  }

export default App
