
import './App.css'
import Navbar from './components/Navbar';
import Mybody from './components/Mybody';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';

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
<Mybody/>



</Router>

</>
  )
}

export default App
