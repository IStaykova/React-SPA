import {Routes, Route} from 'react-router-dom';

import About from "./about/About"
import Client from "./client/Client"
import Contact from "./contact/Contact"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import Home from "./home/Home"
import Info from "./info/Info"
import Services from "./services/Services"
import ServiceDetails from './services/ServiceDetails';
import ShipmentTrack from './shipmentTrack/ShipmentTrack';
import Register from './register/Register';

function App() {

  return (

    <div >
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/services/:serviceId' element={<ServiceDetails />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/register' element={<Register />} />
    </Routes>


    {/* 
    <ShipmentTrack />
    <Client /> */}

    <Info />
    <Footer /> 
    </div>
 
  
  )
}

export default App
