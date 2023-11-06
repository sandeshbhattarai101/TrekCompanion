
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
<Routes>
  
  
  <Route exact path='/' element={
  <>
  <Mybody/>
  <Footer/>
  </>
    }/>
  <Route exact path='/loginForm' element={<Login/>}/>
  <Route exact path='/signupForm' element={<Signup/>}/>
 
</Routes>

</Router>

</>
  )
  }

export default App
