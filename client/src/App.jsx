import {Routes, Route} from 'react-router-dom';

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


function App() {

  return (

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
