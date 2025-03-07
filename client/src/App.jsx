import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';

import About from "./components/about/About"
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Register from './components/register/Register';
import TransportRequest from './components/transports/TransportRequest';
import ShipmentTrack from './components/shipmentTrack/ShipmentTrack';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Transports from './components/transports/Transports';
import TransportDetails from './components/transports/TransportDetails';
import EditTransportRequest from './components/transports/EditTransportRequest';
import Information from './components/information/Information';


function App() {
  return (
    <AuthContextProvider>

      <div >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/transports' element={<Transports />} />
          <Route path='/transports/:transportId' element={<TransportDetails />} />
          <Route path='/transports/request' element={<TransportRequest />} />
          <Route path='/transports/request/:requestId/edit' element={<EditTransportRequest />} />
          <Route path='/about' element={<About />} />
          <Route path='/shipment' element={<ShipmentTrack />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
        <Information />
        <Footer />
      </div>
      
    </AuthContextProvider>
  )
}
export default App
