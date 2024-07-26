import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';

import About from "./components/about/About"
import Client from './components/client/Client';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Info from './components/info/Info';
import Register from './components/register/Register';
import ServiceDetails from './components/services/ServiceDetails';
import ServiceRequest from './components/services/ServiceRequest';
import Services from './components/services/Services';
import ShipmentTrack from './components/shipmentTrack/ShipmentTrack';
import Login from './components/login/Login';
import { AuthContext } from './contexts/AuthContext';
import Logout from './components/logout/Logout';


function App() {
  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    setAuthState(state);
  }
  const contextData = {
    userId: authState._id,
    username: authState.username,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
  };

  return (
    <AuthContext.Provider value={contextData}>

    <div >
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/services/:serviceId' element={<ServiceDetails />} />
      <Route path='/services/request' element={<ServiceRequest/>} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/logout' element={<Logout/>} />

    </Routes>

    {/* 
    <ShipmentTrack />
    <Client /> */}

    <Info />
    <Footer /> 
    </div>
    </AuthContext.Provider>
  
  )
}

export default App
