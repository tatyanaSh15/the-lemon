import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import AboutUs from './AboutUs';
import Contacts from './Contacts';
import Logo from './Logo';

function App() {
    return <Router>      
      <nav>
        <div className='logo'> 
          <Logo/>
        </div>
        <div className='container-link'> 
          <Link to="/" className='link'>Home</Link>
          <Link to="/aboutUs" className='link'>About Us</Link>
          <Link to="/contacts" className='link'>Contacts</Link>
        </div>
      </nav>    

      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/contacts" element={<Contacts/>}/>        
      </Routes>
    </Router>
}

export default App;
