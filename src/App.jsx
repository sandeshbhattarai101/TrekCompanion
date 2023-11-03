
import './App.css'
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
<Mybody/>
<Footer/>



</Router>

</>
  )
}

export default App
